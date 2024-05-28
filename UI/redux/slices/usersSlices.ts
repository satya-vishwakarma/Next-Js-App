import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  data: [],
  error: null,
  loading: false,
};

export const getUser = createAsyncThunk('user', async () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => {
      return response.json();
    },
  );
});

const userSlices = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<any>) => {
      const { title } = action.payload;
      state.push(title);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export const { addUsers } = userSlices.actions;

export default userSlices.reducer;
