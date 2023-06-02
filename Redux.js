const redux = require("redux")

const counterreducer = (state={counter:0}, actions) =>{
    if(actions.type === "INCREMENT"){
        return {counter: state.counter+1}
    }
    if(actions.type === "DECREMENT"){
        return {counter: state.counter-1}
    }
    
}

const store = redux.createStore(counterreducer)


const subscriberfunction = () =>{
    const state = store.getState()
    console.log(state)
}

store.subscribe(subscriberfunction)


store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "DECREMENT"})