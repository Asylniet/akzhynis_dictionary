import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dictionaryAPI } from '../api/dictionary';

const initialState = {
  wordInfo: {},
  status: 'idle',
};

export const searchWord = createAsyncThunk('dictionary/search', async (word) => {
  const response = await dictionaryAPI.search(word);
  return response.data;
});

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchWord.pending, state => {
        state.searchStatus = 'loading';
      });
    builder.addCase(searchWord.fulfilled, (state, action) => {
        state.searchStatus = 'idle';
        state.wordInfo = action.payload;
    });
  },
});

export default dictionarySlice.reducer;