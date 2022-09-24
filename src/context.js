import {createContext} from "react";
import {Card} from "react-bootstrap";

export const UserContext = createContext(null);

export function CardOld(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

export function ContextCard(props){
    return (
      <Card bg={props.bgcolor} text={props.txtcolor} style={{ width: '18rem' }}>
      <Card.Header>{props.header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </Card.Text>
      </Card.Body>
    </Card>
    );
  }