import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro']
  listaNumeros: number[] = [15, 15.18, 100];
  // classe é o nosso tipo(modelo, definição de caractresitica)
  // instancia é criar fisicamente
  // for angular o item herda uma condição
  // usar o for it na lsita
  // interpolação pegar uma variavel no type e jogar no html


  objetoModelo={
    nome:'Michael',
    idade: 35,
    altura: 1.75,
    graduado: true
  };

  listasProdutos: any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2, promocao: true},
    {id: 3 ,nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2021-12-31'},
    {id: 4 ,nome: 'Curso de C#', precoProduto: 100, validade: '2021-12-31', promocao: true},
  ];

  constructor() {
    for(let item of this.listaStrings){
      console.log(item);
    }

    for(const item of this.listaNumeros){
      console.log(item);

    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  }

  ngOnInit(): void {
  }

}
