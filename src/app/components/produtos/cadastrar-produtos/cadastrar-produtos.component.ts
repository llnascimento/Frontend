import { ProdutosService } from 'src/app/services/produtos.service';
import { IProduto } from 'src/app/model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  produto: IProduto = {
    nome: '',
    validade: new Date(), 
    precoProduto: 0
  };

  constructor(private produtosService: ProdutosService, private router: Router ) { }

  ngOnInit(): void {  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => { this.produto = retorno; 
      this.produtosService.exibirMensagem('Sistema',
      '${this.produto.nome} foi cadastrado com sucesso. Id: ${this.produto.id}',
       'toast-sucess' 
      );
      this.router.navigate(['/produtos']);
    });
   

  }


}
