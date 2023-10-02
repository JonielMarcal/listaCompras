import styled from "styled-components";

export const Container = styled.div`
  background-color: #3df599;
  padding: 20px;
  border-radius: 10px;

  h1 {
    color: black;
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }
`;
export const AddButton = styled.button`
  background: #02d874;
  color: black;
  height: 25px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #fff;
  margin-top: 15px;
  padding: 0 10px;
  p {
    text-transform: capitalize;
    font-weight: bold;
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
