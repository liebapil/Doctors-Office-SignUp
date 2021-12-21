import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Patientrender from './patientrender'


//// the same with this page looks similar since a lot of it is the same sytax 
export default function Form() {

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [DOB, setDOB]= useState('')
    const [gender, setGender]= useState('')
    const [socialSecurity, setSocialSecurity]= useState('')
    const [submit, setSubmit] = useState(false);
    const [patient, setPatient]= useState([]);
    const [patientDelete, setPatientDelete]= useState('')
  

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleDOB = (e) => {
        setDOB(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleSocialSecurity = (e) => {
        setSocialSecurity(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (submit === true){
            return
        }
        setSubmit(true)
        await axios.post("http://localhost:3001/patient", {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: DOB,
            gender: gender,
            socialSecurity: socialSecurity
        })
    }

    useEffect(()=>{
        const getpateint = async () =>{
            let patient = await axios.get('http://localhost:3001/patient')
            setPatient(patient.data)
        }
        getpateint()
    },[])

    const handleDelete= async(e)=>{
        e.preventDefault() 
        await axios.delete('http://localhost:3001/patient',{
            patientDelete
        }) 
        setPatientDelete()
    }


    

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input 
                name='firstName' 
                onChange={handleFirstName} 
                type='text' 
                placeholder='First Name' 
                value={firstName}
                />

                <label htmlFor="lastName">Last Name: </label>
                <input 
                name='lastName' 
                onChange={handleLastName} 
                type='text' 
                placeholder='Last Name' 
                value={lastName}
                />

                <label htmlFor="DOB">Date Of Birth: </label>
                <input 
                name='DOB' 
                onChange={handleDOB} 
                type='date' 
                placeholder='Date Of Birth' 
                value={DOB}
                />

                <label htmlFor="gender">Gender: </label>
                <input
                name='gender' 
                onChange={handleGender} 
                type='text' 
                placeholder='Gender' 
                value={gender} 
                />

                <label htmlFor="SS">Social Security: </label>
                <input 
                name='SS' 
                onChange={handleSocialSecurity} 
                type='number' 
                placeholder='Social Security' 
                value={socialSecurity}/>

                <button type='submit'>Submit</button>
            </form> 
            <div className='render'>
    
            {patient.map((props, index)=>{                              
                return(
                    <Patientrender
                    key = {index}
                firstName= {props.firstName}
                lastName ={props.lastName}
                dob= {props.dateOfBirth}
                gender= {props.gender}
                ss= {props.socialSecurity}
                id={props._id}
                />
            )})}
            <button className='delete' onClick={handleDelete}>Delete</button>
           

            </div>
            
        </div>
    )
}
