const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mymongodb:j5iNh0cdqjR4bbQj@sagar-projects.6uhimt1.mongodb.net/mytaskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Successfully Connected to MongoDB`);
}).catch((error) => {
        console.log('Not Connected to MyMongoDB', error);
});





