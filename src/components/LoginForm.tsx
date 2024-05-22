import React, { useState } from 'react';
import styled from 'styled-components';

const Area = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
`

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
`

const Modal = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  min-height: 100%;
  min-width: 8rem;
  padding: 1rem;
  position: relative;
`

const InputEmail = styled.input`
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
`

// Define a type for the component props
type LoginFormProps = {
  open: boolean;
  closeModal: Function;
  onLogin: Function;
};

const LoginForm: React.FC<LoginFormProps> = ({ open, closeModal, onLogin }) => {

    const [ email, setEmail ] = useState('')

    const emailOnChange = (event: any) => {
        setEmail(event.target.value)
    }

    const _onLogin = () => {
        onLogin()
        closeModal()
    }

  return (
    <>
      {open &&
        <Area>
          <Overlay onClick={closeModal}/>
          <Modal className="modal inline-block md:w-2/3 lg:w-1/3">
            <div className="rounded-2xl bg-white shadow border border-neutral-300 w-full relative z-30">
              <div className="flex flex-col items-center mt-3">
                <div>
                  <p>登入或註冊</p>
                </div>
              </div>

              <hr className="divider" />

              <div className="py-8 px-6 flex flex-col items-center -mt-4">
                <div className="w-full">
                  <div className="-mb-6">
                    <label className="label">
                      <div className="flex">
                        <div className="flex" >
                          <label className="text-base">Email</label>
                        </div>
                      </div>
                      
                      <InputEmail type="email" autoComplete="username" placeholder="請輸入電子郵件" value={email} onChange={emailOnChange} />
                      
                      <div className="mt-1 text-sm text-neutral-400" data-v-492925a6="">
                        <span></span>
                      </div>
                    </label>
                      
                    <button onClick={_onLogin} style={{background: "rgb(0 49 104)"}} className="my-6 font-medium bg-primary text-white px-5 py-1 rounded-full block w-full whitespace-nowrap select-none text-center truncate" >繼續</button>
                    
                    <hr className="divider" />
                                
                    <button onClick={_onLogin} className="flex justify-center items-center border border-neutral-800 w-full py-2 my-6 rounded-lg relative">
                      <p className="text-base">繼續使用 Apple 登入</p>
                    </button>

                    <button onClick={_onLogin} className="flex justify-center items-center border border-neutral-800 w-full py-2 my-6 rounded-lg relative">
                      <p className="text-base">繼續使用 Google 登入</p>
                    </button>

                    <button onClick={_onLogin} className="flex justify-center items-center border border-neutral-800 w-full py-2 my-6 rounded-lg relative">
                      <p className="text-base">繼續使用 Facebook 登入</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </Area>
      }
    </>
  );
};

export default LoginForm;