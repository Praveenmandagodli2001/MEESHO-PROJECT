import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  filterSarees,
  filterSilkSarees,
  filterDresses, filterTops,
  filterTshirts,
  filterJeans,
  filterKidsDresses,
  filterWatches,
  filterHomeKitchen,
  filterFace,
  filterbedsheets,
  filterSanitizers,
  filterAllBags,
  filterShoes,
  filterMobile
} from '../actions/productActions';

const Navbar1 = () => {
  //All sareecClick
  let dispatch = useDispatch()
  let handleFilterAllSarees = () => {
    dispatch(filterSarees())
  }

  //silksareeClick
  let handleFilterSilkSarees = () => {
    dispatch(filterSilkSarees());
  }

  let handleFilterSilkDresses = () => {
    dispatch(filterDresses())
  }

  let handleFilterTops = () => {
    dispatch(filterTops())
  }
  let handleFilterTshirts = () => {
    dispatch(filterTshirts())
  }
  let handleFilterJeans = () => {
    dispatch(filterJeans())
  }
  let handleFilterKidsDresses = () => {
    dispatch(filterKidsDresses())
  }
  let handleFilterWatches = () => {
    dispatch(filterWatches())
  }
  let handleFilterHomeKitchen = () => {
    dispatch(filterHomeKitchen())
  }
  let handleFilterFace = () => {
    dispatch(filterFace())
  }
  let handleFilterBedsheets = () => {
    dispatch(filterbedsheets())
  }
  let handleFilterSanitizers = () => {
    dispatch(filterSanitizers())
  }
  let handleFilterAllbags = () => {
    dispatch(filterAllBags())
  }
  let handleFilterShoes = () => {
    dispatch(filterShoes())
  }
  let handleFilterMobile = () => {
    dispatch(filterMobile())
  }

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light border-bottom second-navbar mb-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-2" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-around w-100 mb-0" style={{ fontSize: "13px" }}>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Women Ethnic</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/allSarees/" onClick={handleFilterAllSarees}>AllSarees</Link></li>
                <li><Link className="dropdown-item" to="/silkSarees/" onClick={handleFilterSilkSarees}>SilkSarees</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Women Western</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dresses/" onClick={handleFilterSilkDresses}>Dresses</Link></li>
                <li><Link className="dropdown-item" to="/tops/" onClick={handleFilterTops}>Tops</Link></li>
              </ul>
            </li>
            {/* <!-- Add more dropdown items as needed --> */}
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Men</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/TShirts/" onClick={handleFilterTshirts}>T-Shirts</Link></li>
                <li><Link className="dropdown-item" to="/jeans/" onClick={handleFilterJeans}>Jeans</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Kids</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/KidsDresses/" onClick={handleFilterKidsDresses}>Dresses</Link></li>
                <li><Link className="dropdown-item" to="/watches/" onClick={handleFilterWatches}>Watches</Link></li>
              </ul>
            </li><li className="nav-item dropdown">
              <Link className="nav-link" to="" >Home & Kitchen</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/homeKitchen" onClick={handleFilterHomeKitchen}>Kitchen Storage</Link></li>
                <li><Link className="dropdown-item" to="/bedsheets" onClick={handleFilterBedsheets}>Bedsheets</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Beauty & Health</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/face" onClick={handleFilterFace}>Face</Link></li>
                <li><Link className="dropdown-item" to="/sanitizers" onClick={handleFilterSanitizers}>Sanitizers</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Bags & Footwear</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/allbags" onClick={handleFilterAllbags}>All bags</Link></li>
                <li><Link className="dropdown-item" to="/shoes" onClick={handleFilterShoes}>Shoes</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Electronics</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/mobile" onClick={handleFilterMobile}>All Mobile</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar1
