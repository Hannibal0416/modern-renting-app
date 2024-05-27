import React, { useState } from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import UserButton from './UserButton';

const LogoH1 = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: #2276a9;
}
`

// Define a type for the component props
type HeaderBarProps = {
  title: string;
};
//style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1206px, 44px);"
const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  const [ open, setOpen ] = useState(false)
  const [ isLogin, setIsLogin ] = useState(false)

  return (
    <>
      <div className="bg-white text-gray-800 text-xl text-left py-4 px-6 fixed top-0 left-0 right-0 z-10 shadow-md">
        <LogoH1 className="font-semibold poetsen-one-regular">{title}</LogoH1>

        {isLogin &&
          <UserButton />
        }

        {!isLogin &&
          <button color="black" style={{ outline: 0 }} onClick={() => setOpen(true)} className="absolute right-5 top-3 cursor-pointer border-0 active:border-0 hover:border-0">註冊 / 登入</button>
        }        
      </div>

      {open &&
        <LoginForm
          open={open}
          closeModal={() => setOpen(false)}
          onLogin={() => setIsLogin(true)}
        />
      }
    </>
  );
};

export default HeaderBar;