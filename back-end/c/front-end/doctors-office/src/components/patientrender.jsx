import React from 'react'

export default function Patientrender(props) {
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Date of Birth: {props.dob}</p>
            <p> Gender: {props.gender}</p>
            <p>Social Security: {props.ss}</p>
            <p> By Id: {props.id}</p>
            
        </div>
    )
}
