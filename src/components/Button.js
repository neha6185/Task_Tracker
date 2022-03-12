import PropTypes from 'prop-types';

const Button =(props) =>{


    return(<button onClick={props.onClick} style={{backgroundColor:props.color}} className="btn">{props.text}</button>);
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.protoTypes = {
    text :PropTypes.string,
    color:PropTypes.string
}
export default Button;