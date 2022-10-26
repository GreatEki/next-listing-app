import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // listen for netlify login event
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    // init netlify identity
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  function login() {
    netlifyIdentity.open();
  }

  function logout() {
    netlifyIdentity.logout();
  }

  const context = { user, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
