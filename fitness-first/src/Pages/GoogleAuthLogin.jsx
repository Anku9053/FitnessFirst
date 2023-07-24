import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState } from "react";
// import { useHistory, useRouteMatch } from "react-router-dom";
import {useNavigate} from "react-router-dom"

export default function GoogleAuthLogin() {
  const [googleData, setGoogleData] = useState(null);
//   const history = useHistor();
const history = useNavigate();
  const [visible, setVisible] = useState("none");

  const responseGoogle = (response) => {
    console.log("responseGoogle", response.profileObj);
    setGoogleData(response.profileObj);
    setVisible("Block");
  };

  const onSuccess = (response) => {
    alert("Log out Succuss");
    console.log("logout", response);
    setVisible("none");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          background: "#ccc"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            height: 500,
            width: 500
          }}
        >
          {/* <div style={{ display: visible, textAlign: "center" }}>
            <div style={{ marginBottom: 50 }}>
              <img src={googleData?.imageUrl} />
            </div>
            <div style={{ marginBottom: 20, textAlign: "left" }}>
              <label> Email : {googleData?.email}</label>
            </div>
            <div style={{ marginBottom: 20, textAlign: "left" }}>
              <label> Name : {googleData?.givenName}</label>
            </div>
            <div style={{ marginBottom: 50, textAlign: "left" }}>
              <label> LastName : {googleData?.familyName}</label>
            </div> */}
          {/* </div> */}

          <GoogleLogin
            clientId="660340307769-v43nrgmop5n8na300al28v2f638u9741.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            // scope='https://www.googleapis.com/auth/drive.file'
          />

          <GoogleLogout
            style={{ marginTop: 50 }}
            clientId="660340307769-v43nrgmop5n8na300al28v2f638u9741.apps.googleusercontent.com"
            buttonText="Logout Google"
            onLogoutSuccess={onSuccess}
          ></GoogleLogout>
        </div>
      </div>
    </>
  );
}
