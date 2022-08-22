import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: "",
  data: [],
  error: "",
};

export const getData = createAsyncThunk("api/getData", () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => data)
            .catch((e)=> e.message)
});

export const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      console.log(action.payload, "pending  ");
      state.loading = true;
    }),
      builder.addCase(getData.fulfilled, (state, action) => {
        console.log(action.payload, "fulfilled");
        state.data = action.payload;
        state.loading = false;
      }),
      builder.addCase(getData.rejected, (state, action) => {
        console.log(action.payload, "rejected");
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default ApiSlice.reducer;
export const apistore = ApiSlice.state;
