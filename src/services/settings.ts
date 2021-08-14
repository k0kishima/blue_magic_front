import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";

import { graphqlBaseQuery } from "services/baseQuery";

const getSettingsDocument = gql`
  query getSettings {
    settings {
      var
      value
    }
  }
`;

export const settingApi = createApi({
  reducerPath: "settingApi",
  baseQuery: graphqlBaseQuery({ baseUrl: "http://localhost:53000/graphql" }),
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => ({
        document: getSettingsDocument,
      }),
    }),
  }),
});

export const { useGetSettingsQuery } = settingApi;
