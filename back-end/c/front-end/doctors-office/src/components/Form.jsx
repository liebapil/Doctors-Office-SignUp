import React, { useState } from 'react'
import axios from 'axios'


//// the same with this page looks similar since a lot of it is the same sytax 
export default function Form() {

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [DOB, setDOB]= useState('')
    const [gender, setGender]= useState('')
    const [socialSecurity, setSocialSecurity]= useState('')
    const [submit, setSubmit] = useState(false);

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



    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input name='firstName' onChange={handleFirstName} type='text' placeholder='First Name' value={firstName}/>

                <label htmlFor="lastName">Last Name: </label>
                <input name='lastName' onChange={handleLastName} type='text' placeholder='Last Name' value={lastName}/>

                <label htmlFor="DOB">Date Of Birth: </label>
                <input name='DOB' onChange={handleDOB} type='date' placeholder='Date Of Birth' value={DOB}/>

                <label htmlFor="gender">Gender: </label>
                <input name='gender' onChange={handleGender} type='text' placeholder='Gender' value={gender} />
                
                <label htmlFor="SS">Social Security: </label>
                <input name='SS' onChange={handleSocialSecurity} type='number' placeholder='Social Security'/>

                <button type='submit'>Submit</button>
            </form>   
        </div>
    )
}
