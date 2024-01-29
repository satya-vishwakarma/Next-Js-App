import { createSlice } from '@reduxjs/toolkit';

interface student {
  name: string,
  fatherName: string
}


export interface CounterState {
  studenList: student[];
}

const initialState: CounterState = {
  studenList: [{
    name: "",
    fatherName: ""
  }],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (statstate, action: any) => {
      statstate.studenList.push(action.payload);
    },
    listStudent: (state) => {
      state;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment, listStudent } = counterSlice.actions;

export default counterSlice.reducer;
