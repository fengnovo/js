export default function createStore(reducer, initStore, enhancer) {

    let state = initStore;
    let events = [];
    let getState = () => state;
    let dispatch = action => {
        state = reducer(state, action);
        events.forEach(event => {
            event.call(this);
        });
    }
    let subscribe = event => {
        events.push(event);
    }
    dispatch({type: '@@INIT'});
    return {
        getState,
        dispatch,
        subscribe
    }

}