// export default (reducers) => {
//     return (state = {}, action) => {
//         console.log(reducers);
//       return Object.keys(reducers).reduce((nextState, key) => {
//          //key: count,key
//          //state[key]:当前遍历的reducer先前的state值
//          //nextState[key]:当前遍历的reducer变化后的state值
//           nextState[key] = reducers[key](state[key], action);
//           return nextState;
//         }, {}); 
//       };
// };

export default (reducers) => {
  return (state = {}, action)=> {
    return Object.keys(reducers).reduce((nextState, key)=> {
      nextState = reducers[key](state[key],action);
      console.log(nextState);
      return nextState;
    }, {})
  }
}