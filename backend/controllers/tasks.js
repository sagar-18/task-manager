const Task = require('../models/tasks');

exports.creatTask = async (req, res) => {
    try {
        const bodyTask = new Task(req.body);
        const newTask = await bodyTask.save(bodyTask);
        res.status(201).json({ "status": "Task Created", "data": newTask });
    } catch (error) {
        res.status(404).send(error);
    }

};

exports.getTask = async (req, res) => {

    try {
        const getAllTasks = await Task.find({});
        res.json({ "status": "True", "data": getAllTasks });

    } catch (error) {
        res.status(404).json({ "Status": "Code Red", "error": error });
    }

};

exports.getTaskByIdd = async (req, res) => {

    try {
        const _id = req.params.id;
        const getTaskById = await Task.findById(_id);

        if (!getTaskById) {
            return res.json({ "status": "Not Found" });
        }
        return res.status(200).json({ "Status": "Found", "Data": getTaskById });

    } catch (error) {
        return res.status(404).json({ "Status": "Code Red", "error": error });
    }

};

exports.patchTask = async (req, res) => {

    try {
        const _id = req.params.id;
        const updateData = req.body;
        const updateTaskById = await Task.findByIdAndUpdate(_id, updateData, {
            new: true
        });
        res.status(202).json({ "Status": "Updated", "Data": updateTaskById });

    } catch (error) {
        res.status(404).json({ "Status": "Code Red", "error": error });
    }

};

exports.deleteTask = async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteTaskById = await Task.findByIdAndDelete(_id);
        res.status(200).json({ "Status": "Deleted", "Data": deleteTaskById });
    } catch (error) {

    }
};
