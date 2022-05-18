import "./pagination.styles.jsx";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ArrowLeft } from "../../svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../svg/arrow-right.svg";
import {
  SelectNotesPage,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";
import { SetNotePage } from "../../redux/notes/notes-actions";
import {
  ArrowText,
  PaginationBtn,
  PaginationContainer,
} from "./pagination.styles.jsx";

const Pagination = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(SelectNotesPage);
  const notesArray = useSelector(SelectUserNotesArray);

  const handlePageClick = (pageAction, prevPage) => {
    switch (pageAction) {
      case "inc":
        if (prevPage + 1 > notesArray.length / 10) return;
        else return dispatch(SetNotePage(prevPage + 1));
      case "dec":
        if (prevPage - 1 === 0) return;
        else return dispatch(SetNotePage(prevPage - 1));

      default:
        break;
    }
  };
  return (
    <PaginationContainer>
      <PaginationBtn onClick={() => handlePageClick("dec", pageNumber)}>
        <ArrowLeft />
        <ArrowText>
          Page {pageNumber - 1 ? `${pageNumber - 1}` : null}
        </ArrowText>
      </PaginationBtn>
      <PaginationBtn onClick={() => handlePageClick("inc", pageNumber)}>
        <ArrowRight />
        <ArrowText>
          Page {pageNumber + 1 > notesArray ? ` ` : `${pageNumber + 1}`}
        </ArrowText>
      </PaginationBtn>
    </PaginationContainer>
  );
};

export default Pagination;
