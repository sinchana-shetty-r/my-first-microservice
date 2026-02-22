const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello! My microservice is running successfully! 🎉",
    status: "success",
    student: "Ready for an A!"
  });
});

app.listen(port, () => {
  console.log(`Microservice listening on port ${port}`);
});
