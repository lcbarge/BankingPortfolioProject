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
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
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
