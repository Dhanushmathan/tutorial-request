import express from 'express';
import userRouter from '../routers/users.js';

const router = express.Router();

router.get('/about', (req, res) => {
    return res.json({
        message: "About page here!"
    })
})

router.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "I'm create a server with express"
    })
})

router.get('/about/:user', (req, res) => {
    const { user } = req.params;
    return res.json({
        message: `Hii Chella ${user}, This is about page here!`
    })
})

router.use("/users", userRouter);

export default router;
