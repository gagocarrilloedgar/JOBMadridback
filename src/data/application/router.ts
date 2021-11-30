import express from 'express'
// import multer from 'multer'
import { mse } from './controller'

const router = express.Router()

// const upload = multer()

/**
 * @api {post} /data/mse
 * @apiDescription  Computes de MSE using the target and predicted data
 * @apiName mse
 * @apiGroup Data
 * @apiPermission public
 */
router.post('/mse', mse)

export default router
