import React from 'react'

const SizeFilter = () => {
    return (<>
        <div className="accordion" id="sizeAccordion">
            <div className="accordion-item border border-0">
                <h2 className="accordion-header" id="headingSize">
                    <button
                        className="accordion-button collapsed"
                        style={{ fontSize: "13px", color: '#333', border: 'none' }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSize"
                        aria-expanded="false"
                        aria-controls="collapseSize"
                    >
                       <p className='fs-6'>Size</p>
                    </button>
                </h2>
                <div
                    id="collapseSize"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSize"
                    data-bs-parent="#sizeAccordion"
                >
                    <div className="accordion-body">
                        {/* Checkbox Items */}
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="small" />
                            <label className="form-check-label" htmlFor="small">Small</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="medium" />
                            <label className="form-check-label" htmlFor="medium">Medium</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="large" />
                            <label className="form-check-label" htmlFor="large">Large</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="xlarge" />
                            <label className="form-check-label" htmlFor="xlarge">X-Large</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal-line' style={{ marginTop: "1px", maxWidth: "210px", marginLeft: '15px', borderBottom: '1px solid #ddd' }} />
        </div>
    </>)
}

export default SizeFilter
