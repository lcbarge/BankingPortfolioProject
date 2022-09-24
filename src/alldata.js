import {UserContext} from './context.js'
const {useContext} = require("react");

export function AllData(){
  const user_context = useContext(UserContext);
  console.log(JSON.stringify(user_context))
  return (
    <>
      <h1>All Data</h1>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Pasword</th>
          <th scope="col">Balance</th>
        </tr>
        </thead>
        <tbody>
        {user_context.users.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.name}</td>
              <td>{listValue.email}</td>
              <td>{listValue.password}</td>
              <td>{listValue.balance}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}
