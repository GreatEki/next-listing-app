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

    // init netlify identity
    netlifyIdentity.init();
  }, []);

  function login() {
    netlifyIdentity.open();
  }

  const context = { user, login };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
