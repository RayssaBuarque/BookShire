import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  @Input() textoPadrao:string = 'Pesquise um livro...'
  @Input() acesso:string = ''

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  rotaPesquisa(pesquisaTexto:string):void{
    //Ao pesquisar alguma coisa, o Router redireciona à tela de pesquisa
    if(this.acesso == 'anunciar'){
      this.router.navigate([`../pesquisa/${this.acesso}/${pesquisaTexto}`]);
    }
    else{
      this.router.navigate([`../pesquisa/${pesquisaTexto}`]);
    }
  }

}
