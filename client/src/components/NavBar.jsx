import {Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <>
            <div style={{display: 'flex', width:'300px', justifyContent: 'space-between'}}>
                <Link to='/home'>Home</Link>
                <Link to='/users'>Users</Link>
            
                <Link to='/weather'>Weather</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        
        
        </>
    )
}


export default NavBar