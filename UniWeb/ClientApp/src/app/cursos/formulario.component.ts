import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ServicioCurso, Curso } from '../Service/Curso.service';
@Component({
  selector: 'app-formularioCur',
  templateUrl: './formulario.component.html',
})
export class FormularioCursoComponent {
  nCurso: Curso = new Curso();

  body: any;
  form: FormGroup;

  constructor(private sCurso: ServicioCurso, public fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
    })
  }

  submitForm() {
      
    this.nCurso.nombre = this.form.get('nombre').value;

    this.sCurso.postCurso(this.nCurso).subscribe(
      (response) => {
        console.log(response);
        this.sCurso.getCursos().subscribe();
      },
      (error) => console.log(error));



  }
}
