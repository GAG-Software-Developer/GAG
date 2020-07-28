const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();


app.get('/', (req, res) => {
    return res.status(200).send('Hello World');
});

exports.widgets = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    const nama = request.body.nama;
    const email = request.body.email;
    const sex = request.body.sex;
    
     //init users
    let usersRef = db.collection('users');
    
    //Isi row data
    
    usersRef.add(
        {
            nama: nama,
            email: email,
            telpon: '081231466200'
        }, {
            nama: "nama",
            email: "email",
            telpon: '081231466200'
        }

    );
    ((addNewDoc) ?  response.send("sukses") :  response.send("failed"));
}); 
