import { IconPlus } from "../assets/icons/Icons";
import { useDispatch } from "react-redux";
import { toggleDisplay } from "../store/features/noteSlice";
import "./NoteHeader.css";
const NoteHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="noteHeader">
      <h1>Notes</h1>
      <button className="add-button" onClick={() => dispatch(toggleDisplay())}>
        <IconPlus />
      </button>
    </div>
  );
};
export default NoteHeader;
