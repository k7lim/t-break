import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAnswers } from './redux/actions/answerActions';

const App = () => {
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAnswers(answers));
  };

  return (
    <div className="container">
      <h2>Quit Cannabis Goals Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="health">Why do you want to quit cannabis for your health?</label>
          <input
            type="text"
            name="health"
            id="health"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="career">Why do you want to quit cannabis for your career?</label>
          <input
            type="text"
            name="career"
            id="career"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="relationships">Why do you want to quit cannabis for your relationships?</label>
          <input
            type="text"
            name="relationships"
            id="relationships"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
