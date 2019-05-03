import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';

/* importar os NgModule */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,MatAutocompleteModule,MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { ServicoService } from './servico.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,    
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule, 
    MatInputModule],
  declarations: [ AppComponent, TabelaComponent, FormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    ServicoService
  ]
})
export class AppModule { }
