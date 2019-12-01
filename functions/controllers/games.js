const { db} = require('../utilities/admin');

//get all games
exports.getAllGames = (req, res) => {
    db.collection('games')
    .orderBy('rating','desc')
    .get()
    .then((data) => {
        let games = [];
        data.forEach((doc) => {
            games.push({
                gameId: doc.id,
                rating: doc.data().rating,
                description: doc.data().description

            });
        });
        return res.json(games);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
    });
};


//get one game
exports.getGame = (req, res) => {
    let gameData = {};
    db.doc(`/games/${req.params.gameId}`)
    .get()
    .then((doc) => {
        if (!doc.exists) {
            return res.status(404).json({ error: 'Game not found' });
        }
        gameData = doc.data();
        gameData.gameId = doc.Id;
        /*return db
            .collection('games')
            .orderBy('rating','desc')
            .where('gameId', '==', req.params.gameId)
            .get();*/
    })
    .then((data) => {
        /*gameData.games = [];
        data.forEach((doc) => {
            gameData.games.push(doc.data());
        });*/
        return res.json(gameData);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
    });

};
