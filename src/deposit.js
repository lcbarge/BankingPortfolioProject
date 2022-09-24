import {ContextCard} from "./context";
import {useContext, useState} from "react";
import {UserContext} from './context.js'
export function Deposit(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [deposit, setDeposit]         = useState('');
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
      return true;
  }

  function handleCreate(){
    if (!validate(deposit,     'deposit'))     return;
    if (!validate(email,     'email'))     return;
    let my_user = ctx.users.find((user) => {
      return user.email === email
    })
    my_user.balance += parseInt(deposit) 
    setNewbalance(my_user.balance)
    // ctx.users.push({name,email,password,balance:100});
    setShow(false);
    setCardColor('success')
  }    

  function clearForm(){
    setDeposit('');
    setEmail('');
    setShow(true);
    setCardColor('warning')
  }

  return (
    <ContextCard
      bgcolor={cardColor}
      header="Deposit Money Here"
      status={status}
      body={show ? (  
              <>
              Enter Amount to Deposit<br/>
              <input type="number" 
              className="form-control" 
              id="deposit" 
              placeholder="$0" 
              value={deposit} 
              min="1" 
              onChange={e => setDeposit(e.currentTarget.value)} 

              />              
            <br/>

            Confirm your account email<br/>
              <input type='email' 
              className="form-control" 
              id="email" 
              placeholder="Re-enter your email" 
              value={email} 
              onChange={e => setEmail(e.currentTarget.value)} 

              />              
            <br/>

              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <p>{newBalance}</p>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Additional Deposit</button>
              </>
            )}
    />
  )
}