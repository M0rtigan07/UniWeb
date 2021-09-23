import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EstudianteComponent } from './estudiantes/estudiante..component';
import { FormularioEstudianteComponent } from './estudiantes/formularioEs.component';
import { MatriculaComponent } from './estudiantes/matricula.component';
import { CursoComponent } from './cursos/curso.component';
import { FormularioCursoComponent } from './cursos/Formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EstudianteComponent,
    FormularioEstudianteComponent,
    MatriculaComponent,
    CursoComponent,
    FormularioCursoComponent,


    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'estudiante', component: EstudianteComponent },
      { path: 'curso', component: CursoComponent },
      { path: 'matricula', component: MatriculaComponent },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
