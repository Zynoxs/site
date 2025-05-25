import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro.component.html'
})
export class CadastroProdutoComponent {
  produto = {
    nome: '',
    preco: 0,
    imagem: '',
    descricao: ''
  };

  constructor(private produtoService: ProdutoService) {}

  onSubmit() {
    this.produtoService.cadastrarProduto(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.produto = { nome: '', preco: 0, imagem: '', descricao: '' };
    });
  }
}
