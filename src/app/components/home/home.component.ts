import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public não é necessariio
  public nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção `;
  idProduto: number = 123;
  precoProduto: number = 1.25;
  promocao: boolean = true;


  constructor() {
    //this.anunciio = 'O' + this.nomeProduto + 'está em promoção';
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('id ', this.idProduto);
    console.log('preço ', this.precoProduto);
    console.log('promoção ', this.promocao);
    var variavel1;
    let variavel2;
    const variavel3: number = 10;
    //var idade = 15;
    //console.log('Minha idade é', idade);

    //const idade3 = 30;
    //console.log('Minha idade é', idade3);

    // função
    //function imprimeIdade(){
    //let idade2 = 20;
    //console.log('Minha idade é', idade2);
    //}

    //imprimeIdade();

    //function imprimeIdade2(){
    //var idade2 = 25;
    //console.log('Minha idade é', idade2);
    //}

    //imprimeIdade2();

   /* function for2() {
      for(var x = 30 ; x <= 40; x++){
      console.log('Minha idade é dentro: ', x);
      }
      console.log('Minha idade é fora: ', x);
    }

    for2();
*/
/*let x = 12;
function for4() {
  for(let x = 30 ; x <= 40; x++)  {
  console.log('Minha idade é dentro: ', x);
  }
  console.log('Minha idade é fora: ', x);
}

for4();
*/

// Exercicio 1 - Não apresenta
/*var variavel = 0;
var variavel = 10;
console.log('variavel', variavel);
function funcao(){
  var outra_variavel = 20;
  var outra_variavel = 30;
  console.log('outra variavel: ', outra_variavel);
}
funcao();
*/

//Exercicio 2 - Apresenta erro
/*let variavel = 0;
let variavel = 10;
console.log('variavel', variavel);
function funcao(){
  let outra_variavel = 20;
  let outra_variavel = 30;
  console.log('outra variavel: ', outra_variavel);
}
funcao();
*/

// Exercicio 3 
  }
  ngOnInit(): void {
  }

}
