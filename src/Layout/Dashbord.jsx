import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashbord = () => {
    const [cart] = useCart()

    //TODO
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    {
                        isAdmin ? <>

                            <li>
                                <Link> <FaHome></FaHome> Admin Home</Link></li>

                            <li>
                                <Link> <FaUtensilSpoon></FaUtensilSpoon> Add Itmes</Link>
                            </li>
                            <li>
                                <Link> <FaWallet></FaWallet> Manage Itmes</Link>
                            </li>
                            <li>
                                <Link> <FaBook></FaBook> Manage Booking</Link>
                            </li>
                            <li>
                                <Link to="/dashbord/allusers"> <FaUser></FaUser> Manage Users</Link>
                            </li>
                            <div className="divider">OR</div>

                            <li>
                                <Link to='/'> <FaHome></FaHome> Home</Link>
                            </li>
                            <li>
                                <Link to='/order'>  Our Menu</Link>
                            </li>
                        </> : <>

                            <li>
                                <Link> <FaHome></FaHome> User Home</Link></li>
                            <li>
                                <Link to="/dashbord/myCart"> <FaShoppingCart></FaShoppingCart>My Cart <span className="badge badge-secondary">+ {cart.length || 0}</span> </Link>
                            </li>
                            <li>
                                <Link> <FaCalendarAlt></FaCalendarAlt> Resevations</Link>
                            </li>
                            <li>
                                <Link> <FaWallet></FaWallet> Payment History</Link>
                            </li>
                            <div className="divider">OR</div>

                            <li>
                                <Link to='/'> <FaHome></FaHome> Home</Link>
                            </li>
                            <li>
                                <Link to='/order'>  Our Menu</Link>
                            </li>

                        </>
                    }



                </ul>

            </div>
        </div >
    );
};

export default Dashbord;