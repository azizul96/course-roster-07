

const Card = ({card, handleSelectCard, }) => {
    const {image, title, description, price, credit} = card
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl p-2 rou ">
                <figure className=" rounded-none"><img className=" w-full h-44" src={image} alt="image" /></figure>
                <div className="card-body p-1">
                    <h2 className=" items-start font-semibold text-base mt-3 ">{title}</h2>
                    <p className=" text-sm mt-3 mb-2">{description}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="dollar-sign1.svg" alt="" />
                            <p>Price : {price}</p>
                        </div>
                        <div className="flex gap-2">
                            <img src="Frame.svg" alt="" />
                            <p>Credit : {credit}hr</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center ">
                        <button onClick={()=> handleSelectCard(card)} className="btn btn-sm btn-error border-none text-white w-full bg-[#2F80ED] ">Select</button>
                    </div>
                </div>               
            </div>
        </div>
    );
};

export default Card;