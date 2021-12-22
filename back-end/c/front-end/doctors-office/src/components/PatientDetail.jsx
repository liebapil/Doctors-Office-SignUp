import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"





export default function PatientDetail() {

    const [patient, setPatient] = useState({})
    const [showForm, toggleShowForm] = useState(false)
    const [firstName, setFirstName] = useState(patient.firstName)
    const [lastName, setLastName] = useState(patient.lastName)
    const [DOB, setDOB] = useState(patient.dateOfBirth)
    const [gender, setGender] = useState(patient.gender)
    const [socialSecurity, setSocialSecurity] = useState(patient.socialSecurity)
    const [update, setUpdate] = useState(false)
    const [patientDelete, setPatientDelete] = useState('')
    const { id } = useParams()


    const getpatient = async () => {
        let patient = await axios.get(`/patient/${id}`)
        setPatient(patient.data)
        setFirstName(patient.data.firstName)
        setLastName(patient.data.lastName)
        setDOB(patient.data.dateOfBirth)
        setGender(patient.data.gender)
        setSocialSecurity(patient.data.socialSecurity)
    }

    useEffect(() => {


        getpatient()
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault()
        setUpdate(true)
        await axios.put(`/patient`, {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: DOB,
            gender: gender,
            socialSecurity: socialSecurity
        })
        getpatient()
        //toggleShowForm(false)
        
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        await axios.delete(`/patient/${id}`

        )
        setPatientDelete()
        getpatient()
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        toggleShowForm(true)
    }

    return (
        <div>
            <p>First Name: {patient.firstName}</p>
            <p>Last Name: {patient.lastName}</p>
            <p>Date of Birth: {patient.dateOfBirth}</p>
            <p> Gender: {patient.gender}</p>
            <p>Social Security: {patient.socialSecurity}</p>
            <p> By Id: {patient._id}</p>
            {showForm ?
                <form onClick={handleUpdate}>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        name='firstName'
                        onChange={(e) => { setFirstName(e.target.value) }}
                        type='text'
                        placeholder='First Name'
                        value={firstName} />

                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        name='lastName'
                        onChange={(e) => { setLastName(e.target.value) }}
                        type='text'
                        placeholder='Last Name'
                        value={lastName} />

                    <label htmlFor="DOB">Date Of Birth: </label>
                    <input name='DOB'
                        onChange={(e) => { setDOB(e.target.value) }}
                        type='date'
                        placeholder='Date Of Birth'
                        value={DOB} />

                    <label htmlFor="gender">Gender: </label>
                    <input name='gender'
                        onChange={(e) => { setGender(e.target.value) }}
                        type='text'
                        placeholder='Gender'
                        value={gender} />

                    <label htmlFor="SS">Social Security: </label>
                    <input name='SS'
                        onChange={(e) => { setSocialSecurity(e.target.value) }}
                        type='number'
                        placeholder='Social Security'
                        value={socialSecurity} />

                    <input className="submit-edit" type="submit" />

                </form>
                :
                <div>
                    <button className="edit-button" onClick={handleSubmit}>edit</button>
                    <button className='delete-button' onClick={handleDelete}>Delete</button>
                </div>
            }

        </div>
    )
}
