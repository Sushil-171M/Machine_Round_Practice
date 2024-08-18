import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Utility/UserContext";

const ButtonComponent = () => {
  const [userLogin, setUSerLogin] = useState(null);
  const user = useContext(userContext);
  const [show, setShow] = useState(false);

  //   console.log(user);

  useEffect(() => {
    const userD = user.filter((user) => {
      return user.login;
    });

    setUSerLogin(userD);
  }, []);
  return (
    <>
      <button type="click" onClick={() => setShow(!show)}>
        Click Me
      </button>
      {show && userLogin.length > 0 && (
        <h3>Logged in User is :{userLogin[0].userName} </h3>
      )}
    </>
  );
};

export default ButtonComponent;
