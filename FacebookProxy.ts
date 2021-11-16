import * as Facebook from "expo-facebook";

export interface FacebookLogin {
  facebookLoginResult?: Facebook.FacebookLoginResult;
  user?: any;
  error?: any;
  type?: string;
}

export async function logIn(): Promise<FacebookLogin> {
  try {
    await Facebook.initializeAsync({
      appId: "405166990987939",
    });
    const facebookLoginResult: Facebook.FacebookLoginResult =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
    if (facebookLoginResult.type === "success") {
      // Get the user's name using Facebook's Graph API
      const response: Response = await fetch(
        `https://graph.facebook.com/me?access_token=${facebookLoginResult.token}`
      );
      return {
        facebookLoginResult: facebookLoginResult,
        user: await response.json(),
        type: facebookLoginResult.type,
      };
    } else {
      return {
        facebookLoginResult,
        type: "cancel",
      };
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
    return {
      error: message,
      type: "error",
    };
  }
}
