import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class Curso {

    nombre: string;
  
}

@Injectable()
export class ServicioCurso {

  private cursosSource = new BehaviorSubject(new Object());
  cursos = this.cursosSource.asObservable();

  constructor(private http: HttpClient) { }

  getUnCurso(nombre: string): Observable<Curso> {
    return this.http.get<Curso>('https://localhost/api/Curso' + nombre)
  }

  /**Para estudiar */
  getCursos(): Observable<any> {
    let cursosList = this.http.get<Curso[]>('https://localhost/api/Curso').pipe(map(result => { this.cursosSource.next(result); }));

    return cursosList;
  }

  getCursos2(): Observable<Curso[]> {
    return this.http.get<Curso[]>('https://localhost/api/Curso');
  }
  /**Fin para estudiar*/

  postCurso(body: Curso): Observable<Curso> {

    return this.http.post<Curso>('https://localhost/api/Curso', body);
  }



}



