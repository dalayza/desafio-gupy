var {
    findAllBudgets
} = require('../controllers/mongoDBBudgets');

var processChangeBudgetStatus = async() => {
    try {
        var allBudgets = await findAllBudgets();

        const timeBudgetByDay = paramthers.map(it => { return it.validTimeBudget; });

        allBudgets.map(it => {
            var date = moment().format('DD-MM-YYYY');
            var dateBudgetEnd = moment(it.fecha).add(timeBudgetByDay[0], 'days').format('DD-MM-YYYY');

            if (it.status === 'activo' && dateBudgetEnd > date) { updateBudgetById(it._id, 'cerrado'); };
            if (it.status === 'procesado' || it.status === 'ingresado' && dateBudgetEnd > date) { updateBudgetById(it._id, 'cerrado'); };
        });
    } catch (err) {
        throw new err
    } finally {
        console.log('Error!');
    }
};

module.exports = {
    processChangeBudgetStatus
};