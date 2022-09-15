import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";
window.Buffer = window.Buffer || require("buffer").Buffer;

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: "Stacalc",
      icon: ".",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getPerson() {
  return new Person(getUserData().profile);
}

export const logoutUser = () => {
  userSession.signUserOut(window.location.origin);
};
