import React from 'react'
import { useDispatch } from 'react-redux';
import { setGenderFilter } from '../actions/productActions';
const GenderFilter = () => {

    const dispatch = useDispatch();

    const handleGenderChange = (gender) => {
      dispatch(setGenderFilter({gender}));
    };

    return (<>
        <div className="accordion" id="genderAccordion">
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingGender">
                    <button
                        className="accordion-button collapsed"
                        style={{ fontSize: "13px", color: '#333', border: 'none' }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseGender"
                        aria-expanded="false"
                        aria-controls="collapseGender"
                    >
                        <p className='fs-6'>Gender</p>
                    </button>
                </h2>
                <div
                    id="collapseGender"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingGender"
                    data-bs-parent="#genderAccordion"
                >
                    <div className="accordion-body">
                        {/* Checkbox Items */}
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="men"  onChange={() => handleGenderChange('men')}/>
                            <label className="form-check-label" htmlFor="men">Men</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="women" onChange={() => handleGenderChange('women')}/>
                            <label className="form-check-label" htmlFor="women">women</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal-line' style={{ marginTop: "1px", maxWidth: "210px", marginLeft: '15px', borderBottom: '1px solid #ddd' }} />
        </div>
    </>)
}

export default GenderFilter
