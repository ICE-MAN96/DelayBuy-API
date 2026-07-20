const express = require("express");
const cors = require("cors");

const itemRoutes = require("./routes/items");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DelayBuy API Running"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
