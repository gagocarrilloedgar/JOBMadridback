import app from './config/express'

const PORT = process.env.PORT || 3000

// listen to requests
const server = app.listen(PORT, () => {
  return console.log(`server is running on port: ${PORT}`)
})

export default server
