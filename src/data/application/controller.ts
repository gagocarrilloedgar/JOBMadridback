import { catchAsync } from '../../shared/catchAsync'
import { Request, Response } from 'express'
import computeMSE from '../services/mse'
import { Target, Predicted } from '../domain/entities'
import targetFile from '../../../assets/test_target.json'

const mse = catchAsync(async (req: Request, res: Response) => {
  const targetJSON: Target = targetFile
  const predictedJSON: Predicted = req.body
  if (targetFile.length !== predictedJSON.length)
    // eslint-disable-next-line curly
    res.status(300).json({ error: 'The target and the predicted data must have the same length' })
  const MSE = await Promise.all([computeMSE(predictedJSON, targetJSON)])
  const toSend = { predictedJSON, targetJSON, MSE }
  res.status(200).json(toSend)
})

export { mse }
