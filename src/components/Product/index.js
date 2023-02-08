import "./index.css";

function Product({ selectedProduct }) {
  const products = {
    bongs: [
      {
        name: "bong 1",
      },
      {
        name: "bong 2",
      },
      {
        name: "bong 3",
      },
      {
        name: "bong 4",
      },
    ],
    gummies: [
      {
        name: "hometown hero",
      },
      {
        name: "sweet senshi",
      },
      {
        name: "gummy 3",
      },
      {
        name: "gummy 4",
      },
    ],
    smokes: [
      {
        name: "link4 product",
      },
      {
        name: "link4 product",
      },
      {
        name: "link4 product",
      },
      {
        name: "link4 product",
      },
    ],
    vapes: [
      {
        name: "link2 product",
      },
      {
        name: "link2 product",
      },
      {
        name: "link2 product",
      },
      {
        name: "link2 product",
      },
    ],
  };

  const currentProduct = products[selectedProduct];
  
  return (
    <>
      <h2>{selectedProduct}</h2>
      <section>
        {currentProduct &&
          currentProduct.map((item, i) => (
            <article key={i} className="product">
              {item.name}
            </article>
          ))}
      </section>
    </>
  );
}

export default Product;
