import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <>
        <div className='bg-gradient-to-r from-[#9DEAF4]  to-[#F0936C] min-h-screen'>
          {children}
        </div>
      </>
    </>
  );
};

export default AuthLayout;
