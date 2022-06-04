const ACTIVE_PAGE = 'data/ACTIVE_PAGE';
const CATEGORY = 'data/CATEGORY';
const KEYWORD = 'data/KEYWORD';
const IS_KEYWORDS_VISIBLE = 'data/IS_KEYWORDS_VISIBLE';
const IS_POPUP_VISIBLE = 'data/IS_POPUP_VISIBLE';
const SCROLL_PAGE = 'data/SCROLL_PAGE';

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

export const setIsKeywordsVisible = (boolean) => {
  return {
    type: IS_KEYWORDS_VISIBLE,
    boolean
  }
}

export const setIsPopUpVisible = (boolean) => {
  return {
    type: IS_POPUP_VISIBLE,
    boolean
  }
}

export const setScrollPage = (data) => {
  return {
    type: SCROLL_PAGE,
    data
  }
}



const initialState = {
  active_page: "",
  category: "",
  keyword: "",
  is_keywwords_visible: false,
  is_popup_visible: false,
  scroll_page: "categories"
};

export default function useReducer(state = initialState, action) {
  switch(action.type) {
    case ACTIVE_PAGE:
      return { ...state, active_page: action.data }
    case CATEGORY:
      return { ...state, category: action.data }
    case KEYWORD:
      return { ...state, keyword: action.data }
    case IS_KEYWORDS_VISIBLE:
      return { ...state, is_keywords_visible: action.boolean }
    case IS_POPUP_VISIBLE:
      return { ...state, is_popup_visible: action.boolean }
    case SCROLL_PAGE:
      return { ...state, scroll_page: action.data }
    default:
      return state;
  } 
};