const db = require("../config/db");

exports.getItems = (req, res) => {
  res.json({
    success: true,
    message: "Menampilkan semua data barang"
  });
};

exports.createItem = (req, res) => {
  res.json({
    success: true,
    message: "Barang berhasil ditambahkan"
  });
};

exports.updateItem = (req, res) => {
  res.json({
    success: true,
    message: "Barang berhasil diperbarui"
  });
};

exports.deleteItem = (req, res) => {
  res.json({
    success: true,
    message: "Barang berhasil dihapus"
  });
};
