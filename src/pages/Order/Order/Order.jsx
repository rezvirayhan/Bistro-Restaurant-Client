import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from "../../../assets/shop/banner2.jpg";
import useMenu from '../../../hooks/useMenu';
import Cover from "../../Shared/Cover/Cover";
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setTabindex] = useState(0)
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Cover img={orderCover} title="Order Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList className='tabs tabs-boxed'>
                    <Tab className="tab">Salad</Tab>
                    <Tab className="tab">Pizza</Tab>
                    <Tab className="tab">Soup</Tab>
                    <Tab className="tab">Dessert</Tab>
                    <Tab className="tab">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab itmes={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab itmes={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab itmes={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab itmes={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab itmes={offered}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab itmes={drinks}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;