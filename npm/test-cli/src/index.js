import program from 'commander';
import VERSION from './utils/const';


// test-cli config set a xx
// test-cli install

const actionMap = {
    install: {
        alias: 'i',
        description: 'install template',
        examples: []
    }
}

program.command('install')
        .description('install template')
        .alias('i')
        .action(() => {
            console.log('正在安装...');
        });


        program.version(VERSION, '-v --version').parse(process.argv);