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

const updateSettingsDocument = gql`
  mutation updateSetting($input: UpdateSettingInput!) {
    updateSetting(input: $input) {
      setting {
        var
        value
      }
    }
  }
`;

export const settingApi = createApi({
  reducerPath: "settingApi",
  baseQuery: graphqlBaseQuery({ baseUrl: "http://localhost:53000/graphql" }),
  // TODO: queryとmutation の型付け
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => ({
        document: getSettingsDocument,
      }),
    }),
    updateSettings: builder.mutation({
      query: (input: { var: string; value: boolean }) => ({
        document: updateSettingsDocument,
        variables: {
          input,
        },
      }),
    }),
  }),
});

export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingApi;
