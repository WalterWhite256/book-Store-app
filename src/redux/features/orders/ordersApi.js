import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    credentials: 'include',
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: '/',
        method: 'POST',
        body: newOrder,
      }),
      invalidatesTags: ['Orders'],
    }),
    getOrderByEmail : (builder.query)({

      query: (email) => ({
        url: `/email/${email}`
      }),
      providesTags: ['Orders']
    })
    // You can add more endpoints like getOrders, deleteOrder, etc.
  }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;

export default ordersApi