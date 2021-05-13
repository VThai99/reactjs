import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as Setting from './../../components/constants/setting';
import axios from "axios";
function Login(props) {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies(['access_token', 'user_info', 'name_user']);
  function goRegister() {
    history.push('/register')
  }


  async function onLogin(e) {
    //lay data tu input
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = (await Setting.URL) + "api/auth/login";
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.user.name);
            setCookie("access_token", res.data.access_token, { path: "/" });
            setCookie("user_info", res.data.user, { path: "/" });
            setCookie("name_user", res.data.user.name)
            //goi
            console.log(cookies.name_user)
            history.push("/");
          } else {
            alert("tài khoản hoặc mật khẩu không đúng");
          }
        })
        .catch((err) => {
          alert("tài khoản hoặc mật khẩu không đúng");
          console.log(err);
        });
    } catch (err) {
      alert("tài khoản hoặc mật khẩu không đúng");
      console.log(err);
    }
  }


  return (
    <div className="c-app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>


                  <form onSubmit={onLogin}>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend"><span className="input-group-text">
                        <svg className="c-icon">
                          <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                        </svg></span></div>
                      <input className="form-control" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend"><span className="input-group-text">
                        <svg className="c-icon">
                          <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                        </svg></span></div>
                      <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button className="btn btn-primary px-4" type="submit" onClick={onLogin}>Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button className="btn btn-link px-0" type="button">Forgot password?</button>
                      </div>
                    </div>
                  </form>



                </div>
              </div>
              <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <div className="card-body text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Không có tài khoản thì đăng ký đi :)</p>
                    <button onClick={goRegister} className="btn btn-lg btn-outline-light mt-3" type="button" >Register Now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;