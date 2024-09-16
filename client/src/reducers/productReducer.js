
import {
  FETCH_PRODUCTS,
  FILTER_SAREES,
  FILTER_SILK_SAREES,
  FILTER_DRESSES,
  FILTER_TOPS,
  FILTER_T_SHIRT,
  FILTER_JEANS,
  FILTER_KIDS_DRESSES,
  FILTER_WATCHES,
  FILTER_HOME_KITCHEN,
  FILTER_FACE,
  FILTER_BEDSHEETS,
  FILTER_SANITIZERS,
  FILTER_All_Bags,
  FILTER_SHOES,
  FILTER_MOBILE,
  SET_SEARCH_QUERY,
  SET_SORT_TYPE,
  SET_GENDER_FILTER,
  SET_COLOR_FILTER
} from '../actions/productActions';


const initialState = {
  products: [],
  filteredProducts: [],
  searchQuery: '',
  selectedGenders: [],
  selectedColors: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,  // Store all products
        filteredProducts: action.payload,  // Initially show all products
      };
    case FILTER_SAREES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.categoryy === 'saree'),
      };
    case FILTER_SILK_SAREES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.type === 'silksaree'),
      };
    case FILTER_DRESSES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'dresses'),
      };
    case FILTER_TOPS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'tops'),
      };
    case FILTER_T_SHIRT:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'tshirt'),
      };
    case FILTER_JEANS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'menjeans'),
      };
    case FILTER_KIDS_DRESSES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'kidsdress'),
      };
    case FILTER_WATCHES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'kidswatches'),
      };
    case FILTER_HOME_KITCHEN:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'homekitchen'),
      };
    case FILTER_FACE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'face'),
      };
    case FILTER_BEDSHEETS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'bedsheets'),
      };
    case FILTER_SANITIZERS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'sanitizers'),
      };
    case FILTER_All_Bags:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'allbags'),
      };
    case FILTER_SHOES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'shoes'),
      };
    case FILTER_MOBILE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'mobile'),
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        filteredProducts: state.products.filter(product =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };


    case SET_GENDER_FILTER:
      const { gender } = action.payload;
      const selectedGenders = state.selectedGenders.includes(gender)
        ? state.selectedGenders.filter(g => g !== gender)
        : [...state.selectedGenders, gender];
      return {
        ...state,
        selectedGenders
      };


    case SET_COLOR_FILTER:
      const { color } = action.payload;
      //toggling here
      const selectedColors = state.selectedColors.includes(color)
        ? state.selectedColors.filter(c => c !== color)
        : [...state.selectedColors, color];
      return { ...state, selectedColors };

    default:
      return state;
  }



};

export default productReducer;