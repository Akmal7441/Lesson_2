const express = require('express')
const router = express.Router()

const lessons = [
    { name: 'English', id: 1 },
    { name: 'Physics',  id: 2 },
    { name: 'Mathematics',  id: 3 },
    { name: 'Chemistry',  id: 4 }
]

// Get all lessons
router.get('/', (req, res) => {
    res.status(200).send(lessons)
})

// Get single lesson with name
router.get('/lesson', (req, res) => {
    // console.log(req.query);
    const lesson = lessons.find(les => les.name === req.query.name)
    res.status(200).send(lesson)
})

module.exports = router