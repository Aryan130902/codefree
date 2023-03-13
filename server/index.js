
import express  from "express";
import dotenv from "dotenv";
import Connection from "./database/connection.js"
import router from "./route/router.js";
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

const PORT = 8000;
app.listen(PORT, () => console.log(`server is listening on PORT ${PORT}`))

const URL = process.env.URL;

Connection(URL);