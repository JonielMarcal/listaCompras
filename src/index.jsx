import { useRef, useState } from "react";
import { AddButton } from "./styled";
import { v4 } from "uuid";

function Home() {
  const [product, setProduct] = useState([]);
  const input = useRef();
  const addProduct = () => {
    setProduct([
      {
        id: v4(),
        nome: input.current.value,
      },
      ...product,
    ]);
    input.current.value = "";
  };
  const deleteProduct = (id) => {
    setProduct(product.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Digite um produto..." ref={input} />
      <AddButton onClick={addProduct}>Adicionar</AddButton>

      {product.map((item) => (
        <div key={item.id}>
          <p>{item.nome}</p>
          <button onClick={() => deleteProduct(item.id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
