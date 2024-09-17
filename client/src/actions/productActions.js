import products from '../api/data';  // Import the data
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FILTER_SAREES = 'FILTER_SAREES';
export const FILTER_SILK_SAREES = "FILTER_SILK_SAREES"
export const FILTER_DRESSES = "FILTER_DRESSES"
export const FILTER_TOPS = "FILTER_TOPS"
export const FILTER_T_SHIRT = "FILTER_T_SHIRT"
export const FILTER_JEANS = "FILTER_JEANS"
export const FILTER_KIDS_DRESSES = "FILTER_KIDS_DRESSES"
export const FILTER_WATCHES = "FILTER_WATCHES"
export const FILTER_HOME_KITCHEN = "FILTER_HOME_KITCHEN"
export const FILTER_FACE = "FILTER_FACE"
export const FILTER_BEDSHEETS = "FILTER_BEDSHEETS"
export const FILTER_SANITIZERS="FILTER_SANITIZERS"
export const FILTER_All_Bags="FILTER_All_Bags"
export const FILTER_SHOES="FILTER_SHOES"
export const FILTER_MOBILE="FILTER_MOBILE"
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SORT_TYPE="SET_SORT_TYPE"
export const SET_GENDER_FILTER='SET_GENDER_FILTER'
export const SET_COLOR_FILTER='SET_COLOR_FILTER'
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,  // Using a  local products
    });
  }
};
export const filterSarees = () => {
  return {
    type: FILTER_SAREES,
  }
}

export const filterSilkSarees = () => {
  return {
    type: FILTER_SILK_SAREES
  }
}
export const filterDresses = () => {
  return {
    type: FILTER_DRESSES
  }
}

export const filterTops = () => {
  return {
    type: FILTER_TOPS
  }
}
export const filterTshirts = () => {
  return {
    type: FILTER_T_SHIRT
  }
}
export const filterJeans = () => {
  return {
    type: FILTER_JEANS
  }
}
export const filterKidsDresses = () => {
  return {
    type: FILTER_KIDS_DRESSES
  }
}
export const filterWatches = () => {
  return {
    type: FILTER_WATCHES
  }
}
export const filterHomeKitchen = () => {
  return {
    type: FILTER_HOME_KITCHEN
  }
}
export const filterFace = () => {
  return {
    type: FILTER_FACE
  }
}
export const filterbedsheets = () => {
  return {
    type: FILTER_BEDSHEETS
  }
}
export const filterSanitizers = () => {
  return {
    type: FILTER_SANITIZERS

  }
}
export const filterAllBags = () => {
  return {
    type: FILTER_All_Bags

  }
}
export const filterShoes = () => {
  return {
    type: FILTER_SHOES
  }
}
export const filterMobile = () => {
  return {
    type: FILTER_MOBILE
  }
}

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});


export const setSortType = (sortType) => {
  return {
    type: SET_SORT_TYPE,
    payload: sortType,
  };
};

export const setGenderFilter = (gender) => ({
    type: SET_GENDER_FILTER,
    payload: gender,
  }
)

export const setColorFilter = (colors) => ({
  type: SET_COLOR_FILTER,
  payload: colors,
});




