
const Card = (elem) => {
  return (
    <div className=" bg-white  m-5 items-center justify-between rounded-lg shadow-lg p-6 flex  w-full">
      <img
        className="w-24 h-24  rounded-full"
        src={elem.img}
        alt=""
      />
    <h2 className="text-2xl font-semibold inline-block text-gray-800">{elem.name}</h2>
   
  </div>
  );
    
  
}

export default Card