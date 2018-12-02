import React, { Component } from 'react';
import { login } from '../api';

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        let username = this.username.value;
        let password = this.password.value;
        login({username, password}).then(response => {
            if(response) {
                this.props.history.push('/user');
            }
        })
    }
    render() {
        return (
            <div>
                <h3>登录</h3>
                <form onSubmit={this.handleSubmit}>
                    用户名：<input ref={ ref => this.username  = ref }/> <br />
                    密码：<input ref={ ref => this.password = ref }/> <br/>
                    <button type='submit'>提交</button>
                </form>
            </div>
        );
    }
}

export default Login;
