import {ContextCard} from "./context";
import {useContext, useState, useEffect} from "react";
import {UserContext} from './context.js'
export function Withdraw(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [withdraw, setWithdraw]         = useState('');
  const [email, setEmail]         = useState('');
  const [cardColor, setCardColor] = useState('warning');
  const [newBalance, setNewbalance] = useState('')
  const ctx = useContext(UserContext);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setCardColor('danger')
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (label === 'email'){
        let my_user = ctx.users.find((user) => {
          return user.email === field
        })
        if (!my_user){
            setStatus('Error - Could not find an account matching that e-mail address.');
            setCardColor('danger')
            setTimeout(() => setStatus(''),3000);
            setTimeout(() => setCardColor('warning'),3000);
            return false;
        }
      }
      if (label === 'withdraw'){
        let my_user = ctx.users.find((user) => {
          return user.email === email
        })
        if (field < 0){
            setStatus('Error - Must be a positive amount');
            setCardColor('danger')
            setTimeout(() => setStatus(''),3000);
            setTimeout(() => setCardColor('warning'),3000);
            return false;
        }
        if (my_user.balance < field){
          setStatus('Error - Insufficent funds');
          setCardColor('danger')
          setTimeout(() => setStatus(''),3000);
          setTimeout(() => setCardColor('warning'),3000);
          return false;
      }
      }
      return true;
  }

  function handleCreate(){
    if (!validate(withdraw,     'withdraw'))     return;
    if (!validate(email,     'email'))     return;
    let my_user = ctx.users.find((user) => {
      return user.email === email
    })
    my_user.balance -= parseInt(withdraw) 
    setNewbalance(my_user.balance)
    // ctx.users.push({name,email,password,balance:100});
    setShow(false);
    setCardColor('success')
  }    

  function clearForm(){
    setWithdraw('');
    setEmail('');
    setShow(true);
    setCardColor('warning')
  }

  let disabled = !(email&&withdraw)
  return (
    <ContextCard
      bgcolor={cardColor}
      header="Withdraw Money Here"
      status={status}
      body={show ? (  
              <>
              Enter Amount to Withdraw<br/>
              <input type="number" 
              className="form-control" 
              id="withdraw" 
              placeholder="$0" 
              value={withdraw} 
              min="1" 
              onChange={e => setWithdraw(e.currentTarget.value)} 

              />              
            <br/>

            Confirm your account email<br/>
              <input type='email' 
              className="form-control" 
              id="email" 
              placeholder="enter your email" 
              value={email} 
              onChange={e => setEmail(e.currentTarget.value)} 

              />              
            <br/>

              <button type="submit" className="btn btn-light" disabled={disabled} onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <p>{newBalance}</p>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Additional Withdraw</button>
              </>
            )}
    />
  )
}
