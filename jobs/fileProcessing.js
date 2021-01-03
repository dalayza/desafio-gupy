var cron = require('cron');

var {
    processChangeBudgetStatus
} = require('../services/integrator');

var scheduleBudgetStatusProcessing = function(second, minute, hour, dayOfMonth, month, dayOfWeak) {
    if (!process.env.NODE_APP_INSTANCE || process.env.NODE_APP_INSTANCE === '0') { // Only one cluster instance should execute the job.
        const crontab = `${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeak}`;

        const budgetStatus = cron.job(crontab, processChangeBudgetStatus);
        budgetStatus.start();
    }
    return [];
};

module.exports = scheduleBudgetStatusProcessing;