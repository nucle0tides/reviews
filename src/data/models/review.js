import mongoose from '../mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Test',
  },
});

const Review = mongoose.model('Review', schema, 'reviews');

export default Review;
