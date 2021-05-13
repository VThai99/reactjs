import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import * as Setting from './../../components/constants/setting' ;
import axios from "axios";
function Register(props) {
    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [confirm_password, setConfirm_password]= useState();


    function goFacebook()
    {
        history.push('https://www.facebook.com')
    }

    async function goRegister(e)
    {
      e.preventDefault();
      const data = {
        email: email,
        password: password,
        confirm_password: confirm_password,
        name: name
      };

      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      };

      let url = (await Setting.URL) + "api/auth/signup";
      try {
        return axios(url,{method: "POST",data: data,config,})
          .then((res) => {
            if (res.status === 201) {
              console.log(res.data);
              history.push('/login');
              
           
            } else {
              alert("Lỗi");
            }
          })
          .catch((err) => {
            alert("Lỗi");
            console.log(err);
          });
      } catch (err) {
        alert("Lỗi");
        console.log(err);
      }

    }


    return (
        <div className="c-app flex-row align-items-center">
            <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card mx-4">
        <div className="card-body p-4">
          <h1>Register</h1>
          <p className="text-muted">Create your account</p>
          <div className="input-group mb-3">
            <div className="input-group-prepend"><span className="input-group-text">
                <svg className="c-icon">
                  <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                </svg></span></div>
            <input className="form-control" type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend"><span className="input-group-text">
                <svg className="c-icon">
                  <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                </svg></span></div>
            <input className="form-control" type="text" placeholder="Email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend"><span className="input-group-text">
                <svg className="c-icon">
                  <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                </svg></span></div>
            <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-group mb-4">
            <div className="input-group-prepend"><span className="input-group-text">
                <svg className="c-icon">
                  <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                </svg></span></div>
            <input className="form-control" type="password" placeholder="Repeat password" value={confirm_password} onChange={(e)=> setConfirm_password(e.target.value)}/>
          </div>
          <button className="btn btn-block btn-success" type="button" onClick={goRegister}>Create Account</button>
        </div>
        <div className="card-footer p-4">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-block btn-facebook" type="button" onClick={goFacebook}><span>facebook</span></button>
            </div>
            <div className="col-6">
              <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
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

export default Register;