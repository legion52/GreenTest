import React, { useState } from 'react'
import { SidePanel } from '../../widgets/side-panel';
import { useAppDispatch, useAppSelector } from '../../shared/lib';
import { useFetchChatHistoryQuery, useFetchMessageMutation } from '../../shared/api/message-api';
import { selectChat } from '../../entities/chats/chatSlice';
import { ChatPanel } from '../../widgets/chat-panel';

export const MainPage = () => {
  
    
  
    
  
   
  

    return (
        <>
          <div className="absolute h-[127px] w-full bg-[#00a884] -z-10"></div>
          <div className="App flex justify-center pt-4">
            <SidePanel/>
           <ChatPanel/>
          </div>
        </>
      );
}
