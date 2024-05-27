import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90vw;
  max-width: 1280px;
  h3 {
    text-align: left;
  }
`

const Profile: React.FC = () => {
  return (
    <Container >
      <div className="flex-1">
        <div>
          <div>
            <div data-v-7d80c5b3="" className="my-6 container flex flex-col">
              <div className="flex">
                <div className="mb-6 lg:mb-10">
                  <div className="flex flex-row space-x-2">
                    <span className="font-normal">Menber</span>
                    <span className="font-normal">&gt;</span>
                    <span className="font-normal">Profile</span>
                  </div>
                  <h3 className="mt-1 font-bold text-2xl">Profile</h3>
                </div>
              </div>
              <div data-v-7d80c5b3="" className="wrapper">
                <div data-v-cc59f552="" data-v-7d80c5b3="" className="pb-10">
                  <h3 data-v-cc59f552="">Name</h3>
                  <div data-v-cc59f552="" className="flex items-center justify-between">
                    <h4 data-v-cc59f552="" className="pr-10 text-neutral-400">lin sony</h4>
                    <div data-v-cc59f552="" className="relative">
                      <a data-v-cc59f552="" className="font-medium bg-transparent font-sm hover:text-primary-hover active:text-primary-click text-primary inline-flex items-center justify-center cursor-pointer whitespace-nowrap select-none text-center truncate">Edit</a>
                    </div>
                  </div>
                </div>

                <div data-v-cc59f552="" data-v-7d80c5b3="" className="pb-10">
                  <h3 data-v-cc59f552="">Email</h3>
                  <div data-v-cc59f552="" className="flex items-center justify-between">
                    <h4 data-v-cc59f552="" className="pr-10 text-neutral-400">s***n@taodigitalusa.com</h4>
                    <div data-v-cc59f552="" className="relative">
                      <a data-v-cc59f552="" className="font-medium bg-transparent font-sm hover:text-primary-hover active:text-primary-click text-primary inline-flex items-center justify-center cursor-pointer whitespace-nowrap select-none text-center truncate">Edit</a>
                    </div>
                  </div>
                </div>

                <div data-v-cc59f552="" data-v-7d80c5b3="" className="pb-10">
                  <h3 data-v-cc59f552="">ID Number</h3>
                  <div data-v-cc59f552="" className="flex items-center justify-between">
                    <h4 data-v-cc59f552="" className="pr-10 text-neutral-400">***</h4>
                    <div data-v-cc59f552="" className="relative">
                      <a data-v-cc59f552="" className="font-medium bg-transparent font-sm hover:text-primary-hover active:text-primary-click text-primary inline-flex items-center justify-center cursor-pointer whitespace-nowrap select-none text-center truncate">Edit</a>
                    </div>
                  </div>
                </div>
                
                <div data-v-cc59f552="" data-v-7d80c5b3="" className="pb-10">
                  <h3 data-v-cc59f552="">Passport</h3>
                  <div data-v-cc59f552="" className="flex items-center justify-between">
                    <h4 data-v-cc59f552="" className="pr-10 text-neutral-400">***</h4>
                    <div data-v-cc59f552="" className="relative">
                      <a data-v-cc59f552="" className="font-medium bg-transparent font-sm hover:text-primary-hover active:text-primary-click text-primary inline-flex items-center justify-center cursor-pointer whitespace-nowrap select-none text-center truncate">Edit</a>
                    </div>
                  </div>
                </div>
                
                <div data-v-cc59f552="" data-v-7d80c5b3="" className="pb-10">
                  <h3 data-v-cc59f552="">Birthday</h3>
                  <div data-v-cc59f552="" className="flex items-center justify-between">
                    <h4 data-v-cc59f552="" className="pr-10 text-neutral-400">1985-10-02</h4>
                    <div data-v-cc59f552="" className="relative">
                      <a data-v-cc59f552="" className="font-medium bg-transparent font-sm hover:text-primary-hover active:text-primary-click text-primary inline-flex items-center justify-center cursor-pointer whitespace-nowrap select-none text-center truncate">Edit</a>
                    </div>
                  </div>
                </div>
                
                <div data-v-cc59f552="" data-v-7d80c5b3="" className="pb-10">
                  <h3 data-v-cc59f552="">Mobile Number</h3>
                  <div data-v-cc59f552="" className="flex items-center justify-between">
                    <h4 data-v-cc59f552="" className="pr-10 text-neutral-400"> </h4>
                    <div data-v-cc59f552="" className="relative">
                      <a data-v-cc59f552="" className="font-medium bg-transparent font-sm hover:text-primary-hover active:text-primary-click text-primary inline-flex items-center justify-center cursor-pointer whitespace-nowrap select-none text-center truncate">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;