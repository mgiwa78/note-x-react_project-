import "./pagination.styles.scss";

import { ReactComponent as ArrowLeft } from "../../svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../svg/arrow-right.svg";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-btn pagination-left">
        <ArrowLeft />
        <span className="arrow-text left-text">Page 1</span>
      </div>
      <div className="pagination-btn pagination-right">
        <ArrowRight />
        <span className="arrow-text right-text">Page 1</span>
      </div>
    </div>
  );
};

export default Pagination;
