const db = require('../db');

const { Doctor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () =>{
    const doctors = [
        {
            name: 'Nancy Schmit, MD',
            specialty: 'Internal medicine',
            description: 'I got my undergrad at Long Island University in Microbiology.  I went to John Hopkins Medical school and did my residency at Maryland General Hospital. I have worked in Internal Medicine for ten years and brought my passion to this practice.',
            yearsOfPractice: 10,
            imgUrl: 'https://ak.picdn.net/shutterstock/videos/4208335/thumb/9.jpg'
        },
        {
            name: 'Aaron Lacky, MD',
            specialty: 'Internal medicine',
            description: 'I got my undergrad at the University of San Francisco in Molecular Biology.  I went to New York University Medical school and did my residency at NYU Langone Hospital. I have worked in Internal Medicine for 6 years and brought my passion to this practice. ',
            yearsOfPractice: 6,
            imgUrl: 'https://image.shutterstock.com/image-photo/hand-closeup-holding-stethoscope-portrait-260nw-1189195201.jpg'
        },
        {
            name: 'Jennifer Litman, MD',
            specialty: 'Internal medicine',
            description: 'I got my undergrad at New York City College of Technology in Bioinformatics.  I went to Harvard\'s Medical school and did my residency at Cleveland General Hospital. I have worked in Internal Medicine for 15 years and brought my passion to this practice. ',
            yearsOfPractice: 15,
            imgUrl: 'https://i0.wp.com/newslexpoint.com/wp-content/uploads/2020/10/Motivation.jpg?fit=900%2C600&ssl=1'
        },
        {
            name: 'Cindy Acker, MD',
            specialty: 'Family medicine',
            description: 'I got my undergrad at the University of Berkeley in Biology.  I went to Perlman School of Medicine\'s Medical school and did my residency at UCSF Hospital. I have worked in Family medicine for 2 years and brought my passion to this practice. ',
            yearsOfPractice: 2,
            imgUrl: 'https://www.seekpng.com/png/detail/322-3221067_health2-female-doctor-images-hd.png'
        },
        {
            name: 'Simon Synder, MD',
            specialty: 'obstetrics and gynecology',
            description: 'I got my undergrad at Cornell University in Biology.  I went to Boston University School of Medicine\'s Medical school and did my residency at New Hampshire General Hospital. I have worked in obstetrics and gynecology for 7 years and brought my passion to this practice.',
            yearsOfPractice: 7,
            imgUrl: 'https://image.shutterstock.com/image-photo/portrait-handsome-smiling-doctor-260nw-256955077.jpg'
        },
        {
            name: 'Letty Kirk, PAC',
            specialty: 'obstetrics and gynecology',
            description: 'I got my undergrad at the California Institute of Technology in Biotechnology.  I went to Samford University Physician Assistant school and did my internship at Pasadena General Hospital. I have worked in Internal Medicine for 6 years and brought my passion to this practice.',            
            yearsOfPractice: 6,
            imgUrl: 'https://dermamedical.ae/wp-content/uploads/2016/05/Arabic-Doctor.jpg'
        },
        {
            name: 'Domnic Robets, NP',
            specialty: 'Internal medicine',
            description: 'I got my undergrad at the University of Chicago in Biology. I went to NYU Nurse Practitioner school and did my internship at NYU Langone Hospital. I have worked in Internal Medicine for 4 years and brought my passion to this practice.',
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