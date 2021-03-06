const express = require('express');
const cors = require('cors');
const routing = require('./routing');
const db = require('./db');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));






app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/doctor', routing.doctor)
app.use('/patient', routing.patient)



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
  }
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`));
