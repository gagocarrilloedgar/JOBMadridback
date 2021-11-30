/**
 * Computes de MSE of two given arrays of num
 * @param {Predicted} Predicted predicted data array
 * @param {Target} target
 * @returns {Number}
 */

import { Predicted, Target, MSE } from '../domain/entities'

const meanSquareError = (predicted: Predicted, target: Target): MSE => {
  const n = predicted.length
  let mse: MSE = 0

  for (let i = 0; i < n; i++) {
    const msePlus = Math.pow(predicted[i] - target[i], 2)
    mse = mse + msePlus
  }

  return mse / n
}

export default meanSquareError
