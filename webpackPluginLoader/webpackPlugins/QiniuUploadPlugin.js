const qiniu = require('qiniu');
const path = require('path');
const fs = require('fs');
const CONFIG = require('./CONFIG.JS');

class QiniuUploadPlugin {
    constructor() {
        let {
            bucket = '', domain = "", accessKey = '', secretKey = ''
        } = CONFIG.QI_NIU;
        let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        let putPolicy = new qiniu.rs.PutPolicy({
            scope: bucket
        });
        this.uploadToken = putPolicy.uploadToken(mac);
        let config = new qiniu.conf.Config();
        this.formUploader = new qiniu.form_up.FormUploader(config);
        this.putExtra = new qiniu.form_up.PutExtra();
    }
    apply(compiler) {
        compiler.hooks.afterEmit.tapPromise('QiniuUploadPlugin', compilation => {
            let assets = compilation.assets;
            let promises = Object.entries(assets).map(([key, value]) => this.upload(key, value.source()));
            return Promise.all(promises);
        });
    }
    upload(key, value) {
        console.log('value', value)
        return new Promise((resolve, reject) => {
            this.formUploader.put(this.uploadToken, key, value, this.putExtra, (err, body, info) => {
                err ? reject(err) : resolve(body);
            });
        });
    }
}
module.exports = QiniuUploadPlugin;