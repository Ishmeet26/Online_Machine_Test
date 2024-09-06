const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const taskRoutes = require('./routes/tasks')
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.use(taskRoutes);

app.get('/test' , (req, res)=>{
  res.json({test : "testing"})
})

app.listen(PORT, () => {
    console.log(`Server is running on : ${PORT}`);
});
