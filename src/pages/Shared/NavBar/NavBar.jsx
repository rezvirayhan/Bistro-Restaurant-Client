import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const navOptions = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/menu'>Our Menu</Link>
        </li>
        <li>
            <Link to='/order'>Order</Link>
        </li>
        <li>
            <Link to='/dashbord/myCart'>
                <button className="btn btn-sm">
                    <FaCartPlus></FaCartPlus>
                    <div className="badge badge-secondary">+ {cart.length || 0}</div>
                </button>
            </Link>
        </li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white">
                {/* max-w-screen-xl */}

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistor-Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn btn-active btn-primary">Log-Out</button>
                            </> :
                            <>
                                <button className="btn btn-active btn-primary">
                                    <Link to='/login'>Login</Link>
                                </button>

                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;