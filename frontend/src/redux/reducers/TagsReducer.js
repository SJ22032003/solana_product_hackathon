import { GET_TAGS_LIST_SUCCESS } from "../ActionType";

const initialState = {
  tags: [],
};

export const TagsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_TAGS_LIST_SUCCESS:
      newState = {
        ...state,
        tags: action?.payload?.map((item) => {
          return { name: item.name, id: item._id };
        }),
      };
      return newState;

    default:
      return state;
  }
};
