// Reducer (Ações e seus comportamentos)
// =>
// Store (Estado da aplicação)
// =>
// Subscribe (Escuta mudanças de estado)
// =>
// Dispatch (Dispara um evento para o Reducer alterar a Store e invocar a função que foi registrada)

import { createStore } from 'redux';
/*
// É necessário criar um Reducer e um Store
const reducer = function(state,action){
  switch(action.type){
    case 'INCREMENT':
      return state+(action.data);
    case 'DECREMENT':
      return state-(action.data);
    default:
      return state;
  }
}

// 0 é um valor Default, poderia ser um objeto
const store = createStore(reducer, 0);

store.subscribe(function(){
  console.log('Store foi modificada',store.getState()); //Lê o estado da Store
});

// despacha eventos/actions para o Store com alguns dados
store.dispatch({type: 'INCREMENT', data: 1});
store.dispatch({type: 'INCREMENT', data: 1});
store.dispatch({type: 'DECREMENT', data: 1});
*/
const taskReducer = function(state={},action){

}

const userReducer = funtion(state={},action){

}

var reducers = combineReducers({
  taskReducer,
  userReducer
});
