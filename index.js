import express from 'express'
import Connection from './database/db.js';
import Routes from './routes/Router.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'))

app.use('/',Routes)

Connection()

const PORT=8000;

app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`))

