import {ContextCard} from "./context";

export function Home(){
  return (
    <ContextCard
      bgcolor="warning"
      txtcolor="black"
      header="LB Bank"
      title="Welcome customer"
      text="Thanks for banking with us. You can move around using the navigation bar."
      body={(<div className="hover-rotate">
        <img src="/bank.png" className="img-fluid" alt="Responsive image"/>
      </div>)}
    />    
  );  
}
