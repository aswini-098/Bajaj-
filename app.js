// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const operationCode = 'GET_OPERATION_CODE';

app.route('/api/endpoint')
  .get((req, res) => {
    res.json({ operationCode });
  })
  .post((req, res) => {
    const { userId, collegeEmailId, collegeRollNumber } = req.body;
    const numbers = [1, 2, 3, 4, 5];
    const alphabets = ['a', 'b', 'c', 'd', 'e'];

    res.json({
      status: 'success',
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets,
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
