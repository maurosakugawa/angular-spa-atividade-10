import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Usuario, cidades } from '../usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private cidades: string[]=cidades;
  /* lista de todas as regras a serem cumpridas pelos campos do form antes de ser liberado para submit */
  private controle: FormGroup = new FormGroup({
    nome: new FormControl('',[Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$")]),
    cidade: new FormControl('',[])

  });
  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.cidades = cidades;
    console.log(cidades);

    this.controle = new FormGroup({
      nome: new FormControl('', [Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$")]),
      cidade: new FormControl('', []) 
    });
}

  salvar(): boolean {
    /* copia do formulário para o objeto Aluno */
    let usuario: Usuario = new Usuario();
    usuario.nome = this.controle.value.nome;
    usuario.cidade = this.controle.value.cidade;
    this.servico.add(usuario);
    this.controle.reset();
    return false;
  }
}