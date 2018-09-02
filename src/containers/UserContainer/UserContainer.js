import React from 'react';
import PropTypes from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import {withRouter} from 'react-router-dom';
import SearchContainer from 'Containers/SearchContainer';
import LoginContainer from 'Containers/LoginContainer';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);

    const {cookies} = props;

    this.state = {
      accessToken: cookies.get('accessToken') || ''
    };
  }

  componentDidMount() {
    const {cookies, location} = this.props;
    const [key, value] = location.hash.slice(1).split('=');

    if (key === 'access_token') {
      cookies.set('accessToken', value, {path: '/'});
      this.setState({accessToken: value});
    }
  }

  render() {
    const {accessToken} = this.state;

    if (accessToken) {
      return <SearchContainer accessToken={accessToken}/>;
    } else {
      return <LoginContainer/>;
    }
  }
}

UserContainer.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  location: PropTypes.object.isRequired
};


export default withRouter(withCookies(UserContainer));
