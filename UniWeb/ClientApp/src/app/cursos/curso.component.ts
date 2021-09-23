import { Component } from '@angular/core';
import { Curso, ServicioCurso} from '../Service/curso.service';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  providers: [ServicioCurso],
})
export class CursoComponent {
  curso: Curso = new Curso();
  aCursos: Curso[] = [new Curso()];


  constructor(private sCurso: ServicioCurso) { }

  ngOnInit() {

    this.sCurso.getCursos().subscribe(data => {
      if (data)
        this.curso = data;
    });

   

    this.sCurso.getCursos().subscribe();

    this.sCurso.cursos.subscribe((data: Curso[]) => {
      if (data)
        this.aCursos = data;
    });
  }
}
