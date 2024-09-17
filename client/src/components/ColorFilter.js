import React from 'react';
import { useDispatch } from 'react-redux';
import { setColorFilter } from '../actions/productActions';

const ColorFilter = () => {
  const dispatch = useDispatch();

  const handleColorChange = (colors) => {
    dispatch(setColorFilter({ colors }));
  };

  return (
    <>
      <div className="accordion" id="colorAccordion">
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingColor">
            <button
              className="accordion-button collapsed"
              style={{ fontSize: "13px", color: '#333', border: 'none' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseColor"
              aria-expanded="false"
              aria-controls="collapseColor"
            >
              <p className='fs-6'>Color</p>
            </button>
          </h2>
          <div
            id="collapseColor"
            className="accordion-collapse collapse"
            aria-labelledby="headingColor"
            data-bs-parent="#colorAccordion"
          >
            <div className="accordion-body">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="red"
                  onChange={() => handleColorChange('Red')}
                />
                <label className="form-check-label" htmlFor="red">Red</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="blue"
                  onChange={() => handleColorChange('Blue')}
                />
                <label className="form-check-label" htmlFor="blue">Blue</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="green"
                  onChange={() => handleColorChange('Green')}
                />
                <label className="form-check-label" htmlFor="green">Green</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="black"
                  onChange={() => handleColorChange('Black')}
                />
                <label className="form-check-label" htmlFor="black">Black</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
