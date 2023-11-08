import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                subHedding={"From Our Menu"}
                hedding={"Polular Itmes"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <center>
                <Link to="/order">
                    <button className="btn btn-active btn-secondary mt-8 text-center">Order Now</button>
                </Link>

            </center>

        </section>
    );
};

export default PopularMenu;