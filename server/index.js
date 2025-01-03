import express from 'express';
import rootRouter from './routers/router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const server = express();
const SERVER_PORT = 8888;
dotenv.config();

server.use(cors());
server.use(express.json());
server.use(rootRouter);

rootRouter.get('*', (req, res) => {
    return res.status(404);
})

server.listen(SERVER_PORT, () => {
    console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});


if (process.env.MANGODB_URL) {
    try {
        mongoose.connect(process.env.MANGODB_URL);

    } catch (error) {
        console.error("Error FROM mongoDB", error);
    }
} else {
    console.error("ENV is not set!!!");
}

