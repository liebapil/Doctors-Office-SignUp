import React, { useState, useEffect } from 'react'
import Doctors from '../components/Doctors'
import axios from 'axios'

//// most of this looks similar to my group project since it's pretty much the same layout
export default function Doctor() {

    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        const getDoctors = async () =>{
            let doctor = await axios.get('http://localhost:3001/doctor')
            setDoctors(doctor.data)
        }
        getDoctors()
    },[])

    return (
        <div className='container'>
            {doctors.map((props,index)=>{
                return(
                <Doctors
                key={index}
                name={props.name}
                specialty={props.specialty}
                description={props.description}
                yearsOfPractice={props.yearsOfPractice}
                imgUrl={props.imgUrl}
                />)
            })}       
        </div>
    )
}
