"use server";
import produtos from "../constants/produtos";
import { esperar } from "./utils";

export default async function ObterProdutosID(id: number) {
  await esperar(3000);
  const produtoEncontrado = produtos.find((produto) => produto.id === id);
  return produtoEncontrado;
}
