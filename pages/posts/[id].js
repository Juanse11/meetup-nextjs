export async function getStaticPaths() {
  const res = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  const products = await res.json();
  const paths = products.map(product => ({
    params: { id: `${product.id}` }
  }));

  // fallback: false means pages that don’t have the
  // correct id will 404.
  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://my-json-server.typicode.com/typicode/demo/posts/${params.id}`
  );
  const product = await res.json();
  return {
    props: {
      product
    }
  };
}

export default function Product({ product }) {
  // Render product
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
