
const Cart = () => {

   const addToCard = ()=>{
        let item=localStorage.getItem("user");
        console.log(item);
        
   }
  return (
    <div className="login">
      <h2>Shopping Cart</h2>
       <button onClick={addToCard}>Card</button>
    </div>
  );
};

export default Cart;
