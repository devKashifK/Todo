import React, { useEffect, useReducer } from "react";
import GlobalState from "./AppContext";
import Addtodo from "./ReducerFiles/AddTodo";
import CounterReducer from "./ReducerFiles/CounterReducer";
import {
  counterInitialState,
  initialTodoState,
  
} from "./ReducerFiles/initaialstate";

function AppState(props) {
  const [counterState, counterDispatcher] = useReducer(
    CounterReducer, counterInitialState
  );
  const [addState, addDispatcher] = useReducer(Addtodo, initialTodoState);

  function Add(item) {
    const addToDo = addState.taskName.concat(item);
    addDispatcher({
      type: "ADD",
      payload: {
        taskName: addToDo,
      },
    });
  }
  function ChangeValue(id) {
    addDispatcher({ type: "CHANGE", payload: id });
  }
 function Change() {
  const value = 
  useEffect(() => {
  const timer  = setInterval(() => {
    counterState.seconds = counterState.seconds - 1
    if(counterState.seconds === 0 ){
      counterState.count = counterState.count - 1
    }
  }, 1000);
  return () => clearInterval(timer)
})
  counterDispatcher({ type: "SECONDS", payload: {
    seconds : value,
  } });
 }
  return (
    <GlobalState.Provider
      value={{
        Add,
        addState,
        ChangeValue,
        counterState,
        counterDispatcher,
        Change
        
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
}
export default AppState;
