import "./emptyNote.css";
import { useDispatch } from "react-redux";
import { toggleDisplay } from "../store/features/noteSlice";
const EmptyNotes = () => {
  const dispatch = useDispatch();
  return (
    <div className="empty-note">
      <p>No notes to show</p>
      <button onClick={() => dispatch(toggleDisplay())}>Add note</button>
    </div>
  );
};
export default EmptyNotes;
