const CounterReducer = (state, action) => {
    const {type , payload} = action
    switch(type){
        case "INCREMENT" :{
            return { ...state, count : state.count + 15}
        }
        
        case "DECREMENT" :{
            return {...state, count: state.count - 15}
        }
        case "START" : {
            return {...state, start : true}
        }
        case "SECONDS" : {
            return {...state , seconds : payload.seconds }
        }
        default: throw  new Error("Problem In Global State");
    }
}

export default CounterReducer;