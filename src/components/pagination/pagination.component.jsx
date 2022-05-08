import "./pagination.styles.scss";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ArrowLeft } from "../../svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../svg/arrow-right.svg";
import {
  SelectNotesPage,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";
import { SetNotePage } from "../../redux/notes/notes-actions";

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
    <div className="pagination-container">
      <div
        onClick={() => handlePageClick("dec", pageNumber)}
        className="pagination-btn pagination-left"
      >
        <ArrowLeft />
        <span className="arrow-text left-text">
          Page {pageNumber - 1 ? `${pageNumber - 1}` : null}
        </span>
      </div>
      <div
        onClick={() => handlePageClick("inc", pageNumber)}
        className="pagination-btn pagination-right"
      >
        <ArrowRight />
        <span className="arrow-text right-text">
          Page {pageNumber + 1 > notesArray ? ` ` : `${pageNumber + 1}`}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
