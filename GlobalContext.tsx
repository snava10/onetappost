import React from "react";
import { FacebookLogin } from "./FacebookProxy";

export interface GlobalCtxContent {
    facebookLogin: FacebookLogin;
}

const GlobalContext = React.createContext<GlobalCtxContent | null>({} as GlobalCtxContent);

export default GlobalContext;
