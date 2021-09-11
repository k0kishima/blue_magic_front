import { createSlice } from "@reduxjs/toolkit";

export type settingItem = "voting_enable" | "crawling_enable";

export type SettingState = {
  voting_enable: boolean;
  crawling_enable: boolean;
};

export const initialState: SettingState = {
  voting_enable: true,
  crawling_enable: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { item, value }: { item: settingItem; value: boolean } =
        action.payload;
      state[item] = value;
    },
  },
});

export const actions = settingSlice.actions;
export default settingSlice.reducer;
