import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Todo } from './todo';
import { TodoService} from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todos: Todo[] = []
  form: FormGroup = new FormGroup({
    descricao : new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  constructor(private service : TodoService      
    ) {}

  ngOnInit() {
    this.listarTodos()

  } 
  
  listarTodos(){
    this.service.listar().subscribe(todoList => this.todos = todoList)
  }

  submit(){
    console.log(this.form.value)
    const todo: Todo = { ...this.form.value }
    this.service
      .salvar(todo)
      .subscribe(todo => {
        this.todos.push(todo)
        this.form.reset() 
      })
  } 

  delete(todo: Todo) {
    this.service.deletar(todo.id).subscribe({
      next: (response) => this.listarTodos() 
    })
  }

  concluir(todo: Todo) {
    this.service.concluir(todo.id).subscribe({
      next: (todoAtualizado) => {
        todo.concluido = todoAtualizado.concluido
        todo.dataConcluido = todoAtualizado.dataConcluido
      } 
    })
  }
}
