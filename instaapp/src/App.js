import React from "react";
import { Alert, Button, Container } from "reactstrap";
import axios from "axios";

import NavBar from "./components/navigationbar";

const apiurl =
  "https://api.instagram.com/v1/self/media/recent?access_token=ACCESS_TOKEN";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: "",
      gotToken: false,
      url: ""
    };
  }

  /**
   * Step One: Direct your user to our authorization URL
   */
  navigate() {
    const CLIENTID = "6edfa56b44354df2a6aa6d94c1646881";
    const REDIRECTURI = "http://localhost:3000/";

    const url =
      "https://api.instagram.com/oauth/authorize/?client_id=" +
      CLIENTID +
      "&redirect_uri=" +
      REDIRECTURI +
      "&response_type=token";

    window.location.replace(url);
  }
  /**
   * Step Two: Receive the access_token via the URL fragment
   */
  componentDidMount() {
    if (window.location.href.includes("access_token")) {
      this.setState(
        {
          url: window.location.href
        },
        () => {
          var returnedtoken = this.state.url.split("access_token=").pop();
          this.setState(
            {
              accessToken: returnedtoken,
              gotToken: true
            },
            () => console.log("Access token: \n" + this.state.accessToken)
          );
        }
      );
    }
  }

  getAPIinfo() {
    
  }

  render() {
    return (
      <Container>
        <div>
          <NavBar />
        </div>

        <div style={{ marginTop: "5%" }}>
          <Button color="primary" onClick={() => this.navigate()}>
            Grant Access
          </Button>
        </div>

        <div style={{ marginTop: "2%" }}>
          <Alert color="warning" style={{ width: "35%" }}>
            <div>Received access to Instagram account:</div>
            <div style={{fontWeight: "bold"}}>{this.state.gotToken.toString()}</div>
          </Alert>
        </div>

        <div style={{ marginTop: "10%" }}>
          <Button color="success" onClick={() => this.getAPIinfo()}>
            Get Info
          </Button>
        </div>
      </Container>
    );
  }
}
