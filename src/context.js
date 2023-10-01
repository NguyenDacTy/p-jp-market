import { createContext, useState } from "react";

const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [cartStore, setCartStore] = useState([]);
  const [detailStore, setDetailStore] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lgEmail, setLgEmail] = useState("");
  const [lgPass, setLgPass] = useState("");
  return (
    <MyContext.Provider
      value={{
        cartStore,
        setCartStore,
        detailStore,
        setDetailStore,
        valueSearch,
        setValueSearch,
        email,
        setEmail,
        passWord,
        setPassWord,
        userName,
        setUserName,
        phoneNumber,
        setPhoneNumber,
        lgEmail,
        setLgEmail,
        lgPass,
        setLgPass,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
