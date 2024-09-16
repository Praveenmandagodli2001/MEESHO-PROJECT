import React from 'react';
import { Link } from 'react-router-dom';
// import CategoryFilter from './CategoryFilter';
import GenderFilter from './GenderFilter';
// import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';
import { useDispatch } from 'react-redux';
import { setSortType } from '../actions/productActions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSortChange = (sortType) => {
    dispatch(setSortType(sortType));
  }


  return (
    <div className="bg-white" style={{ width: '250px', minHeight: '100vh' }}>
      {/* Sort Dropdown */}
      <div className="dropdown">
        <input 
          type="text"
          className="form-control dropdown-toggle rounded-0"
          id="dropdownMenuInput"
          placeholder="Sort by: Relevance"
          data-bs-toggle="dropdown"
          readOnly
          style={{ height: "30px", width: "240px", fontSize: "15px", margin: "1px" }}
        />
        <span className="dropdown-arrow"></span>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuInput"
          style={{
            width: "240px",
            maxHeight: '200px',
            overflowY: 'auto',
          }}
        >
          <li><Link className="dropdown-item" to="#" onClick={() => handleSortChange('relevance')}>Relevance</Link></li>
          <li><Link className="dropdown-item" to="#" onClick={() => handleSortChange('lowToHigh')}>Price: Low to High</Link></li>
          <li><Link className="dropdown-item" to="#" onClick={() => handleSortChange('highToLow')}>Price: High to Low</Link></li>
        </ul>
      </div>

      {/* Filters Section */}
      <div className="bg-white ml-3 my-3 border" style={{ width: '240px' }}>
        <h6 className='ps-3 my-3' style={{ color: '#400', fontSize: "12px" }}>
          FILTERS
          <p style={{ color: '#777', fontSize: "10px" }}>100+ products</p>
        </h6>
        <hr className='horizontal-line' style={{ marginTop: "10px", maxWidth: "210px", marginLeft: '15px' }} />

       
        {/* <CategoryFilter/> */}
        <GenderFilter/>
        {/* <SizeFilter/> */}
        <ColorFilter/>

      </div>
    </div>
  );
};

export default Sidebar;
