import React from 'react';
import {INSTAGRAM_CLIENT_ID} from 'Constants/common';
import Login from 'Components/Login';

export class InstagramLogin extends React.Component {
  handleLoginClick() {
    const redirectUrl = __webpack_public_path__;

    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${redirectUrl}&scope=public_content&response_type=token`
  }

  render() {
    return <Login onClick={this.handleLoginClick}/>;
  }
}

export default InstagramLogin
