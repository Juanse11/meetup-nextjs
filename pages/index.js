// This function runs at build time on the build server
export async function getStaticProps() {
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
  return {
    props: {
      products: await res.json()
    }
  }
}

// The page component receives products prop
// from getStaticProps at build time
export default function Home({ products }) {
  return (
    <>
      <h1>Products</h1> 
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  )
}