const { db } = require('../utilities/admin');

// post review function

exports.postReview = (request, response) => {
  if (request.body.body.trim() === '') return response.status(400).json({ body: 'Body must not be empty' });

  const newReview = {
    body: request.body.body,
    handle: request.body.handle,
    createdAt: new Date().toISOString(),
    upVoteCount: 0,
    commentCount: 0
  };

  db.collection('reviews').add(newReview).then((doc) => {
      const responseReview = newReview;
      responseReview.reviewId = doc.id;
      response.json(responseReview);
    })
    .catch((error) => {
      response.status(500).json({ error: 'something went wrong' });
      console.error(error);
    });
};


// Comment on a review

exports.commentOnReview = (request, response) => {
  if (request.body.body.trim() === '') return response.status(400).json({ comment: 'Must not be empty' });

  const newComment = {
    body: request.body.body,
    createdAt: new Date().toISOString(),
    reviewId: request.params.reviewId,
    handle: request.body.handle
  };
  console.log(newComment);

  // db collection name yet to be decided
  // review or comments??
  db.doc(`/reviews/${request.params.reviewId}`)
    .get()
    .then((doc) => {
      //ie the review doesnt exist anymore
      if (!doc.exists) {
        return response.status(404).json({ error: 'Review not found' });
      }
      return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    })
    .then(() => {
      // call the db comments
      return db.collection('comments').add(newComment);
    })
    .then(() => {
      response.json(newComment);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({ error: 'Something went wrong' });
    });
};

// get one review including comments.
// this will be called when a user clicks
// into the game page. Only then will the
// review along with previous comments be
// displayed to the user.

exports.getReview = (request, response) => {
  let reviewData = {};
  db.doc(`/reviews/${request.params.reviewId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: 'Review not found' });
      }
      reviewData = doc.data();
      reviewData.reviewId = doc.id;
      return db

        // add in collection name here (reviews)
        .collection('comments')
        //.orderBy('createdAt', 'desc')
        .where('reviewId', '==', reviewData.reviewId)
        .get();
    })
    .then((data) => {
      reviewData.comments = [];
      data.forEach((doc) => {
        reviewData.comments.push(doc.data());
      });
      return response.json(reviewData);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ error: error.code });
    });
};

// get all reviews

exports.getAllReviews = (request, response) => {
    db.collection('reviews')
    //.orderBy('rating','desc')
    .get()
    .then((data) => {
        let reviews = [];
        data.forEach((doc) => {
            reviews.push({
                reviewId: doc.id,
                body: doc.data().body,
                commentCount: doc.data().commentCount,
                gameId: doc.data().gameId,
                handle: doc.data().handle,
                upVoteCount: doc.data().upVoteCount
            });
        });
        return response.json(reviews);
    })
    .catch((error) => {
        console.error(error);
        response.status(500).json({ error: error.code });
    });
};
