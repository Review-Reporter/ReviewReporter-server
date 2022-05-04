const ACTIVE_PAGE = 'data/ACTIVE_PAGE';
const CATEGORY = 'data/CATEGORY';
const KEYWORD = 'data/KEYWORD';

export const setActivePage = (data) => {
  return {
    type: ACTIVE_PAGE,
    data
  }
};

export const setCategory = (data) => {
  return {
    type: CATEGORY,
    data
  }
};

export const setKeyword = (data) => {
  return {
    type: KEYWORD,
    data
  }
};

const initialState = {
  active_page: "",
  category: "",
  keyword: ""
};

export default function useReducer(state = initialState, action) {
  switch(action.type) {
    case ACTIVE_PAGE:
      return { ...state, active_page: action.data }
    case CATEGORY:
      return { ...state, category: action.data }
    case KEYWORD:
      return { ...state, keyword: action.data }
    default:
      return state;
  } 
};