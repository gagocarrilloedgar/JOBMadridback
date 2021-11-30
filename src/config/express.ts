import express, { Application, Response } from 'express'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import methodOverride from 'method-override'
import routes from '../routes'

const app: Application = express()

// Documentation api
app.use(express.static('public'))

// gzip compression
app.use(compress())

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride())

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// mount api routes
app.use('/', routes)

/**
 * @api {home}
 */
app.get('/', (_, res: Response) => {
  res.send('JOBMadrid micro-service is up and running')
})

export default app
