import feautradItems from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featurad.css';
const Featurad = () => {
    return (
        <div className='feautredItme bg-fixed text-black mt-8 my-8'>
            <SectionTitle
                subHedding={"Check It Out"}
                hedding={"Featurad Itmes"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center	py-20 px-36 bg-slate-600 bg-opacity-80'>
                <div>
                    <img src={feautradItems} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 10, 2023</p>
                    <p className='mt-4'>When Can I Get Some....</p>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit aliquid ad pariatur odit quae quod ducimus eum mollitia sed accusamus, iusto quis architecto et!</p>
                    <button className="btn btn-active btn-secondary mt-8">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featurad;