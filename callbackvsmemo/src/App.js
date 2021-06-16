import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
// const var1 = 'test'
// const var2 = 'test'

// const func1 = () => {}
// const func2 = () => {}

// const func3 = func1

// const Button = ({...props}) => {
//   useEffect(() => {
//     console.log("BUTTON: RE-RENDER")
//   })  

//   useEffect(() => {
//     console.log("BUTTON: ON CLICK CHANGED")
//   }, [props.onClick])  

//   return <button {...props} />
// }

const filter = (users, query) => users.filter(users =>users.name.toLowerCase().includes(query))

const UserList = ({users, query}) => {
  const filtered = filter(users, query)

  return filtered.map(users => <div key={users.id}>{users.name}</div>)
}

function App() {
  const [query, setQuery] = useState()
  const [users, setUsers] = useState([])

//   useEffect(() => {
//     console.log("APP: RE-RENDER")
//   })  

const getUsers = useCallback(async() => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/')
  setUsers(data)
}, [])

  useEffect(() => {
    getUsers()
  }, [getUsers])  


  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>

      <input type="text" onChange={ev => setQuery(ev.target.value)} />
      <UserList users={users} query={query} />
      {/* <Button onClick={useCallback(() => setCount(prev => prev+1), [])}>Botao</Button> */}
      {/* <button onClick={() => setCount(prev => prev+1)}>Increment</button> */}
    </div>
  );
}

export default App;
