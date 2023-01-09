import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();


    const handleLogout = () => {
        navigate('/login', {
            // Replaces the hitoric of the user, so he cant go back to the previous route if he clicks back
            replace: true,

        })
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-warning p-2 mb-4" >
            
            <Link 
                className="navbar-brand bg-danger p-2 text-light rounded" 
                to="/"
            >
                HeroApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={( {isActive} ) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={( {isActive} ) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={( {isActive} ) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    <NavLink 
                        className={( {isActive} ) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/hero/marvel-spider"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className='nav-item nav-link text-primary'>
                        Robb
                    </span>

                    <button
                    className='nav-item nav-link btn'
                    onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}