var controller = require('./controllers');

var unauthenticatedRoutes = [
    { method: 'GET', path: '/', config: controller.index },
    { method: 'GET', path: '/signup', config: controller.signup }
];

module.exports = unauthenticatedRoutes;
