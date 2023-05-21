import React, { useState } from "react";
import { useAppSelector } from "../../shared/lib";
import {
  useFetchChatHistoryQuery,
  useFetchMessageMutation,
} from "../../shared/api/message-api";
import { Checkbox } from "../../shared/ui/checkbox";

export const ChatPanel = () => {
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const currentChat = useAppSelector((state) => state.chats.currentChat);
  const [sendMessage, data] = useFetchMessageMutation();
  const { data: chatHistory, refetch } = useFetchChatHistoryQuery(
    {
      chatId: `${currentChat?.number}@c.us`,
      count: 30,
    },
    {
      pollingInterval: isActive ? 5000 : 0,
    }
  );

  const timeConvert = (time: number) => {
    let date = new Date(time * 1000);
    return date.toLocaleTimeString("as", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (input.length) {
      setInput("");
      await sendMessage({
        chatId: `${currentChat?.number}@c.us`,
        message: input,
      });
      refetch();
    }
  };

  return (
    <div className="flex flex-col w-[1000px] h-[calc(100vh-20px)]">
      <div className="flex justify-between items-center h-[60px] bg-[#f0f2f5] px-1">
        {currentChat && (
          <>
            <div className="flex gap-2 items-center">
              <div className="w-[32px] h-[32px] bg-[#dfe5e7] rounded-full"></div>
              <div>{currentChat?.name}</div>
            </div>
            <div className="flex gap-4 mr-2">
              <button onClick={refetch} className="text-sm text-white rounded-md bg-[#00a884] px-1">Обновить</button>
              <div className="text-sm">Обновлять каждые 5 секунд</div>
              <Checkbox
                isActive={isActive}
                onClick={() => setIsActive((prev) => !prev)}
              />
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col h-full overflow-y-auto scrollbar-w-0 gap-2 p-4 bg-[#efeae2]">
        {chatHistory?.map((el) => (
          <div
            key={el.idMessage}
            className={`flex ${
              el.type === "outgoing" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-md text-center p-2 text-sm max-w-[300px] ${
                el.type === "outgoing" ? "bg-[#d9fdd3]" : "bg-white"
              }`}
            >
              <span>{el.textMessage}</span>
              <div className="flex justify-end text-[10px] text-gray-500">
                {timeConvert(el.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {currentChat ? (
        <form onSubmit={submitHandler}>
          <div className="flex gap-2 w-full bg-[#f0f2f5] p-2">
            <input
              placeholder="Введите сообщение"
              className="w-full h-[42px] border rounded-xl pl-3 outline-none"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="border bg-[#00a884] rounded-xl p-2 text-white text-sm">
              Отправить
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};
