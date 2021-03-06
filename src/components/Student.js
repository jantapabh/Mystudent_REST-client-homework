import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Student.css';

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

    const getStudents = async() => {

            const result = await axios.get(`http://localhost:8000/api/students`)
            console.log(result.data)
            setStudent(result.data);

        } //ฟังก์ชั่นในการดึงค่าชงอ student มาจาก URL


    const addStudent = async() => {

        const result = await axios.post(`http://localhost:8000/api/students`, {

                students,
                generation,
                idStudent,
                name,
                surname,
                faculty,
                advisor

            }) //ส่วนในการ add ค่าของ student

        console.log(result.data)
        alert("Add Student Finish")
        getStudents()
    }

    const getStudent = async(generations) => {

            const result = await axios.get(`http://localhost:8000/api/students/${generation}`)

            console.log(result.data)
            setGenerat(result.data.generation)
            setIdStudent(result.data.idStudent)
            setName(result.data.name)
            setSurname(result.data.surname)
            setFaculty(result.data.faculty)
            setAdvisor(result.data.advisor)
            alert("Get Student Finish")


        } //ส่วนในการ get ค่าของ student

    const updateStudents = async(generations) => {

        const result = await axios.put(`http://localhost:8000/api/students/${generation}`, {

                students,
                generation,
                idStudent,
                name,
                surname,
                faculty,
                advisor

            }) //ส่วนในการ put ค่าของ student

        console.log(result.data)
        setGenerat(result.data.generation)
        setIdStudent(result.data.idStudent)
        setName(result.data.name)
        setSurname(result.data.surname)
        setFaculty(result.data.faculty)
        setAdvisor(result.data.advisor)
        alert("Update Student Finish")
        getStudents()

    }

    const deleteStudents = async(generations) => {

            const result = await axios.delete(`http://localhost:8000/api/students/${generation}`)
            alert("Delete Student Finish")
            getStudents()

        } // ส่วนของการลบค่า student

    const printStudent = () => {

        if (students && students.length)

            return students.map((student, index) => {

            return (

                <
                div className = "List" >
                <
                li key = { index }
                className = "Top-up" >

                Gen: { student.generation } < br / >
                ID: { student.idStudent } < br / >
                Name: { student.name } < br / >
                Surname: { student.surname } < br / >
                Faculty: { student.faculty } < br / >
                Advisor: { student.advisor } < br / >
                <
                br / >
                <
                br / >
                <
                /li> <
                div className = "Button" >
                <
                button className = "B1"
                onClick = {
                    () => getStudents(student.generations)
                } > Get Click < /button>  <br / >
                <
                button className = "B2"
                onClick = {
                    () => updateStudents(student.generations)
                } > Update Click < /button>  <br / >
                <
                button className = "B3"
                onClick = {
                    () => deleteStudents(student.generations)
                } > Delet Click < /button>  <br / >
                <
                /div>  < /
                div >
            )
        })
        else {

            return ( < h2 > Not Student!!!!!!! < /h2>)

            }

        }


        return (

            <
            div className = "Body-test" >
            <
            div className = "Topic" >
            <
            h2 > STUDENTS LIST < /h2> </div >
            <
            ul > { printStudent() } < /ul>

            <
            h2 className = "Topic" > GET STUDENT < /h2> <
            div className = "Get-student" >
            Gen => { generation } < br / >
            ID => { idStudent } < br / >
            Name => { name } < br / >
            Surname => { surname } < br / >
            Faculty => { faculty } < br / >
            Advisor => { advisor } < br / >

            <
            /div>

            <
            h2 className = "Topic" > ADD STUDENT < /h2>  <
            div className = "Add-student" >

            GEN < input className = "Input-text"
            placeholder = "Genaration"
            type = "number"
            name = "genaration"
            onChange = {
                (e) => setGenerat(e.target.value)
            }
            />

            ID

            <
            input className = "Input-text"
            placeholder = "ID_STUDENT"
            type = "number"
            name = "idStudent"
            onChange = {
                (e) => setIdStudent(e.target.value)
            }
            />

            Name

            <
            input className = "Input-text"
            placeholder = "name"
            type = "text"
            name = "name"
            onChange = {
                (e) => setName(e.target.value)
            }
            />

            Surname

            <
            input className = "Input-text"
            placeholder = "Surname"
            type = "text"
            name = "surname"
            onChange = {
                (e) => setSurname(e.target.value)
            }
            />

            Faculty

            <
            input className = "Input-text"
            placeholder = "Faculty"
            type = "text"
            name = "faculty"
            onChange = {
                (e) => setFaculty(e.target.value)
            }
            />

            Advisor

            <
            input className = "Input-text"
            placeholder = "Advisor"
            type = "text"
            name = "advisor"
            onChange = {
                (e) => setAdvisor(e.target.value)
            }
            />

            <
            /div>   <
            div className = "Button-add" >
            <
            button className = "B4"
            onClick = { addStudent } > ADD < /button>  < /
            div > <
            /div>
        );
    }