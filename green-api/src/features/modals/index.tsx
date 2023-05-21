import React, { ReactNode } from "react";
interface IBaseModal {
  children: ReactNode;
}
export const BaseModal: React.FC<IBaseModal> = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-60 z-50">
      <div className="flex justify-center items-center p-2 bg-white rounded-md">
      {children}
      </div>
    </div>
  );
};
