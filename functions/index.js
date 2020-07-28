const functions = require('firebase-functions');
//const angka = require('../functions/main');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const express = require('express');
const cors = require('cors');
const app = express();


let db = admin.firestore();


app.get('/', (req, res) => {
    return res.status(200).send('Hello World');
});

exports.widgets = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
let user = db.collection('users');
let kardus = db.collection('kardus');
let kelas = db.collection('kelas');




exports.helloWorld = functions.https.onRequest((request, response) => {
    //-----------create .add({}) akan menambahkan data baru tapi hanya satu data
    functions.logger.info("Hello logs!", { structuredData: true });
    let setAda = user.add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    }
    );
    let setAda0 = kardus.add({
        first: 'Kar',
        last: 'Dus',
        born: 1816
    }
    );
    let setAda1 = kelas.add({
        first: 'Matahari',
        last: 'Bool',
        born: 1817
    }
    );
    response.send("succses");

    //-----------create .set({}) akan membuat data baru dengan menghapus data lama dan create baru
    // var allan
    // for (var index = 0; index < 3; index++) {
    //     //const element = array[index];
    //     let aTuringRef = db.collection('users').doc('index' + index);
    //     allan = aTuringRef.set({
    //         'first': 'Alan',
    //         'middle': 'Mathison',
    //         'last': 'Turing',
    //         'born': 1912
    //     });

    // }
    // response.send(allan);



    // exports.apa = functions.https.onRequest((request, response) => {
    //     functions.logger.info("Hello logs!", { structuredData: true });
    //     const nama = request.body.nama;
    //     const email = request.body.email;
    //     response.send("Hello nama saya " + nama + "email " + email);
    // }); 
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
    ((addNewDoc) ? response.send("sukses") : response.send("failed"));
}); 
