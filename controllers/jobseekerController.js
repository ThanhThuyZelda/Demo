const db = require('../models')

//create main Model
const JobSeeker = db.jobseekers
const Detail = db.detailJS

//main work

//1. create Jobseeker
const addJobSeeker = async (req, res) => {
    let info = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        img: req.body.img
    }

    const jobseeker = await JobSeeker.create(info)
    res.status(200).send(jobseeker)
}


//2. get all Jobseeker 
const getAllJobSeekers = async (req, res) => {
    let jobseekers = await JobSeeker.findAll({})
    res.status(200).send(jobseekers)
}

//3. get single Jobseeker 
const getOneJobSeeker = async (req, res) => {

    let id = req.params.id
    let jobseekers = await JobSeeker.findAll({ where: { id: id } })
    res.status(200).send(jobseekers)
}

//4. update Jobseeker 
const updateJobSeeker = async (req, res) => {

    let id = req.params.id

    const jobseeker = await JobSeeker.update(req.body, { where: { id: id } })

    res.status(200).send(jobseeker)


}


//5. delete  Jobseeker  by id
const deleteJobSeeker = async (req, res) => {

    let id = req.params.id

    await JobSeeker.destroy({ where: { id: id } })

    res.status(200).send('Job Seeker is deleted !')
}



module.exports = {
    addJobSeeker,
    getAllJobSeekers,
    getOneJobSeeker,
    updateJobSeeker,
    deleteJobSeeker
}