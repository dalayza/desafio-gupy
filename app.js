// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');

// Config
var MONGO_URL = require('./config/config').MONGO_URL;
var URL = require('./config/config').URL;
var SECOND = require('./config/config').SECOND;
var MINUTE = require('./config/config').MINUTE;
var HOURS = require('./config/config').HOURS;
var DAYOFMONTH = require('./config/config').DAYOFMONTH;
var MONTH = require('./config/config').MONTH;
var DAYOFWEEK = require('./config/config').DAYOFWEEK;

// Init variables
var app = express();

// Middleware CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); //Cross Origin

// logger
var logger = require('./helpers/logger');

// Schedule process
// var scheduleBudgetStatusProcessing = require('./jobs/fileProcessing');

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes
var appRoutes = require('./routes/app');
var userMovie = require('./routes/movies');

// Conection DBA
mongoose.connection.openUri(MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err, res) => {
    if (err) throw err;
    console.log('DBA MongDB: \x1b[32m%s\x1b[0m', 'online');
});

mongoose.set('useFindAndModify', false);

// Use service routes
app.use(express.static(__dirname + '/'));

// Routes
app.use('/', appRoutes);
app.use('/movies', userMovie);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen DBA
app.listen(URL, () => {
    // logger.info({ conextion: `BackEnd Listen port ${URL}` }, 'online');
    console.log(`Express server port ${URL}: \x1b[32m%s\x1b[0m`, 'online');
});

//CRON JOB TO UPDATE

// logger.info('========== CRON JOB ==========');
// logger.info(`========== second: ${SECOND} =========`);
// logger.info(`========== minute: ${MINUTE} =========`);
// logger.info(`========== hours: ${HOURS} =========`);
// logger.info(`========== dayOfMonth: ${DAYOFMONTH} =====`);
// logger.info(`========== month: ${MONTH} ==========`);
// logger.info(`========== DAYOFWEEK: ${DAYOFWEEK} ======`);
// logger.info('==============================');

// scheduleBudgetStatusProcessing(SECOND, MINUTE, HOURS, dayOfMonth, month, DAYOFWEEK);
