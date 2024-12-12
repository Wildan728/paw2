const Buku = require("../model/buku");

const createBuku = (req, res) => {
    const buku = new Buku({
        judul: req.body.judul,
        penulis: req.body.penulis,
        genre: req.body.genre
    });

    console.log(buku);
    buku.save()
        .then((createdBuku) => {
            res.status(201).json({
                message: "Data Berhasil Disimpan",
                bookId: createdBuku._id
            });
        })
        .catch((err) => {
            res.status(500).json();
        });

};

const readBuku = (req, res) => {
    Buku.find()
        .then((documents) => {
            res.status(201).json({
                message: "Get Data Buku",
                bukus: documents
            });
        });
};

const deleteBuku = (req, res) => {
    Buku.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(201).json({
                message: "Buku berhasil dihapus",
                result: result
            });
        });
};

const updateBuku = (req, res) => {
    const buku = new Buku({
        _id: req.params.id,
        judul: req.body.judul,
        penulis: req.body.penulis,
        genre: req.body.genre
    });

    Buku.updateOne({ _id: req.params.id }, buku)
        .then((hasil) => {
            res.status(200).json({
                message: "Update Berhasil",
                result: hasil
            });
        });
};

module.exports = { createBuku, readBuku, deleteBuku, updateBuku };