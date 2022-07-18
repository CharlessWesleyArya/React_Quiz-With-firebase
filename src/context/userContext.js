import React from "react";

const INIT_STATE = {
  isLoggedIn: false,
  _id: null,
  name: null,
};

var User = React.createContext(INIT_STATE);
export default User;
export class Authentication extends React.Component {
  render() {
    var { childern } = this.props;
    return <User.Provider value={INIT_STATE}>{childern}</User.Provider>;
  }
}
