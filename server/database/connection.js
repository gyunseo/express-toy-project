const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // mongodb connection string

    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      /*
      mongoose 6버전 이상에선 더이상 
      useNewUrlParser, useUnifiedTopology, useFindAndModify, useCreateIndex
      지원하지 않기 때문에 지워주면 된다.
      */
    });

    console.log(`MongoDB connected:${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
