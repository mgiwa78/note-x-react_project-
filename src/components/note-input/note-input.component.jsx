import "./note-input.styles.scss";

const NoteForm = () => {
  return (
    <div className="note-form-input">
      <div className="top-input">
        <input
          type="text"
          placeholder="Add title here"
          className="note-input note-title"
        />
        <select name="priority" className="priority" placeholder="Priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="buttom-input">
        <input
          type="text"
          placeholder="Enter text here......"
          className="note-input note-content"
        />
      </div>
    </div>
  );
};

export default NoteForm;
