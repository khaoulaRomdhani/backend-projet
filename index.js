var cors = require('cors')
var morgan = require('morgan')

require('dotenv').config()
/*const emailRoutes = require('./routes/emailRoute')*/
const authRoutes = require('./routes/authRoute')
/*const userRoutes = require('./routes/userRoute')*/

require('./data/connect')
const express = require('express')

const app = express()
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/static', express.static(__dirname + '/uploads'));
app.listen(process.env.PORT || 3200);
app.use('/api/auth', authRoutes);

/*app.use('/api/user', userRoutes);*/


/*app.use('/api/email', emailRoutes);*/
