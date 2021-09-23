import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ServicioMatricula, Matricula } from '../Service/matricula.service';


@Component({
  selector: 'matricula',
  templateUrl: './matricula.component.html',
  providers: [ServicioMatricula]
})
export class MatriculaComponent {
  body: any;
  form: FormGroup;
  matricula: Matricula = new Matricula();
  aMatriculas: Matricula[] = [new Matricula()];

  constructor(public fb: FormBuilder, private matriculaService: ServicioMatricula) {
    this.form = this.fb.group({
      curso: [''],
      alumno:['']
    })
  }

  ngOnInit() {
    this.matriculaService.getMatriculas().subscribe(
      data => {
        if (data)
          this.matricula = data;
      });


  }


  submitForm() {
    this.matricula.CursoID = this.form.get('CursoID').value;
    this.matricula.EstudianteID = this.form.get('EstudianteID').value;

    this.matriculaService.postMatricula(this.matricula).subscribe(
      (response) => {
        console.log(response);
        this.matriculaService.getMatriculas().subscribe();
      },
      (error) => console.log(error));

    this.form.reset();
    alert("Datos Guardados");
  }

}
