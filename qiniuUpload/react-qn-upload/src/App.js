import React, {
  Component
} from 'react';
import axios from 'axios';
import $ from 'jquery';
import './App.css';
var qiniu = require('qiniu-js');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class App extends Component {
    constructor() {
        super();
        this.watchChange = this.watchChange.bind(this);
        this.getToken = this.getToken.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.state = {
          bucketLists: [],
          accessKey: '',
          secretKey:  '',
          scopeVal: '',
          token: ''
        };
        
    }

    //预加载.获取已经注册的服务器上的token（如果是已经注册好的用户，token是一个给定的值，直接在    var uploader = Qiniu.uploader({}） 中把
    uploadFile(data){
          var token = data.token;
          console.log(qiniu);
          // var observable = qiniu.upload(file, key, token, putExtra, config)
          // var subscription = observable.subscribe(function (res) {
          //   console.log(res);
          // }, function (errorData) {
          //   console.log(errorData);
          // }, function (successData) {
          //     console.log(successData);
          // }) // 这样传参形式也可以
          qiniu
          .bind($('#select'), {
            filter: 'image'
          })
          .bind.dnd($('#previews'), {
            filter: 'image'
          })
          .on('over', function() {
            // document.getElementById('previews').style.border = '5px dashed #999';
          })
          .on('file', function(file) {
            // document.getElementById('previews').style.border = '5px dashed #DDD';
            file.imageView({
              mode: 1,
              width: 200,
              height: 200
            }, function(err, image) {
              if (err) {
                if (progress) {
                  progress.innerHTML = 'Error';
                }
                return;
              }
              var wrapper = document.createElement('span');
              wrapper.style.float = 'left';
              var progress = document.createElement('p');
              wrapper.appendChild(progress);
              wrapper.appendChild(image);
              document.getElementById('previews').appendChild(wrapper);
              images.putFile(file.name, file, {
                before: function(xhr, key, file, options) {
                  progress.innerHTML = file.name;
                },
                progress: function(precent, loaded, total) {
                  progress.innerHTML = file.name + ' : ' + precent.toFixed(2) + '%';
                }
              }, function(err, reply) {
                if (err) {
                  return progress.innerHTML = 'Error';
                }
                var asset = images.key(file.name);
                progress.innerHTML = file.name + ' : Done <a href="' + asset.url() + '" target="_blank">Link</a>';
              });
            });
          });
          // subscription.unsubscribe() // 上传取消
          // var uploader = Qiniu.uploader({
          //     runtimes: 'html5,html4,flash',    //上传模式,依次退化
          //     browse_button: 'fileToUpload',       //上传选择的点选按钮，**必需**
          //     //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
          //     //uptoken : 'xxxxxxxxxxxxxx',
          //     uptoken: token,
          //     save_key: false,        // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
          //     domain: 'blog',
          //     get_new_uptoken: true,
          //     container: 'container',     //上传区域DOM ID，默认是browser_button的父元素，
          //     max_file_size: '100mb',           //最大文件体积限制
          //     flash_swf_url: 'js/Moxie.swf',  //引入flash,相对路径
          //     max_retries: 0,                   //上传失败最大重试次数
          //     dragdrop: true,                   //开启可拖曳上传
          //     drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
          //     chunk_size: '4mb',                //分块上传时，每片的体积
          //     auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
          //     init: {
          //         'FilesAdded': function(up, files) {
          //             // plupload.each(files, function(file) {
          //             //     // 文件添加进队列后,处理相关的事情
          //             // });
          //         },
          //         'BeforeUpload': function(up, file) {
          //             // 每个文件上传前,处理相关的事情
          //             // msg.append(' BeforeUpload 事件（每个文件上传前,处理相关的事情）<br />');
          //         },
          //         'UploadProgress': function(up, file) {
          //             // 每个文件上传时,处理相关的事情
          //             var percent = Math.round(file.loaded / file.size * 100);        //文件上传时的进度
          //             console.log(percent);
          //         },
          //         'FileUploaded': function(up, file, info) {
          //             var arr = file.name.split('.'); 
          //             // var lastName = arr[arr.length - 1];     //后缀名
          //             // var domain = up.getOption('domain');
          //             console.log(info);
          //             var res = JSON.parse(info);
          //             // var res = JSON.parse(info.response);     // 最新版qiniu.js可能该成此方式
          //             // json = jQuery(res);
          //             console.log('http://cdn.fengnovo.cn/' + res.key);      //自定义key的链接
          //             // alert("上传成功");

          //         },
          //         'Error': function(up, err, errTip) {
          //             //上传出错时,处理相关的事情<br>
          //             alert('上传出错,请检查文件大小');
          //         },
          //         'UploadComplete': function() {
          //             //队列文件处理完毕后,处理相关的事情
          //         },
          //         // 设置key值
          //         // 'Key': function(up, file) {
          //         //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
          //         //     // 该配置必须要在 unique_names: false , save_key: false 时才生效
          //         //     var arr = file.name.split('.'); 
          //         //     var lastName = arr[arr.length - 1];     //后缀名
          //         //     var fileName = file.name.slice(0,file.name.lastIndexOf('.'));
          //         //     var hashName = Crypto.MD5(fileName + Date.now());
          //         //     console.log('hash值：');
          //         //     console.log(Crypto.MD5(fileName));
          //         //     var key = 'uploadtool' + hashName + '.' + lastName;         //key值设置为：文件名 - 时间戳 . 后缀名
          //         //     return key;
          //         // }
          //     }
          // });
    }
    watchChange(event) {
      // this.setState({
      //   name: bucketLists
      // });
    }
    getToken() {
      var data = {
        accessKey: this.accessKey.value,
        secretKey: this.secretKey.value,
        scopeVal: this.scopeVal.value
      };
      
          axios({
            method: 'post',
            url: 'http://localhost:3001/upload', 
            params: data
          }).then(d => {
            let bucketLists = d.data.bucketLists.map(i => {
                var s3;
                Object.keys(i).forEach(k => {
                  s3 = {
                    name: k,
                    value: i[k]
                  }
                });
                return s3;
             });
            this.setState({
              bucketLists: bucketLists
            });
            this.uploadFile({token: d.data.token});
          });

    }

    fileChange() {
          //console.log(this.files)
          var data = new FormData();
          data.append('token', self.uploadToken);
          data.append('file', this.files[0]);
          axiosInstance({
              method: 'POST',
              url: 'http://up.qiniu.com',
              data: data,
              onUploadProgress: function(progressEvent) {
                  var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                  //console.log(percentCompleted)
                  //对应上传进度条
                  self.progress = percentCompleted;
              },
          })
          .then(function(res) {
              //console.log('res',res)
              let { base_url, path } = res.data;
              //页面所用字段
              self.previewAvatar = `${base_url}${path}?imageView2/1/w/154/h/154`;
              //传给后台不完整
              self.formData.avatar = `${path}`;

          })
          .catch(function(err) {
              console.log('err', err);
          });
      });
    }

    componentDidMount() {
        // var observable = qiniu.upload(file, key, token, putExtra, config)
        // var subscription = observable.subscribe(observer) // 上传开始
        // // or
        // var subscription = observable.subscribe(next, error, complete) // 这样传参形式也可以
        // subscription.unsubscribe() // 上传取消
    }
    render() {
        return (<div className = "App">
                <div className="left">
                    <p>请选择存储空间：</p>
                    <select name="chooseBucket" onChange={this.watchChange}>
                      {
                        this.state.bucketLists.map((item, index) => {
                          return (<option key={index} value={item.value}> {item.name} </option>);
                        })
                      }
                    </select>
                </div>
                <div className="right">
                    <div>
                      <span className="upload-1">accessKey: </span><input type="text" value="Ou7zcWGXkx8ALHxWGDHWwpF0LoNAfp8XM111qS8R" className="upload-2" ref={(input)=> {this.accessKey = input;}}/><br />
                      <span className="upload-1">secretKey:  </span><input type="text" value="ZAfwldt8i_z5GfNGeSL848C7L3cNkNOBZ8YaRXDG" className="upload-2" ref={(input)=> {this.secretKey = input;}}/><br />
                      <span className="upload-4">七牛空间名称:  </span><input type="text" value="blog" className="upload-2" ref={(input)=> {this.scopeVal = input;}}/><br />
                      <button className="upload-3" onClick={this.getToken}>获取Token</button>
                    </div>
                    <div>
                      <div className="upFile">
                          <div>
                              <input type="file" onChange={(files) => {this.files = files;}}/>
                          </div>
                      </div>
                    </div>
                </div>
        </div>);
    }
}

export default App;