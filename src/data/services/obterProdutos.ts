"use server"; //esse código mostra que vai rodar do lado do servidor

import produtos from "../constants/produtos";
import { esperar } from "./utils";

//Usando una server action tem que ser uma função assincrona
export default async function obterProdutos() {
  console.log("obterTodosProdutos chamado");
  await esperar(3000);
  console.log("Retornando produtos:", produtos);
  return produtos;
}
