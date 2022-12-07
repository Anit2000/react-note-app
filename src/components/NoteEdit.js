import { useState } from "react";
import { editNote } from "../store/features/noteSlice";
import { useDispatch } from "react-redux";
import "./noteEdit.css";
const NoteEdit = (props) => {
  const dispatch = useDispatch();
  const [note, setNote] = useState(props.note);
  const updateNote = (e) => {
    setNote(e.target.value);
  };
  const changeNote = () => {
    dispatch(editNote({ id: props.id, note: note }));
    props.toggleDisplay(false);
  };
  return (
    <div className="note-edit-wrap">
      <div
        class="note-edit-drop"
        onClick={() => {
          props.toggleDisplay(false);
        }}
      ></div>
      <div className="edit-form">
        <textarea rows="4" cols="50" onChange={updateNote}>
          {note}
        </textarea>
        <button onClick={changeNote}>Done</button>
      </div>
    </div>
  );
};
export default NoteEdit;
