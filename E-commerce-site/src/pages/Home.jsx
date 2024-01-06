import { Products } from "../products"


function Home({user}) {
  
  return (
    <>
    <h1>HomePage</h1>
    <Products user={user}/>
    
    </>
  )
}

export default Home