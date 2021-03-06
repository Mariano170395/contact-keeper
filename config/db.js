const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectdb = async() => {
   
   try {
      await mongoose
      .connect(db, {
        useNewUrlParser: true,
    });

    console.log('Te has conectado a la base de Datos')
   } catch (err) {
    console.log(err.message);
    process.exit(1);
   }
}

module.exports = connectdb