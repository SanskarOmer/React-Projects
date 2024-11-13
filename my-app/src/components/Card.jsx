
const Card = (elem) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full"
        src={elem.img}
        alt="Profile"
      />
    <h2 className="text-2xl font-semibold inline-block text-gray-800">{elem.name}</h2>
    <p className="text-gray-600">{elem.prof}</p>
    <p className="text-gray-600">Age: {elem.age}</p>
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
      Add Friend
    </button>
  </div>
  );
    
  
}

export default Card