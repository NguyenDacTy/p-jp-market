import { createContext, useState } from "react";

const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [cartStore, setCartStore] = useState([]);
  return (
    <MyContext.Provider value={{ cartStore, setCartStore }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
