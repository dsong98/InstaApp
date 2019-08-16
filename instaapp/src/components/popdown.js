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
          How to use this page
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
              1.) Allow this page access to your Instagram account by clicking 'Grant Access'.
              <br/>
              2.) You should be redirected to Instagram. Sign into your account there.
              <br/>
              3.) You should be redirected back to this page, if not make sure to navigate back.
              <br/>
              4.) Click 'Get Info' to get your photos and captions!
              <br/>
              <br/>
              This page was built by Daniel Song.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}
