const express = require('express');
const app = express();
require('./db/connect');
const Task = require('./models/tasks');
const myRoutes = require('./routes/tasks');
const myHomeRoute = require('./routes/home');
const myPort = process.env.PORT || 9980;

app.use(express.json());
app.use(myRoutes);
app.use(myHomeRoute);


app.listen(myPort,'127.0.0.1', () => {
 console.log(`My Task Manager is running on ${myPort}s`);
});

// app.patch('/tasks/:id', async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const updateData = req.body;
//       const updateTaskById = await Task.findByIdAndUpdate(_id, updateData, {
//         new: true,
//       });
//       if (!updateTaskById) {
//         return res.status(404).json({
//           "Status": "Task Not Found",
//         });
//       }
//       res.status(200).json({
//         "Status": "Updated",
//         "Data": updateTaskById
//       });
//     } catch (error) {
//       res.status(500).json({
//         "Status": "Code Red",
//         "Error": error.message
//       });
//     }
//   });
  