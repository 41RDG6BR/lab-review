'use strict'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
    }
    // if(typeof state === 'undefined') {
    //     return 0
    // }
    // if(action.type === 'INCREMENT'){
    //     return state + 1
    // }
    // if (action.type === 'DECREMENT') {
    //     return state - 1
    // }
    return state
}
const { createStore } = Redux
//createStore cria a store, store é um objeto . O objeto principal reservado para todo o estado da aplicação
console.log(createStore)

const store = createStore(counter)//Criando a store para o reducer counter
//Metodos da store: dispatch(), getState(), replaceReducer(), subscribe(), Symbol(observable)

store.subscribe(() => {
    //Subscribe recebe uma função que é executada toda vez que uma açao é disparada
    console.log('disparou uma ação!')
})

console.log(store.getState()) //Metodo getState() retorna o state atual

store.dispatch({ type: 'INCREMENT' }) //Metodo dispatch() dispara uma açao
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

// console.assert(
//     counter(0, { type: 'INCREMENT'}) === 1
// )

// console.assert(
//     counter(1, { type: 'INCREMENT'}) === 2
// )

// console.assert(
//     counter(2, { type: 'DECREMENT'}) === 1
// )
// console.assert(
//     counter(5, { type: 'DECREMENT'}) === 4
// )
// console.assert(
//     counter(3, { type: 'SOMETHING'}) === 3
// )

// console.assert(
//     counter(undefined, {}) === 0
// )