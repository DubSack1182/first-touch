import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as touchService from '../../services/touchesService';


const TouchForm = (props) => {
  const [formData, setFormData] = useState({
    Session: '',
    Location: '',
    Date: '',
    Time: '',
  });

  const { touchId } = useParams();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
        console.log("form data", formData);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (touchId) {
        props.handleUpdateTouch(touchId, formData);
      } else {
        props.handleAddTouch(formData);
      }
  };

  useEffect(() => {
    const fetchTouch = async () => {
      const touchData = await touchService.show(touchId);
      setFormData(touchData);
    };
    if (touchId) fetchTouch();
  }, [touchId]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
      <h1>{touchId ? 'Edit Session' : 'New Session'}</h1>
        <label htmlFor="session-input">SESSION</label>
        <select
          required
          name="Session"
          id="session-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Passing & Receiving">Passing & Receiving</option>
          <option value="Shooting">Shooting</option>
          <option value="Dribbling">Dribbling</option>
          <option value="Defensive">Defensive</option>
          <option value="Conditioning">Conditioning</option>
          <option value="Goalkeeping">Goalkeeping</option>
          <option value="Coordination & Teamwork">Coordination & Teamwork</option>
        </select>
        <label htmlFor="location-input">LOCATION</label>
        <select
          required
          name="Location"
          id="location-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Reid Park">Reid Park</option>
          <option value="Frances Bradley Park">Frances Bradley Park</option>
          <option value="Elon Park">Elon Park</option>
          <option value="Shuffletown Park">Shuffletown Park</option>
        </select>
        <label htmlFor="date-input">DATE</label>
        <select
          required
          name="Date"
          id="date-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <label htmlFor="time-input">TIME</label>
        <select
          required
          name="Time"
          id="time-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="1:30 to 2:30">1:30 to 2:30</option>
          <option value="2:30 to 3:30">2:30 to 3:30</option>
          <option value="3:30 to 4:30">3:30 to 4:30</option>
          <option value="4:30 to 5:30">4:30 to 5:30</option>
          <option value="5:30 to 6:30">5:30 to 6:30</option>
          <option value="6:30 to 7:30">6:30 to 7:30</option>
          <option value="7:30 to 8:30">7:30 to 8:30</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default TouchForm;