import express from 'express';
import Review from '../../data/models/review';

const router = express.Router();

router.post('/reviews', async function (req, res) {
  res.send('Finish me!');
});

// Add the other endpoints here

export default router;
