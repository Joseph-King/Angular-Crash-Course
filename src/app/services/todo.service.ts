import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs';
//import {HttpClient, HttpHeaders } from '@angular/common/http';

import {Todo} from '../models/Todo';

/*const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json';
    })
}*/

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  //todosLimit:string = '?_limit=5';

  //constructor(private http:HttpClient) { }
  constructor() {}

  //Get Todos hard code
  getTodos() {
    return[
      {
        id: 1,
        title: 'Todo one',
        completed: false
      },
      {
        id: 2,
        title: 'Todo two',
        completed: false
      },
      {
        id: 3,
        title: 'Todo three',
        completed: false
      }
    ];
  }

  //Get Todos From Server (Had issue with HTTP import, will figure out at home)
  /*getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + this.todosLimit);
  } */

  /* Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url:string = this.todosUrl + '/' + todo.id;
    return this.http.delete<Todo>(url, httpOptions);
  }*/

  /* Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }

  /* Toggle Completed 
  toggleCompleted(todo:Todo):Observable<any> {
    const url:string = this.todosUrl + '/' + todo.id;
    return this.http.put(url, todo, httpOptions);
  }*/
}
