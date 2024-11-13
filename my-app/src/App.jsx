
import Card from './components/Card'

const App = () => {
  const users=[
    {
      "name": "Krysia",
      "profession": "Vulnerability Assessment Specialist",
      "age": 30,
      "profileImageUrl": "https://via.placeholder.com/150",
      "buttonText": "Add Friend"
    },
    {
      "name": "John Doe",
      "profession": "Software Engineer",
      "age": 28,
      "profileImageUrl": "https://via.placeholder.com/150",
      "buttonText": "Add Friend"
    },
    {
      "name": "Maria Smith",
      "profession": "Data Scientist",
      "age": 32,
      "profileImageUrl": "https://via.placeholder.com/150",
      "buttonText": "Add Friend"
    },
    {
      "name": "Alice Johnson",
      "profession": "Product Manager",
      "age": 29,
      "profileImageUrl": "https://via.placeholder.com/150",
      "buttonText": "Add Friend"
    },
    {
      "name": "James Williams",
      "profession": "UI/UX Designer",
      "age": 27,
      "profileImageUrl": "https://via.placeholder.com/150",
      "buttonText": "Add Friend"
    }
  ]
  
  return (
    <div className='p-10'>
      {users.map(function(elem,idx){
         return <Card key={idx} name={elem.name} age={elem.age} prof={elem.profession} img={elem.profileImageUrl} />
      }
    )}
     
    </div>
    
  )
}

export default App