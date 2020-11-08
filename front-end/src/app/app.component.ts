import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
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
    descricao : new FormControl('')
  })

  constructor(private service : TodoService      
    ) {}

  ngOnInit() {
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
}
