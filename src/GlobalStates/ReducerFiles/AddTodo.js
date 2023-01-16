const Addtodo = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      return { ...state, taskName: payload.taskName };
    }
    case "CHANGE": {
      return {
        ...state,
        taskName: state.taskName.map((currentItem) =>
          currentItem.id === action.payload
            ? { ...currentItem, completed: true }
            : currentItem
        ),
      };
    }

    default:
      throw new Error("Problem in Global State");
  }
};
export default Addtodo;
