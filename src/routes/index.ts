import express from 'express'
import data from '../data/application/router'
const router = express.Router()

router.use('/data', data)

export default router
