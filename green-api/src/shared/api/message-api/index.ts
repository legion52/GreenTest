import {
  IfetchChatHistoryReq,
  IfetchChatHistoryRes,
  IfetchMessageReq,
  IfetchMessageRes,
} from "./model";
import { baseSliceAPI } from "../base-api";
const idInstance = localStorage.getItem('idInstance');
const apiTokenInstance = localStorage.getItem('apiTokenInstance');


export const messageApi = baseSliceAPI.injectEndpoints({
  endpoints: (builder) => ({
    fetchMessage: builder.mutation<IfetchMessageRes, IfetchMessageReq>({
      query: (body) => ({
        url: `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        method: "POST",
        body: body,
      }),
    }),
    fetchChatHistory: builder.query<
      IfetchChatHistoryRes,
      IfetchChatHistoryReq
    >({
      query: (body) => ({
        url: `waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        method: "POST",
        body: body,
      }),
      transformResponse:(response:IfetchChatHistoryRes)=>response.reverse(),

      
    }),
  }),
});

export const { useFetchMessageMutation, useFetchChatHistoryQuery } = messageApi;
