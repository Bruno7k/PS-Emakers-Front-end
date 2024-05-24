import './links.css';
import { Link } from 'react-router-dom';
const LinkComponent = ({ rota, nome }) =>{
return(
    <Link className='links' to={rota}>{nome}</Link>
);
}
export default LinkComponent;