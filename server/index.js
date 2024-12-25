import express from 'express';
import rootRouter from './routers/main.js';

const server = express();
const SERVER_PORT = 8888;

server.use(rootRouter);

rootRouter.get('*', (req, res) => {
    return res.json({
        message: "Page is not found!"
    })
})

console.log("Server is starting...");

server.listen(SERVER_PORT, () => {
    console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});
