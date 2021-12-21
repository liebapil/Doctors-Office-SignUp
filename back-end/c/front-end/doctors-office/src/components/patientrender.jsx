import React from 'react'
import {Link} from 'react-router-dom'

export default function Patientrender(props) {
    return (
        <div>
            <Link className='patient-link' to={`/patient/${props.id}`}>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Date of Birth: {props.dob}</p>
            </Link>         
        </div>
    )
}
