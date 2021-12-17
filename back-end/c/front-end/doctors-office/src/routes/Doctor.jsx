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
            
        </div>
    )
}
