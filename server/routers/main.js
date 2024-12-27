import express from 'express';
import { createTutorialRequest, deleteRequestData, updateRequestData } from '../services/tutorialRequest.service.js';
import { getAllRequestData } from '../services/tutorialRequest.service.js';
import { deleteModel } from 'mongoose';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "I'm create a server with express, and Enjoy web development!"
    })
});

router.post("/create", async (req, res) => {
    const dataFormClient = { ...req.body, creater_at: Date.now() }

    try {
        const creationResult = await createTutorialRequest(dataFormClient);
        console.log("creationResult from client", creationResult);
        return res.json(dataFormClient);
    } catch (error) {
        if (error.name === "ValidationError") {
            console.log(error.errors);
            const message = Object.values(error.errors).map((value) => value.message);
            return res.status(400).json({
                error: message,
            });
        }
        res.status(400).json(error.message);
    }
})

router.get('/requests', async (req, res) => {
    const requestsData = await getAllRequestData()
    return res.json(requestsData);
});


router.put('/requests/:id', async (req, res) => {
    const docId = req.params.id;

    // do the validation foe the req.body
    if (docId) {
        const updateResult = await updateRequestData(docId, req.body);
        return res.json(updateResult);
    }
    return res.status(403);
})


router.delete('/requests/:id', async (req, res) => {
    const docId = req.params.id;
    if (docId) {
        const deleteresult = await deleteRequestData(docId);
        return res.json(deleteresult);
    }
    return res.status(403);
})

export default router;
