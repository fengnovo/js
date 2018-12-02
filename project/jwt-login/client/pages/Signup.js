import React, { Component } from 'react';
import { signup } from '../api';

class Signup extends Component {
    handleSubmit = e => {
        e.preventDefault();
        let username = this.username.value;
        let password = this.password.value;
        signup({username, password}).then(response => {
            if(response) {
                this.props.history.push('/login');
            }
        })
    }
    render() {
        return (
            <div>
                <h3>注册</h3>
                <form onSubmit={this.handleSubmit}>
                    用户名：<input ref={ ref => this.username  = ref }/> <br />
                    密码：<input ref={ ref => this.password = ref }/> <br/>
                    <button type='submit'>提交</button>
                </form>
            </div>
        );
    }
}

export default Signup;
