'use strict';

const Building = require('./building')
const Floor = require('./floor')


module.exports = (app) => {  
    app.use(Building)
    app.use(Floor)

    
};