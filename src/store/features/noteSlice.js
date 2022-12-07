import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notes: [
    {
      id: 1,
      note: "First note it is",
      pending: true,
    },
    {
      id: 2,
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at venenatis lacus, vel vulputate felis. Vestibulum semper risus leo, non rutrum lorem vehicula",
      pending: false,
    },
  ],
  display: false,
};
const noteSlice = createSlice({
  name: "NOTES",
  initialState,
  reducers: {
    toggleDisplay: (state) => {
      state.display = !state.display;
    },
    addNote: (state, action) => {
      state.notes.push({
        id: state.notes.length + 1,
        note: action.payload.note,
        pending: true,
      });
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    readToggle: (state, action) => {
      state.notes.forEach((el, ind) => {
        if (el.id == action.payload.id) {
          el.pending = !el.pending;
        }
      });
    },
    editNote: (state, action) => {
      state.notes.forEach((el, ind) => {
        if (el.id == action.payload.id) {
          el.note = action.payload.note;
        }
      });
    },
  },
});
export const { toggleDisplay, addNote, removeNote, readToggle, editNote } =
  noteSlice.actions;
export default noteSlice;
