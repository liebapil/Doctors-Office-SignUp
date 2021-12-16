const db = require('../db');

const { Doctor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () =>{
    const doctors = [
        {
            name: 'Nancy Schmit, MD',
            specialty: 'Internal medicine',
            description: '',
            yearsOfPractice: 10,
            imgUrl: 'https://ak.picdn.net/shutterstock/videos/4208335/thumb/9.jpg'
        },
        {
            name: 'Aaron Lacky, MD',
            specialty: 'Internal medicine',
            description: '',
            yearsOfPractice: 6,
            imgUrl: 'https://image.shutterstock.com/image-photo/hand-closeup-holding-stethoscope-portrait-260nw-1189195201.jpg'
        },
        {
            name: 'Jennifer Litman, MD',
            specialty: 'Internal medicine',
            description: '',
            yearsOfPractice: 15,
            imgUrl: 'https://i0.wp.com/newslexpoint.com/wp-content/uploads/2020/10/Motivation.jpg?fit=900%2C600&ssl=1'
        },
        {
            name: 'Cindy Acker, MD',
            specialty: 'Family medicine',
            description: '',
            yearsOfPractice: 2,
            imgUrl: 'https://www.seekpng.com/png/detail/322-3221067_health2-female-doctor-images-hd.png'
        },
        {
            name: 'Simon Synder, MD',
            specialty: 'obstetrics and gynecology',
            description: '',
            yearsOfPractice: 7,
            imgUrl: 'https://image.shutterstock.com/image-photo/portrait-handsome-smiling-doctor-260nw-256955077.jpg'
        },
        {
            name: 'Letty Kirk, PAC',
            specialty: 'obstetrics and gynecology',
            description: 'https://dermamedical.ae/wp-content/uploads/2016/05/Arabic-Doctor.jpg',
            yearsOfPractice: 6,
            imgUrl: ''
        },
        {
            name: 'Domnic Robets, NP',
            specialty: 'Internal medicine',
            description: '',
            yearsOfPractice: 4,
            imgUrl: 'https://previews.123rf.com/images/antoniodiaz/antoniodiaz1801/antoniodiaz180100484/93257382-handsome-young-hispanic-doctor-showing-a-blank-medical-chart-and-smiling.jpg'
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