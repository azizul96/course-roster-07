import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Home = () => {
    const [allCard, setAllCard] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);

    const [remainingHour, setRemainingHour] = useState(20)
    const [totalHour, setTotalHour] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect( ()=>{
        fetch("course.json")
        .then(res => res.json())
        .then(data => setAllCard(data))
    }, [])
    
    const handleSelectCard = (card) =>{
        const isExist = selectedCard.find((cardName) => cardName.id == card.id)
        let hour = card.credit
        let price = card.price

        if(isExist){
            // eslint-disable-next-line no-undef
            return sweetAlert("Oops...", "Already Added", );
        }
        else{
            selectedCard.forEach((cardPrice) => {
                price = cardPrice.price + price
            })
            selectedCard.forEach((cardHour) => {
                hour = cardHour.credit + hour
            })
            const hourRemaining = 20 - hour;

            if(hour > 20){
                // eslint-disable-next-line no-undef
                return sweetAlert("Your limit is 20 hr")
            }
            setTotalPrice(price)
            setTotalHour(hour)
            setRemainingHour(hourRemaining)
            const newSelectCard = [...selectedCard, card];
            setSelectedCard(newSelectCard)
        }

 
    }

    return (
        
        <div className="pt-5">
            <h1 className=" bg-orange-300 rounded-lg text-4xl text-center font-bold py-5 mb-5">Course Registration</h1>

            <div className="lg:flex gap-10">
                <div className=" lg:w-3/4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
                    {
                        allCard.map((card, idx) => <Card key={idx} card={card} handleSelectCard={handleSelectCard} ></Card>)
                    }
                </div>
                <div className="  lg:w-1/4">
                    <Cart selectedCard={selectedCard} remainingHour={remainingHour} totalHour={totalHour} totalPrice={totalPrice}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;