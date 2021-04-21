const Product = (props) => {
  const { addToCart, product } = props;

  return (
    <div style={{ border: '1px solid tomato' }}>
      <h1>{product.name}</h1>
      <button onClick={() => addToCart(product.id, product.name)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
