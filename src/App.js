import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NoteWrap from "./components/NoteWrap";
import NoteAdd from "./components/NoteAdd";
import { useSelector } from "react-redux";
function App() {
  const display = useSelector((state) => state.notes.display);
  return (
    <div className="App">
      <NoteHeader />
      <NoteWrap />
      {display && <NoteAdd />}
    </div>
  );
}

export default App;
