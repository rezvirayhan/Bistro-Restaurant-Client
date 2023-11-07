import { Helmet } from 'react-helmet-async';
import menuImages from '../../../assets/menu/banner3.jpg';
import dessertImages from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImages from '../../../assets/menu/pizza-bg.jpg';
import saladImages from '../../../assets/menu/salad-bg.jpg';
import soupImages from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategoy from '../MenuCategory/MenuCategoy';
const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <div>
                <Helmet>
                    <title>Bistro | Menu</title>
                </Helmet>
            </div>
            <div>
                <Cover img={menuImages} title="Our Menu"></Cover>
                <SectionTitle subHedding={"Don't Miss"} hedding={"Todays Offered"}></SectionTitle>
                <MenuCategoy itmes={offered}></MenuCategoy>
                <MenuCategoy itmes={desserts} title="Dessert" img={dessertImages}></MenuCategoy>
                <MenuCategoy itmes={pizza} title="Pizza" img={pizzaImages}></MenuCategoy>
                <MenuCategoy itmes={salad} title="Salad" img={saladImages}></MenuCategoy>
                <MenuCategoy itmes={soup} title="Soup" img={soupImages}></MenuCategoy>
                <MenuCategoy itmes={drinks} title="Drinks" img={soupImages}></MenuCategoy>

            </div>

        </div>
    );
};

export default Menu;