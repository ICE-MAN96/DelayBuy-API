const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Get all items"
    });
});

router.post("/", (req, res) => {
    res.json({
        message: "Create new item"
    });
});

module.exports = router;
