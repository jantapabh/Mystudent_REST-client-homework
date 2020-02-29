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


const getStudent = async () => {

    const result = await axios.get(`http://localhost:8000/api/students`)
    console.log(result.data)
    setStudent(result.data);

}  //ส่วนในการ get ค่าของ student


const updateStudents = async () => {

    const result = await axios.get(`http://localhost:8000/api/students`)
    console.log(result.data)
    setStudent(result.data);

}  //ส่วนในการ put ค่าของ student

const deleteStudents = async () => {

    const result = await axios.get(`http://localhost:8000/api/students`)
    console.log(result.data)
    setStudent(result.data);


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

     

           <ul>
                {printStudent()}

            </ul>

        </div>
    );
}

