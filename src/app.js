const DispatcherModule = require('./dispatcher');

class App {
    constructor() {
        this.routes = {
            '/': 'homeController#showMainMenu',
            '1': 'studentsController#addStudent',
            '/students/create': 'studentsController#create',
            '2': 'studentsController#generateReport',
            '/students': 'studentsController#index',
            '3': 'homeController#exit'
        }
        this.dispatcher = new DispatcherModule.Dispatcher(this.routes);
    }

    start() {
        this.dispatcher.dispatch({
            route: '/',
            parms: ''
        });
    }
}

let myApp = new App();
myApp.start();

module.exports.App = App;
