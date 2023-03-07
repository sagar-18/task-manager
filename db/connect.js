const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mytaskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Successfully Connected to MongoDB`);
}).catch((error) => {
        console.log('Not Connected to MyMongoDB', error);
});





