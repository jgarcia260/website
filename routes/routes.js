var homepageRoutes = require('./homepage.js');

module.exports = app => {
    app.use('/', homepageRoutes)
}