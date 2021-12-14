const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//config cors
app.use(cors());

//configure express to receive form data
app.use(express.json())

//configure dotEnv
dotenv.config()

//get Hostname , port
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

//configure the router
app.use('/api', require('./router/employeeRouter'))

//connect to Mongodb database
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((response) => {
    console.log(`connected to MongoDB successfully ...........`)
}).catch((error) => {
    console.error(error)
    process.exit(1)
})

app.get('/', (request, response) => {
    response.send(`<h2>Welcome to express js</h2>`)
})

app.listen(port, hostname, () => {
    console.log(`express connected to http://${hostname}:${port}`)
})