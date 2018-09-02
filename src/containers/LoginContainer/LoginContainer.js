import React from 'react';

const CLIENT_ID = 'daad44e65eb14a50b73c6adcf23262a4';
const REDIRECT_URI = 'http://localhost:3000/';

export class InstagramLogin extends React.Component {

  onBtnClick() {
    const scope = 'public_content';
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}&response_type=token`
  }

  render() {
    const style = {
      background: '#000',
      display: 'inline-block',
      color: '#fff',
      width: 200,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: '1px solid transparent',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: '"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif'
    };

    return (
      <button style={style} onClick={this.onBtnClick}>
        Login
      </button>
    );
  }
}

export default InstagramLogin
