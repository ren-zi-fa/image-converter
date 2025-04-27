import path from 'path'
import express from 'express'
import { router } from '@/router'

const app = express()

app.use(express.json())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))
app.get('/', (req, res) => {
   res.render('start')
})
app.get('/form', (req, res) => {
   res.render('form')
})
app.use('/api', router)
export default app
