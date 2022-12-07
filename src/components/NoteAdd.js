import "./noteAdd.css";
import { useDispatch } from "react-redux";
import { toggleDisplay, addNote } from "../store/features/noteSlice";
import { useState } from "react";
const NoteAdd = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const noteChange = (e) => {
    setNote(e.target.value);
  };
  const updateNote = (e) => {
    e.preventDefault();
    dispatch(addNote({ note }));
    setNote("");
    dispatch(toggleDisplay());
  };
  return (
    <div className="noteAdd-wrap">
      <div
        className="note-drop"
        onClick={() => dispatch(toggleDisplay())}
      ></div>
      <form>
        <textarea rows="4" cols="50" onChange={noteChange} value={note} />
        <button onClick={updateNote}>Add</button>
      </form>
    </div>
  );
};
export default NoteAdd;
