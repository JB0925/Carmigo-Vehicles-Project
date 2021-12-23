const express = require("express");
const cors = require("cors");
const vehicleRoutes = require("./routes/vehicles");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/vehicles", vehicleRoutes);

app.use((req, res, next) => {
  const error = {
    status: 404,
    message: "Not Found"
  }

  return next(error);
});


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status }
    });
});

module.exports = app;