import "./sort.style.scss";

const Sort = () => {
  return (
    <div className="sort-container">
      <select name="sort" className="sort-toggle" placeholder="Sort by">
        <option value="title">Title</option>
        <option value="date">Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default Sort;
