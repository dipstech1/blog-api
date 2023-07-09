const  errorHandler = require('./middleware/errorHandling')
require('dotenv').config()
const app = require('./app');


app.use(errorHandler)


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { console.log("Server  started") })