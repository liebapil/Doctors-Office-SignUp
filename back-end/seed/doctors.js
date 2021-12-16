const db = require('../db');

const { Doctor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () =>{
    const doctors = [
        {
            name: 'dr',
            specialty: 'OBGYN',
            description: 'awesome doc',
            yearsOfWorking: 10,
            imgUrl: 'img'
        }
    ]

    await Doctor.insertMany(doctors);
    console.log('Doctors inserted')
};

const run = async () =>{
    await main();
    db.close();
};
run()