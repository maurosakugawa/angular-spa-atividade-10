import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { MatTableDataSource } from '@angular/material';
@Injectable()
export class ServicoService {
  private dataSource: MatTableDataSource<Usuario>;
  public lista: Usuario[] = [];
  constructor() {
    this.refresh();
  }

  add(usuario: Usuario): void {
    this.lista.push(usuario);
    this.refresh();
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource<Usuario>(this.lista);
  }
}