import tutRequestModel from "../models/TutorialRequest.js";

export const createTutorialRequest = async (data) => {
    try {
        const result = await tutRequestModel.create(data);
        console.log("Result is Createed Uploaded", result);
    } catch (error) {
        throw error;
    }
}

export const getAllRequestData = async () => {
    try {
        const requestData = await tutRequestModel.find({})

        return requestData;
    } catch (error) {
        throw error;
    }
}

export const updateRequestData = async (id, data) => {
    try {
        return await tutRequestModel.findOneAndUpdate({ _id: id }, data, { new: true });
    } catch (error) {
        throw error;
    }
}

export const deleteRequestData = async (id) => {
    try {
        return await tutRequestModel.deleteOne({ _id: id });
    } catch (error) {
        throw error;
    }
}


