import express, { Application } from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import router from './routes'

const port: number = 5000

const app: Application = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

async function Run() {
    try {
        await mongoose.connect(`mongodb+srv://Christianism:Giw9VUvemSSgTyrc@cluster0.vhkuyua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('Database connect with mongoose');

        app.get('/', async (req, res) => {
            res.send({
                message: "Christianism server is running"
            })
        })

        app.use('/', router)


    }
    catch (error) {
        console.log(error);

    }
}

Run()

app.listen(port, () => {
    console.log(`Server is running at ${5000}`);

})

