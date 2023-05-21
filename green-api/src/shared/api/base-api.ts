import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { changeAuthStatus } from "../../entities/user/userSlice";

const idInstance = localStorage.getItem('idInstance');
const apiTokenInstance = localStorage.getItem('apiTokenInstance');
const baseQuery = fetchBaseQuery({
    baseUrl: `https://api.green-api.com/`,
    // credentials: "include",
    prepareHeaders: (headers) => {
      return headers
    },
    method: "GET",
   
   })
   
   export const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
   
    if (result.error) {
      const checkAuth = await baseQuery(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`, api, extraOptions)
      if (checkAuth.data) {
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(changeAuthStatus(false))
      }
    }
   
    return result
   }
   
   
   export const baseSliceAPI = createApi({
    reducerPath: "baseSliceAPI",
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    tagTypes: []
   })
   
   