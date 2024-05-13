import "./Card.css"
export default function Card(props){
return(
    <div id="cards">{props.name}{props.children}</div>
    )
}