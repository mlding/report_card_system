const HomeControllerModule = require('./homeController');
const StudentsControllerModule = require('./studentsController');

class Dispatcher {
    constructor(routes) {
        this.controllers = {
            homeController: new HomeControllerModule.HomeController(this),
            studentsController: new StudentsControllerModule.StudentsController(this)
        };
        this.routes = routes;
    }

    dispatch(request) {
        const [controllerName, actionName] = this.routes[request.route].split('#');
        this.controllers[controllerName][actionName](request.parms);
    }
}

module.exports.Dispatcher = Dispatcher;
