import React from 'react'

export default function Doctors(props) {
    return (
        <div className='doctor'>
        <img src={props.imgUrl} alt={props.name}/>
        <div className='description'>
            <h2>Doctor: {props.name}</h2>
            <h3>Specialty: {props.specialty}</h3>
            <p className='explantion'>About the Doctor: {props.description}</p>
            <p className='years'>Years of Practice:{props.yearsOfPractice}</p>
        </div>
            
        </div>
    )
}
