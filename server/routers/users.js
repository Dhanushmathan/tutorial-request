import express from 'express';

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    const users = ["Kakashi", "Itachi", "Obito"]

    return res.json({
        users: users
    })
})


export default userRouter;
