import express from 'express';
import request from 'request';

const app = express();
const port = 3000;

app.use('/proxy', (req, res) => {
  const imageUrl = `http://146.190.42.50/jmc/Photo/${req.query.regno}.jpg`;
  req.pipe(request(imageUrl)).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
