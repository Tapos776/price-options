import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price ,features} = option;
    return (
        <div className="bg-yellow-600 p-8 rounded-xl text-white flex flex-col">
            <h2>
                <span className="text-6xl font-bold ">{price}</span>
                <span className="text-2xl ">/mon</span>
            </h2>
            <h4  className="text-4xl ">{name}</h4>
            {
                features.map((features ,indx)=> <Feature key={indx} features={features}></Feature>)
            }
               <div>
                <button className=" w-full p-3 bg-yellow-500 rounded-2xl text-xl font-bold my-5 hover:bg-[#FFCA17]"> Sales</button>
            </div>
        </div>
    );
};

export default PriceOption;