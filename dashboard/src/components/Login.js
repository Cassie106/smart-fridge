import React from "react";
import background from '../images/bg2.png'
import {LOCAL_API_ROOT} from '../constants';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        if (username === 'admin' && password === '1234') {
            console.log('login success')
            window.location.replace(`${LOCAL_API_ROOT}/home`);
        }
    }

    setUserName = (value) => {
        this.setState({
            username: value
        })
    }

    setPassword = (value) => {
        this.setState({
            password: value
        })
    }

    render() {
        const {username, password} = this.state;

        return (
            <div className="login-wrapper">
                {/* <h1>Please Log In</h1> */}
                <img src={background} alt="BackGround\"/>
                <form className="login" onSubmit={this.handleSubmit}>
                    <h4>Please log in</h4>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => this.setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => this.setPassword(e.target.value)} />
                    </label>
                    <div>
                        {/* <button className="backBtn" type="submit">Submit</button> */}
                        <button className="btn btn-success" type="submit">Submit</button>
                        
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;
