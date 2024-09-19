import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as touchService from '../../services/touchesService';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });
  const { touchId, commentId } = useParams();
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (touchId && commentId) {
        touchService.updateComment(touchId, commentId, formData);
        navigate(`/touches/${touchId}`);
      } else {
        props.handleAddComment(formData);
      }
      setFormData({ text: '' });
  };

  useEffect(() => {
    const fetchTouch = async () => {
      const touchData = await touchService.show(touchId);
      // Find comment in fetched touch data
      setFormData(touchData.comments.find((comment) => comment._id === commentId));
    };
    if (touchId && commentId) fetchTouch();
  }, [touchId, commentId]);
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">POST YOUR REVIEW:</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit">SUBMIT REVIEW</button>
      <button type="submit">UPDATE REVIEW</button>
      <button type="submit">DELETE REVIEW</button>
    </form>
  );
};

export default CommentForm;