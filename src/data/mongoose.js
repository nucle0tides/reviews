import mongoose from 'mongoose';

const options = {
  keepAlive: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/exercise', options, (err) => {
  if (err) {
    console.error('Error connecting to mongo');
    console.error(err);
    process.exit();
  }

  console.log('Connected to mongo');
});

export default mongoose;
