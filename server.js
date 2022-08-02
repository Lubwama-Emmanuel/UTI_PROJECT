const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = require('./app')

dotenv.config({ path: './config.env' })

const port = process.env.PORT || 3000
const DB = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
)

mongoose
  .connect(DB)
  .then((con) => console.log('DATABASE CONNECTED SUCCESSFULLY..'))
  .catch((err) => console.log('Ooooooops DATABASE NOT CONNECTED', err))

app.listen(port, () => {
  console.log(`APP LISTENING TO PORT: ${port}`)
})