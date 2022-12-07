import { IconEdit, IconDelete, IconRead } from "../assets/icons/Icons";
import { removeNote, readToggle } from "../store/features/noteSlice";
import { useState } from "react";
import NoteEdit from "./NoteEdit";
import { useDispatch } from "react-redux";
import "./noteBlock.css";
const NoteBlock = (props) => {
  const [editDisplay, setEditDisplay] = useState(false);
  const dispatch = useDispatch();
  const deleteNote = () => {
    dispatch(removeNote({ id: props.id }));
  };
  const toggleRead = () => {
    dispatch(readToggle({ id: props.id }));
  };
  const toggleEditDisplay = () => {
    setEditDisplay((prevState) => !prevState);
  };
  const displayEdit = (display) => {
    setEditDisplay(display);
  };
  return (
    <div className="noteBlock">
      {editDisplay && (
        <NoteEdit id={props.id} note={props.note} toggleDisplay={displayEdit} />
      )}
      <p className={!props.pending && "task-done"}>{props.note}</p>
      <div className="noteActions">
        <button className={!props.pending && "task-done"} onClick={toggleRead}>
          <IconRead />
        </button>
        <button onClick={toggleEditDisplay}>
          <IconEdit />
        </button>
        <button onClick={deleteNote}>
          <IconDelete />
        </button>
      </div>
    </div>
  );
};
export default NoteBlock;
