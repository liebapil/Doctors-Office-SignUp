const express = require('express');
const cors = require('cors');
const routing = require('./routing');
const db = require('./db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

 app.use('/doctor', routing.doctor)
 app.use('/patient', routing.patient)



app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`));
