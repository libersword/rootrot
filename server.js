const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const path = require('path');
const app = express();
const config = require('config');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const db = config.get('mongoURI');
mongoose
.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(()=>
console.log('MongoDB Connected...')
).catch(err => console.log(err));

app.use('/', require('./routes/api/plants'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Serve static assets if in prodution
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
})
