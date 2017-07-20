const readlineSync = require('readline-sync');

class HomeController {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    showMainMenu(parms) {
        const response = `1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：\n`;
        const routeName = readlineSync.question(response);
        if (this.validateInputForRootPage(routeName)) {
            this.dispatcher.dispatch({
                route: routeName,
                parms: {}
            });
        } else {
            this.dispatcher.dispatch({
                route: '/',
                parms: {}
            });
        }
    }

    validateInputForRootPage(routeName) {
        return /^[123]$/.test(routeName);
    }

    exit(parms) {
        process.exit();
    }
}

module.exports.HomeController = HomeController;
