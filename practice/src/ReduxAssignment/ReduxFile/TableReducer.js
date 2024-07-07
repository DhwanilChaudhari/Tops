const initialState = {
  data: [
    { id: 1, name: "Dhwanil Chaudhari", age: 24 },
    { id: 2, name: "Herry Patel", age: 24 },
    { id: 3, name: "Rutvik Chaudhari", age: 23 },
    { id: 4, name: "Aniket Patel", age: 23 },
  ],
  searchTerm: "",
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default tableReducer;
