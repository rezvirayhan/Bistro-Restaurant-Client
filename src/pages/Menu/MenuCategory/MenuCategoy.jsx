import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategoy = ({ itmes, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover Cover img={img} title={title}></Cover>}

            <div className="grid md:grid-cols-2 gap-12 mt-16">
                {
                    itmes.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to='/order'>
                <button className="btn btn-active btn-primary mt-4">Order Now</button>
            </Link>
        </div >
    );
};

export default MenuCategoy;