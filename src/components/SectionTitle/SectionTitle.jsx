
const SectionTitle = ({ hedding, subHedding }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-4">
            <p className="text-orange-500 mb-2">--- {subHedding} ---</p>
            <h3 className="text-2xl semibold border-y-2 font-medium py-2">{hedding}</h3>
        </div>
    );
};

export default SectionTitle;