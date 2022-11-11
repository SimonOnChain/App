const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(err)
        process.exit(1);
    }
}