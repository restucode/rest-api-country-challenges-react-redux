import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'


const Navbar = () => {

 

 return (
  <nav className="nav">
   <div className="navbar-area">
    <div className="brand">
     <Link to='/'>Where in the World ?</Link>
    </div>
    <DarkMode />
   </div>
  </nav>
 )
}

export default Navbar