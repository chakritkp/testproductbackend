const dotenv = require('dotenv').config();
const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors');
const productsRoutes = require('./routes/productsRoutes');
const PORT = process.env.PORT;
const DB = process.env.DATABASE;
const DBURI = process.env.DATABASENAME;
const DATAAUTH = process.env.DATABASEAUTH;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

mongoose.connect(`mongodb+srv://${DBURI}:${DATAAUTH}.yf01htl.mongodb.net/${DB}`);

app.use("/api", productsRoutes)
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send('Chakrit Kaewploy')
  });
  
// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port \x1b[32mhttp://localhost:${PORT}`);
});
