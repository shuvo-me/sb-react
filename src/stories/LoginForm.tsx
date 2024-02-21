import React, { useState } from "react";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <input type="email" data-testid="email" />
      <input type="password" data-testid="password" />
      <button type="button" onClick={() => setShow(true)}>
        Click
      </button>
      {show && (
        <div>
          Everything is perfect. Your account is ready and we should probably
          get you started!
        </div>
      )}
    </div>
  );
};

export default LoginForm;
