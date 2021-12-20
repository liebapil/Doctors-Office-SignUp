import React from 'react'

export default function Doctors(props) {
    return (
        <div className='doctor'>
        <img src={props.imgUrl} alt={props.name}/>
        <div className='description'>
            <h2>Doctor: {props.name}</h2>
            <h3>Specialty: {props.specialty}</h3>
            <h3> About the Doctor:
            <p className='explantion'>{props.description}</p>
            </h3>
            <p className='years'>Years of Practice: {props.yearsOfPractice}</p>
        </div>
            
        </div>
    )
}
