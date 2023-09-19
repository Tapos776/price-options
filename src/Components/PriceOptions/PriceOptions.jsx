import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
    
        const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio and strength training equipment",
              "Unlimited access during regular gym hours",
              "Locker room and shower facilities",
              "Free fitness assessment upon sign-up"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "All Basic Membership features",
              "Access to group fitness classes (e.g., yoga, spin, HIIT)",
              "Personalized workout plans",
              "Nutritional consultation",
              "Priority booking for classes"
            ]
          },
          {
            "id": 3,
            "name": "Elite Membership",
            "price": 79.99,
            "features": [
              "All Premium Membership features",
              "Access to exclusive gym lounge area",
              "Towel service",
              "Guest passes (bring a friend for free once a month)",
              "Discounts on personal training sessions"
            ]
          }
        ]
      
      
    return (
        <div className="">
            <h2 className="text-5xl text-center my-10 font-bold text-yellow-500">Best Prices in Town </h2>
            <div className="grid md:grid-cols-3 gap-5 container mx-auto ">
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;