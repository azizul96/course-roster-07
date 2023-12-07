

const Cart = ({selectedCard, remainingHour, totalHour, totalPrice}) => {
    
    return (
        <div className="flex justify-center pb-5">
            <div className="bg-base-100 p-5 rounded-lg shadow-xl">
                <div className="">
                    <h1 className=" text-lg font-bold mt-5 mb-3 text-[#2F80ED]">Credit Hour Remaining {remainingHour} hr</h1>
                    
                </div>
                <hr />

                <h1 className="mt-3 font-bold text-lg mb-5 ">Course Name</h1>
                <div className="mb-5 space-y-2">
                    {
                    selectedCard.map((card,idx)=> <li key={idx} className="list-decimal "> {card.title}</li>) 
                    }
                </div>
                <hr />
                <div className="mt-5 mb-5">
                    <h1 className=" font-semibold text-base">Total Credit Hour : {totalHour}</h1>
                </div>
                <hr />
                <div className="mt-5 mb-5">
                    <h1 className=" font-semibold text-base">Total Price : ${totalPrice}</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;