

const Card = ({ name, price, stock, brand}) => {
    
    return (
        
        <div className="border-2 flex flex-col border-gray-200 p-4 m-4 rounded-md box-border shadow w-full md:w-1/4 max-h-full">
            <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>
            <h3> Brand : {brand}</h3>
            <h3>Stock : {stock}</h3>
            <h3 className="text-xl"> Price: {price}</h3>
        </div>
    )

}

export default Card;