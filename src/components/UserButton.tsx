import React from 'react';

// Define a type for the component props
// type UserButtonProps = {};

//style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1206px, 44px);"
const UserButton: React.FC = () => {

  return (
    <>
        <div className="absolute right-5 top-3 cursor-pointer border-0 active:border-0 hover:border-0" onClick={() =>{location.href = '/profile'}}>
        <div>
            <div>
            <button className="pr-2 bg-transparent border border-primary text-primary px-5 py-1 can-hover:hover:bg-opacity-20 active:bg-opacity-20 can-hover:hover:bg-primary active:bg-primary rounded-full inline-flex items-center justify-center whitespace-nowrap select-none text-center truncate">
                <span className="inline-flex items-center space-x-2">Sony.lin
                <i className="icon-bars"></i>
                <i className="icon-user text-lg"></i>
                </span>
            </button>
            </div>
            {/* <div className="menu invisible"  data-popper-placement="bottom-start">
                <div className="origin-top" style={{display: "none"}}>
                <div className="rounded-2xl bg-white shadow border border-neutral-300 w-full max-h-full overflow-auto">
                    <div className="flex flex-col p-4 w-56">
                    <div className="flex-col font-medium">
                        <p className="mb-4 text-sm">哈囉 sonylin</p>
                        <div className="mb-4 flex items-center justify-between">
                        <p className="font-medium text-sm">GO Points</p>
                        <div className="flex items-center">
                            <p className="mr-2 text-secondary">0</p>
                            <a target="_blank" href="/zh-tw/about/faq" className="icon-question-circle cursor-pointer text-neutral-400"></a>
                        </div>
                        </div>
                            
                        <div className="space-y-2">
                        <a href="/zh-tw/member/account" className="bg-transparent border border-primary text-primary px-5 py-1 can-hover:hover:bg-opacity-20 active:bg-opacity-20 can-hover:hover:bg-primary active:bg-primary rounded-full block w-full whitespace-nowrap select-none text-center truncate text-sm">編輯個人資料</a>
                        <a href="/zh-tw/member/order" className="bg-transparent border border-primary text-primary px-5 py-1 can-hover:hover:bg-opacity-20 active:bg-opacity-20 can-hover:hover:bg-primary active:bg-primary rounded-full block w-full whitespace-nowrap select-none text-center truncate text-sm">訂單管理</a>
                        <a href="/zh-tw/member/rating" className="bg-transparent border border-primary text-primary px-5 py-1 can-hover:hover:bg-opacity-20 active:bg-opacity-20 can-hover:hover:bg-primary active:bg-primary rounded-full block w-full whitespace-nowrap select-none text-center truncate text-sm">我的評價</a>
                        <button className="font-medium bg-transparent border border-primary text-primary px-5 py-1 can-hover:hover:bg-opacity-20 active:bg-opacity-20 can-hover:hover:bg-primary active:bg-primary rounded-full block w-full whitespace-nowrap select-none text-center truncate text-sm">推薦註冊拿優惠</button>
                        <a href="#" className="block text-center text-primary can-hover:hover:opacity-75 text-sm">登出</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
        </div>
        </div>
    </>
  );
};

export default UserButton;