
const Cart = () => {

   const addToCard = ()=>{
        let item=localStorage.getItem("user");
        console.log(item);

   }
  return (
    <div className="login">
      <h2>Shopping Cart</h2>
      <h1>Your All Item </h1>
       <button onClick={addToCard}>Click</button>
    </div>
  );
};

export default Cart;
