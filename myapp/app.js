const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello NEW World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))


/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>*/