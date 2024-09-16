// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { filterByCategory } from '../actions/productActions';
// const CategoryFilter = () => {


//     const dispatch = useDispatch();

//     const handleCategoryChange = (category) => {
//       dispatch(filterByCategory(category));
//     };


//     return (<>
//         <div className="accordion" id="categoryAccordion">
//             <div className="accordion-item border-0">
//                 <h2 className="accordion-header" id="headingOne">
//                     <button
//                         className="accordion-button collapsed"
//                         style={{ fontSize: "13px", color: '#333', border: 'none' }}
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseOne"
//                         aria-expanded="false"
//                         aria-controls="collapseOne"
//                     >
//                         <p className='fs-6'>Category</p>
//                     </button>
//                 </h2>
//                 <div
//                     id="collapseOne"
//                     className="accordion-collapse collapse"
//                     aria-labelledby="headingOne"
//                     data-bs-parent="#categoryAccordion"
//                 >
//                     <div className="accordion-body">
                    
//                         {/* Checkbox Items */}
//                         <div className="form-check mb-2">
//                             <input className="form-check-input" type="checkbox" id="men" onChange={() => handleCategoryChange('men')}/>
//                             <label className="form-check-label" htmlFor="men">men</label>
//                         </div>
//                         <div className="form-check mb-2">
//                             <input className="form-check-input" type="checkbox" id="women" onChange={() => handleCategoryChange('women')} />
//                             <label className="form-check-label" htmlFor="Women">Women</label>
//                         </div>
//                         <div className="form-check mb-2">
//                             <input className="form-check-input" type="checkbox" id="kids" onChange={() => handleCategoryChange('kids')} />
//                             <label className="form-check-label" htmlFor="kids">kids</label>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <hr className='horizontal-line' style={{ marginTop: "1px", maxWidth: "210px", marginLeft: '15px', borderBottom: '1px solid #ddd' }} />
//         </div>
//     </>)
// }

// export default CategoryFilter
