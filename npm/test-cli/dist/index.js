'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _const = require('./utils/const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// test-cli config set a xx
// test-cli install

const actionMap = {
    install: {
        alias: 'i',
        description: 'install template',
        examples: []
    }
};

_commander2.default.command('install').description('install template').alias('i').action(() => {
    console.log('正在安装...');
});

_commander2.default.version(_const2.default, '-v --version').parse(process.argv);