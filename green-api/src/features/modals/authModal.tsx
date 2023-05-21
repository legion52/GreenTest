import React, { useState } from "react";
import { BaseModal } from ".";
import { useAppDispatch } from "../../shared/lib";
import { signIn } from "../../entities/user/userSlice";

export const AuthModal = () => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const dispatch = useAppDispatch()
  const signInHandler = () => {
    if (idInstance.length && apiTokenInstance.length) {
        dispatch(signIn({idInstance, apiTokenInstance}))
    }
  };
  return (
    <BaseModal>
      <div className="flex flex-col gap-3 w-[500px]  p-7">
        <h1>idInstance</h1>
        <input
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          className="w-full h-[50px] bg-[#f0f2f5] border rounded-lg  outline-none p-4"
          placeholder="Введите idInstance"
          type="text"
        />
        <h1>apiTokenInstance</h1>
        <input
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          className="w-full h-[50px] bg-[#f0f2f5] border rounded-lg pl-3 outline-none"
          placeholder="Введите apiTokenInstance"
          type="text"
        />
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={signInHandler}
            className="h-[40px] w-[150px] bg-[#00a884] rounded-sm text-white"
          >
            Войти
          </button>
        </div>
      </div>
    </BaseModal>
  );
};
