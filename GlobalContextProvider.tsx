import { FacebookLoginResult } from "expo-facebook";
import { Component } from "react";
import { FacebookLogin } from "./FacebookProxy";
import GlobalContext from "./GlobalContext";

export class GlobalContextProvider extends Component {
  state = {
    token: null,
    user: {user:'dummy'},
  };

  render() {
    return (
      <GlobalContext.Provider value={{
        facebookLogin: {
          user: ''          
        } as FacebookLogin
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
