import React from 'react';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import SearchContainer from 'Containers/SearchContainer';
import LoginContainer from 'Containers/LoginContainer';

class HomePageContainer extends React.Component {

  constructor(props){
    super(props);
    const { cookies } = props;

    this.state = {
      accessToken: cookies.get('accessToken') || ''
    };
  }

  componentDidMount() {
    const { cookies, location } = this.props;
    const [ key, value ] = location.hash.slice(1).split('=');

    if (key === 'access_token') {
      console.log(value);

      cookies.set('accessToken', value, { path: '/' });
      this.setState({accessToken: value});
    }
  }

  render() {
    const { accessToken } = this.state;

    if (accessToken) {
      return <SearchContainer accessToken={accessToken}/>;
    } else {
      return <LoginContainer/>;
    }
  }

}


export default withRouter(withCookies(HomePageContainer));
