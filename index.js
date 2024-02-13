import  express  from "express"
import 'dotenv/config';
const app = express()
import morgan from "morgan"; 
const port = process.env.PORT;  

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login </h1>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})