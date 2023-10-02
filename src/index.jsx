import { useRef, useState } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product, TrashButton } from "./styled";

function Home() {
  const [product, setProduct] = useState([]);
  const input = useRef();
  const addProduct = () => {
    if (input.current.value.trim() === "") {
      alert("Favor, digite um produto!");
    } else {
      setProduct([
        {
          id: v4(),
          nome: input.current.value,
        },
        ...product,
      ]);
      input.current.value = "";
    }
  };
  const deleteProduct = (id) => {
    setProduct(product.filter((product) => product.id !== id));
  };

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Digite um produto..." ref={input} />
      <AddButton onClick={addProduct}>Adicionar</AddButton>

      {product.map((item) => (
        <Product key={item.id}>
          <p>{item.nome}</p>
          <TrashButton onClick={() => deleteProduct(item.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  );
}

export default Home;
