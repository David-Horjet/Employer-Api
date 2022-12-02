const mongoose = require('mongoose');
const express = require('express');

const PORT = process.env.PORT;
const dbURI = process.env.MONGO_URI;

// Setting the app default
const app = express();

// Connecting to mongoose database
const connectDb = () => {
     mongoose
          .connect(dbURI, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
          })
          .then((result) => {
               app.listen(PORT, () => {
                    console.log(`CrudApp's Server is listening at port http://localhost:${PORT}.....`);
               });
          })
          .catch((error) => console.log(error));
}

module.exports = {
     connectDb
}