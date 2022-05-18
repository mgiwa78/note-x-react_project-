import "./sort.style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { SortNotesArrayAction } from "../../redux/notes/notes-actions";
import { SelectUserNotesArray } from "../../redux/notes/notes-selector";
import { SortContainer, SortSelect } from "./sort.style.jsx";

const Sort = () => {
  const dispatch = useDispatch();

  const notesArray = useSelector(SelectUserNotesArray);

  const handleSortChange = (e) => {
    const SortType = e.target.value;
    if (!SortType) return;

    dispatch(SortNotesArrayAction(notesArray, SortType));
  };
  return (
    <SortContainer>
      <SortSelect
        onChange={(e) => handleSortChange(e)}
        name="sort"
        className="sort-toggle"
        placeholder="Sort by"
        defaultValue={"date"}
      >
        <option value="title">Title</option>
        <option value="date">Date</option>
        <option value="priority">Priority</option>
      </SortSelect>
    </SortContainer>
  );
};

export default Sort;
