import './inputComponent.css';
const Input = ({ tipo , placeholder }) =>{
return(
    <input className='inputComponent' type={tipo} placeholder={placeholder}></input>
);
} 
export default Input;