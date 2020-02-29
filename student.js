let express = require('express')
let app = express()
let bodyParser = require('body-parser');
let cors = require('cors')
let router = express.Router()

app.use(cors());

app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({
    extended: false
}), router);

let students = [{
        generation: 59,
        idStudent: '5935512034',
        name: 'Noppadol',
        surname: 'Sangkhla',
        faculty: 'coe',
        advisor: 'Warodom'
    },
    {
        generation: 59,
        idStudent: '5935512027',
        name: 'Narinthip',
        surname: 'Ingjan',
        faculty: 'coe',
        advisor: 'Titinun'

    },
    {
        generation: 59,
        idStudent: '5935512004',
        name: 'Nattapon',
        surname: 'Keakeaw',
        faculty: 'coe',
        advisor: 'Warodom'

    },

    {
        generation: 59,
        idStudent: '5935512040',
        name: 'Julrapon',
        surname: 'Raksa',
        faculty: 'coe',
        advisor: 'Warodom'

    },
    {
        generation: 60,
        idStudent: '6035512034',
        name: 'Jantapa',
        surname: 'Binheem',
        faculty: 'coe',
        advisor: 'Warodom'
    },
    {

        generation: 60,
        idStudent: '6035512080',
        name: 'Teerapat',
        surname: 'Pattanakul',
        faculty: 'coe',
        advisor: 'Titinun'

    },
    {
        generation: 60,
        idStudent: '6035512050',
        name: 'Rusnee',
        surname: 'Awea',
        faculty: 'coe',
        advisor: 'Warodom'

    },

    {
        generation: 60,
        idStudent: '6035512040',
        name: 'Tanapom',
        surname: 'Kamdee',
        faculty: 'coe',
        advisor: 'Warodom'

    },

];

router.route('/students')

.get((req, res) => res.json(students))

.post((req, res) => {

    let student = {}
    student.generation = students[students.length - 1].generation + 1
    student.idStudent = req.body.idStudent;
    student.name = req.body.name;
    student.surname = req.body.surname;
    student.faculty = req.body.faculty;
    student.advisor = req.body.advisor;
    students.push(student)
    res.json({ message: 'Student created!' })
})

router.route('/students/:student_generation')

.get((req, res) => {
    let generation = req.params.student_generation
    let index = students.findIndex(student => (student.generation === +generation))
    res.json(students[index])
})

.put((req, res) => {
    // Update a bear
    let generation = req.params.student_generation
    let index = students.findIndex(student => (student.generation === +generation))
    students[index].idStudent = req.body.idStudent;
    students[index].name = req.body.name;
    students[index].surname = req.body.surname;
    students[index].faculty = req.body.faculty;
    students[index].advisor = req.body.advisor;
    res.json({ message: 'Student Updated!' + req.params.student_generation });
})

.delete((req, res) => {

    let generation = req.params.student_generation
    let index = students.findIndex(student => student.generation === +generation)
    students.splice(index, 1)
    res.json({ message: 'Student Deleted : ' + req.params.student_generation });
})

app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.listen(8000, () => { console.log('server is running') })