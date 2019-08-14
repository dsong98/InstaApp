import React from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

export default class InfoBox extends React.Component {
  render() {
    return (
      <div>
        <Button id="PopoverLegacy" type="button">
          About this page
        </Button>
        <UncontrolledPopover
          trigger="legacy"
          placement="bottom"
          target="PopoverLegacy"
        >
          <PopoverHeader>Fun Instagram Extension:</PopoverHeader>
          <PopoverBody>
              This page uses Instagram API to get information from your profile, such as photos.
              <br/>
              1.) Allow this page access to your Instagram account by clicking 'Grant Access'
              <br/>
              2.) Sign into your account
              <br/>
              3.) You should be redirected to this page, if not make sure to navigate back
              <br/>
              4.) Click 'Get Info'
              <br/>
              <br/>
              This page was built by Daniel Song.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}
