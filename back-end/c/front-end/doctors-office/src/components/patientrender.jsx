import React from 'react'
import {Link} from 'react-router-dom'

export default function Patientrender(props) {
    return (
        <div>
            <Link to={`/patient/${props.id}`}>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            </Link>


            {/* <p>Date of Birth: {props.dob}</p>
            <p> Gender: {props.gender}</p>
            <p>Social Security: {props.ss}</p>
            <p> By Id: {props.id}</p> */}
            

            
        </div>
    )
}
