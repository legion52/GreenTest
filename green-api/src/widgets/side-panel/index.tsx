import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib";
import { addNewChat, selectChat } from "../../entities/chats/chatSlice";
import { BaseModal } from "../../features/modals";

export const SidePanel = () => {
  const [isModal, setIsModal] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const allChats = useAppSelector((state) => state.chats.allChats);
  const currentChat = useAppSelector((state) => state.chats.currentChat);
  const dispatch = useAppDispatch();

  const selectHandler = (chat: any) => {
    dispatch(selectChat(chat));
  };

  const addChat = () => {
    if (number.length === 11 && number[0] === "7" && name.length) {
      const newChat = { name, number };
      setNumber("");
      setName("");
      setIsModal(false);
      dispatch(addNewChat(newChat));
    } else {
      alert("Некорректные данные!");
      setNumber("");
      setName("");
    }
  };

  return (
    <div className=" w-[500px] bg-white">
      <div className="h-[60px] bg-[#f0f2f5] border-r border-[#d1d7db]"></div>
      <div className="flex items-center gap-2 h-[50px] bg-white px-1">
        <input
          className="w-full h-[35px] bg-[#f0f2f5] border rounded-lg pl-3 outline-none"
          placeholder="Поиск или новый чат"
          type="text"
        />
        <div
          onClick={() => setIsModal(true)}
          className=" flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#00a884] text-white cursor-pointer"
        >
          +
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {allChats?.length ? (
          allChats?.map((el) => (
            <div
            key={el.number}
              onClick={() => selectHandler(el)}
              className={`flex items-center gap-2 w-full h-[72px]  pl-2 cursor-pointer ${
                el === currentChat
                  ? "bg-[#f0f2f5]"
                  : "border-b border-[#e6ecf1]"
              }`}
            >
              <div className="w-[49px] h-[49px] bg-[#dfe5e7] rounded-full"></div>
              <div>{el.name}</div>
            </div>
          ))
        ) : (
          <span className="text-gray-400 mt-3 text-center">Нет доступных чатов</span>
        )}
      </div>
      {isModal && (
        <BaseModal>
          <div className="flex flex-col gap-3 w-[500px]  p-7">
            <h1>Номер телефона</h1>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full h-[50px] bg-[#f0f2f5] border rounded-lg  outline-none p-4"
              placeholder="7(___)___-__-__"
              type="text"
            />
            <h1>Имя</h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[50px] bg-[#f0f2f5] border rounded-lg pl-3 outline-none"
              placeholder="Введите имя"
              type="text"
            />
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setIsModal(false)}
                className="h-[40px] w-[150px] bg-[#bbbfbe] rounded-sm text-white"
              >
                Отмена
              </button>
              <button
                onClick={addChat}
                className="h-[40px] w-[150px] bg-[#00a884] rounded-sm text-white"
              >
                Добавить
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};
