var express = require('express');
var router = express.Router();

const Buku = require("../model/buku");
/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond dari BUKU router');
// });

// format JSON
router.post('path', (req, res) => {
    const buku = new buku({
        judul: req.body.judul,
        penulis: req.body.penulis,
        genre: req.body.genre
    });

    console.log(buku);
    res.status(201).json({
        message: "Data berhasil disimpan"
    });
});

module.exports = router;