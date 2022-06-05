import { useState } from 'react';
import './App.css';

// function WelcomeMessage(){
//   return <h2>My first code</h2>;
// }

// function App() {
//   return (
//     <>
//     <h1> Hello</h1>
//     <WelcomeMessage />
//     </>
//   );
// }


function App(){

  const [netValue, setNetValue] = useState(20000);
  const [itemCount, setItemCount] = useState(0);
  const [cartValue, setCartVAlue] = useState(0);

  const buyCoffee = () => {
    setItemCount(itemCount +1);
    setNetValue(netValue - 25);
    setCartVAlue(cartValue+25);
  }

  const buyBike = () => {
    setItemCount(itemCount +1);
    setNetValue(netValue - 67);
    setCartVAlue(cartValue+67);
  }

  const buyMobile = () => {
    setItemCount(itemCount +1);
    setNetValue(netValue - 50);
    setCartVAlue(cartValue+50);
  }

  const buyBook = () => {
    setItemCount(itemCount +1);
    setNetValue(netValue - 40);
    setCartVAlue(cartValue+40);
  }

  
  
return ( 
   <>

  <img alt = " " src = {require('./ambani.gif')} width="100px" height="100px" className='img1'/>

  <h1 style={{textAlign: "center"}}>Mai bhi Ambani</h1>
  <h2 style={{textAlign: "center"}}>Balance Remaining: ₹{netValue}</h2>

<div className='myDiv'>
    <h2>Coffee</h2>
    <img alt = "" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cup-o-cofee-no-spoon.svg/256px-Cup-o-cofee-no-spoon.svg.png" width='200px' height='200px'></img>
    <h4> Price: ₹25</h4><br></br>
    <button onClick={buyCoffee}>Buy</button> 
</div>

<div className='myDiv'>
    <h2>IPhone</h2>
    <img alt = "" src="https://freepngimg.com/thumb/smartphone/21604-1-smartphone-transparent-background.png" width='200px' height='200px'></img>
    <h4> Price: ₹50</h4><br></br>
    <button onClick={buyMobile}>Buy</button> 
</div>

<div className='myDiv'>
    <h2>Bicycle</h2>
    <img alt = "" src="https://i.pinimg.com/originals/9d/5f/29/9d5f29749894957753a9edd9e2358d8b.png" width='200px' height='200px'></img>
    <h4> Price: ₹67</h4><br></br>
    <button onClick={buyBike}>Buy</button> 
</div>

<div className='myDiv'>
    <h2>Books</h2>
    <img alt = "" src="https://www.pngkey.com/png/full/75-752385_book-clipart-transparent-background-books-transparent-background.png" width='200px' height='200px'></img>
    <h4> Price: ₹40</h4><br></br>
    <button onClick={buyBook}>Buy</button> 
</div>


<div className='center'>
    <div className='myDiv1'>
    <h5>Total Item</h5>
    <input type="text" value={itemCount}></input>
    </div>

    <div className='myDiv1'>
    <h5>Cart Value</h5>
    <input type="text" value={cartValue}></input> 
    </div>
</div>

  </>
  );

}

export default App;

<div >
    <h1> I am centered </h1>
</div>