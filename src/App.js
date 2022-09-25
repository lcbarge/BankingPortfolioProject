import './App.css';
import NavBar from './navbar.js'
import {Home} from './home.js'
import {CreateAccount} from './createaccount.js'
import {Login} from './login.js'
import {Deposit} from './deposit.js'
import {Withdraw} from './withdraw.js'
import {AllData} from './alldata.js'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {UserContext} from './context.js'
export function App() {
  const default_users = {
      users:[{
      name:'Lauren Barge',
      email:'laurencbarge@gmail.com',
      password:'secret',
      balance:100
    },{
      name:'Maddie Mayer',
      email:'maddie@mit.edu',
      password:'secret1',
      balance:240
    },
      {
        name:'Thomas Richards',
        email:'TK@unreachable.gov',
        password:'secret2',
        balance:500
       },
    {
      name:'River Bend',
      email:'rivere@google.com',
      password:'secret3',
      balance:40
    }
  ]}
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <UserContext.Provider value={default_users}>
        <div className="container bg-light" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/createAccount/" element={<CreateAccount/>} />
          <Route path="/login/" element={<Login/>} />
          <Route path="/deposit/" element={<Deposit/>} />
          <Route path="/withdraw/" element={<Withdraw/>} />
          <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
    </div>
  );
}

export default App;





