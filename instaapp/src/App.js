import React from "react";
import { Alert, Button, Container, Row, Col } from "reactstrap";

// import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles";

import NavBar from "./components/navigationbar";
import PhotoViewer from "./components/carousel";

const axios = require("axios");
const apiurl = "https://api.instagram.com/v1";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: "",
      gotToken: false,
      url: "",
      picArray: [],
      captionArray: []
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
          this.setState({
            accessToken: returnedtoken,
            gotToken: true
          });
        }
      );
    }
  }

  getAPIinfo() {
    // axios.get(apiurl + '/users/self' + '/?access_token=' + this.state.accessToken).then(res => console.log(res))
    axios
      .get(
        apiurl +
          "/users/self/media/recent" +
          "/?access_token=" +
          this.state.accessToken
      )
      .then(res => {
        console.log(res.data.data[1]);
        console.log(res.data.data[1].caption.text);
        for (var i = 0; i < res.data.data.length; i++) {
          this.setState({
            picArray: this.state.picArray.concat(
              res.data.data[i].images.standard_resolution.url
            ),
            captionArray: this.state.captionArray.concat(res.data.data[1].caption.text)
          });
        }
      });
  }

  render() {
    // const slider = (
    //   <AwesomeSlider style={AwsSliderStyles}>
    //     <div data-src={imagetest} />
    //     <div data-src="/path/to/image-1.png" />
    //     <div href={testimage} />
    //   </AwesomeSlider>
    // );
    return (
      <Container>
        <div>
          <NavBar />
        </div>

        <Row>
          <Col xs="2" sm="2" className="centercol border-right">
            <div style={{ marginTop: "5%" }}>
              <Button color="primary" onClick={() => this.navigate()}>
                Grant Access
              </Button>
            </div>
          </Col>
          <Col>
            <div style={{ marginTop: "2%" }}>
              <Alert color="warning" style={{ width: "40%" }}>
                <div>Received access to Instagram account:</div>
                <div style={{ fontWeight: "bold" }}>
                  {this.state.gotToken.toString()}
                </div>
              </Alert>
            </div>
          </Col>
        </Row>

        <div style={{ marginTop: "2%" }}>
          <Button color="success" onClick={() => this.getAPIinfo()}>
            Get Info
          </Button>
        </div>

        <div
          style={{
            width: 600,
            resize: "contain",
            marginTop: "4%",
            marginBottom: "10%"
          }}
        >
          <PhotoViewer imgArray={this.state.picArray} captionArray={this.state.captionArray}/>
          {/* {slider} */}
        </div>
      </Container>
    );
  }
}
