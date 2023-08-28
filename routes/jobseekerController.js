const jobseekerController = require('../controllers/jobseekerController.js');

const router = require('express').Router()

router.post('/addJobSeeker', jobseekerController.addJobSeeker)

router.get('/allJobSeekers', jobseekerController.getAllJobSeekers)



router.get('/:id', jobseekerController.getOneJobSeeker)

router.put('/:id', jobseekerController.updateJobSeeker)

router.delete('/:id', jobseekerController.deleteJobSeeker)


module.exports = router