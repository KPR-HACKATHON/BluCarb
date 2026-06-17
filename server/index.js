const express = require('express')
const cors = require('cors')
require('dotenv').config()

const sitesRouter = require('./routes/sites')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/sites', sitesRouter)

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'BluCarb API is running' })
})

app.listen(PORT, () => {
  console.log(`BluCarb server running on port ${PORT}`)
})