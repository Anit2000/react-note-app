import NoteBlock from "./NoteBlock";
import EmptyNotes from "./EmptyNotes";
import { useSelector } from "react-redux";
import "./noteWrap.css";
const NoteWrap = () => {
  const { notes } = useSelector((state) => state.notes);
  console.log(notes);
  return (
    <div className="noteWrap">
      {notes.length > 0 ? (
        notes.map((note) => <NoteBlock {...note} key={note.id} />)
      ) : (
        <EmptyNotes />
      )}
    </div>
  );
};
export default NoteWrap;
