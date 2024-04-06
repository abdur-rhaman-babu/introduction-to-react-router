import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div style={{display:'flex', alignItems:'center', gap:'1rem',}}>
            <Link to="/home">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/contacts">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/users">User</Link>
        </div>
    );
};

export default Header;