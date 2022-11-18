import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

listaProdutos: IProduto[] = [];
  // classe é o nosso tipo(modelo, definição de caractresitica)
  // instancia é criar fisicamente
  // for angular o item herda uma condição
  // usar o for it na lsita
  // interpolação pegar uma variavel no type e jogar no html

//

  constructor(private ProdutosService: ProdutosService) {
/*
    for(let item of this.listaStrings){
      console.log(item);
    }

    for(const item of this.listaNumeros){
      console.log(item);

    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);*/

  }
  
  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void{
    this.ProdutosService.buscarTodos().subscribe(retorno=> {
      this.listaProdutos = retorno;
    })
  }
}

