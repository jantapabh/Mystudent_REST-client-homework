import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default () => {

    // const axios = require('axios')
    const [students, setStudent] = useState({})
    const [generation, setGenerat] = useState(0)
    const [idStudent, setIdStudent] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [faculty, setFaculty] = useState('')
    const [advisor, setAdvisor] = useState('')

    useEffect(() => {

        getStudents()

    }, []);

    const getStudents = async () => {

        const result = await axios.get(`http://localhost:8000/api/students`)
        console.log(result.data)
        setStudent(result.data);

    }  //ฟังก์ชั่นในการดึงค่าชงอ student มาจาก URL


    const addStudent = async () => {

        const result = await axios.post(`http://localhost:8000/api/students`, {

            students,
            generation,
            idStudent,
            name,
            surname,
            faculty,
            advisor

        })  //ส่วนในการ add ค่าของ student

        console.log(result.data)
        getStudents()

    }

    const getStudent = async (generation) => {

        const result = await axios.get(`http://localhost:8000/api/students/${generation}`)

        console.log(result.data)
        setGenerat(result.data.generation)
        setIdStudent(result.data.idStudent)
        setName(result.data.name)
        setSurname(result.data.surname)
        setFaculty(result.data.faculty)
        setAdvisor(result.data.advisor)


    }  //ส่วนในการ get ค่าของ student

    const updateStudents = async (generation) => {

        const result = await axios.put(`http://localhost:8000/api/students/${generation}`, {

            students,
            generation,
            idStudent,
            name,
            surname,
            faculty,
            advisor

        })  //ส่วนในการ put ค่าของ student

        console.log(result.data)
        setGenerat(result.data.generation)
        setIdStudent(result.data.idStudent)
        setName(result.data.name)
        setSurname(result.data.surname)
        setFaculty(result.data.faculty)
        setAdvisor(result.data.advisor)


    }

    const deleteStudents = async (generation) => {

        const result = await axios.delete(`http://localhost:8000/api/students/${generation}`)

        getStudent()

    } // ส่วนของการลบค่า student

    const printStudent = () => {

        if (students && students.length)

            return students.map((student, index) => {

                return (

                    <li key={index}>

                        Gen : {student.generation} <br />
                        ID : {student.idStudent}  <br />
                        Name : {student.name}  <br />
                        Surname : {student.surname}  <br />
                        Faculty : {student.faculty}  <br />
                        Advisor : {student.advisor} <br />


                        <button onClick={() => getStudents(student.generation)}>Get Click</button>  <br />
                        <button onClick={() => updateStudents(student.generation)}>Update Click</button>  <br />
                        <button onClick={() => deleteStudents(student.generation)}>Delet Click</button>  <br />


                    </li>
                )
            })
        else {

            return (<h2>Not Student !!!!!!! </h2>)

        }

    }


    return (

        <div>
            <h1>STUDENTS</h1>
            <ul>
                {printStudent()}
            </ul>
            <h2>GET STUDENT</h2>
            GET :
            Gen : {student.generation} <br />
            ID : {student.idStudent}  <br />
            Name : {student.name}  <br />
            Surname : {student.surname}  <br />
            Faculty : {student.faculty}  <br />
            Advisor : {student.advisor} <br />

            <h2>ADD STUDENT</h2>

            GEN :

            <input
                placeholder="Genaration"
                type="number"
                name="genaration"
                onChange={(e) => setGenerat(e.target.value)}
            /> <br />

            ID :

            <input
                placeholder="ID_STUDENT"
                type="number"
                name="idStudent"
                onChange={(e) => setIdStudent(e.target.value)}
            /> <br />

            Name :

              <input
                placeholder="name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
            /> <br />

            Surname :

                <input
                placeholder="Surname"
                type="text"
                name="surname"
                onChange={(e) => setSurname(e.target.value)}
            /> <br />

            Faculty :

                <input
                placeholder="Faculty"
                type="text"
                name="faculty"
                onChange={(e) => setFaculty(e.target.value)}
            /> <br />

            Advisor :

                <input
                placeholder="Advisor"
                type="text"
                name="advisor"
                onChange={(e) => setAdvisor(e.target.value)}
            /> <br />

            <button onClick={addStudent}> ADD</button>


        </div>
    );
}

