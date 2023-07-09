const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.info("DB connected successfully");
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

dbConnect()