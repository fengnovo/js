let Client = require('ssh2-sftp-client');
const CONFIG = require('./CONFIG.JS');

class UploadPlugin {
    constructor() {
        this.sftp = new Client();
        this.config = CONFIG.S_FTP;
        this.url = '/home/ubuntu/test3';
        this.LocalUrl = './dist/';
        this.connect = null;
    }

    upload(key, file) {
        let connect = this.sftp.connect(this.config);
        connect.then(() => {
            return this.sftp.list(this.url);
        }).then((data) => {
            console.log('读取列表成功');
            data.forEach(i => {
                console.log(i.name);
            });
            connect.then(() => {
                let f = this.url + '/' + key;
                console.log(f);
                return this.sftp.put(this.LocalUrl + key, f);
            }).then((data) => {
                console.log(data, '上传成功');
            }).catch((err) => {
                console.log(err, '上传失败1, catch error');
            });
        }).catch((err) => {
            console.log(err, '上传失败2, catch error');
        });
    }

    
    apply(complier){
        complier.hooks.afterEmit.tapPromise('UploadPlugin', complation => {
            let assets = complation.assets;
            
            let promises = Object.entries(assets).map(([key, value]) => this.upload(key, value.source()));
            return Promise.all(promises);
        });
    }
}
module.exports = UploadPlugin;