import React from 'react'

export default function Doctors(props) {
    return (
        <div className='doctor'>
        <img src={imgUrl} alt={props.name}/>
        <div className='description'>
            <h4>Doctor: {props.name}</h4>
            <h5>Specialty: {props.specialty}</h5>
            <p className='explantion'>About the Doctor: {props.description}</p>
            <p className='years'>Years of Practice: {yearsOfPractice}</p>
        </div>
            
        </div>
    )
}
