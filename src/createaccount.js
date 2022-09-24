import {ContextCard} from "./context";
import {useContext, useState} from "react";
import {UserContext} from './context.js'
export function CreateAccount(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [cardColor, setCardColor] = useState('warning');
  const ctx = useContext(UserContext);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setCardColor('danger')
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (label === 'email'){
        if (!field.includes('@')){
            setStatus('Error - Not a valid e-mail address.');
            setCardColor('danger')
            setTimeout(() => setStatus(''),3000);
            setTimeout(() => setCardColor('warning'),3000);
            return false;
        }
      }
      if (label === 'password'){
        if (field.length <= 8){
            setStatus('Password must contain at least 8 characters.');
            setCardColor('danger')
            setTimeout(() => setStatus(''),3000);
            setTimeout(() => setCardColor('warning'),3000);
            return false;
        }
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
    setCardColor('success')
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setCardColor('warning')
  }

  return (
    <ContextCard
      bgcolor={cardColor}
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}