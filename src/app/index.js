var React = require('react');
var ReactDOM = require('react-dom');

require('./css/index.css');
//MODULES REQUIRED
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
////////// Create Component \\\\\\\\\\\

var TodoComponent = class Welcome extends React.Component{
  render() {
    return(
      <div>
        <h1>React Props:</h1>
        <h1>Helloooooo TN</h1>
        <p>{this.props.mssg}</p>
        <p>{this.props.cheese.name}, smell {this.props.cheese.smellFactor} & its price is {this.props.cheese.price}</p>
      </div>
    );
  }
}
var myCheese = {name: 'Golden Cheese', smellFactor: 'pong', price:'3.50'};
ReactDOM.render(<TodoComponent mssg="I like Coding" cheese={myCheese} />, document.getElementById('todo-wrapper_old'));
/////////////////// STATE - NET NINJA ////////////////
class TodoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['todo 1', 'todo 2', 'todo 3', 'todo 4'],
      age: 30
    };
  }


  render() {
    var ager = setTimeout(function(){
      this.setState({
        age: 35
      });
    }.bind(this), 5000);
    const todos = this.state.todos;
    const todoArray = todos.map((item, index) =>
      <TodoItem item={item} key={index} onClickDelete={this.onClickDelete.bind(this)} />
      //<li>{item}</li>
    );
    return(
      <div id="todo-list">
        <h1>React State:</h1>
        <h2>AGE: {this.state.age}</h2>
        <p onClick={this.clicked}>The busiest people have the most leisure...</p>
        <ul>{todoArray}</ul>
        <AddItem onAdd={this.onAdd.bind(this)} />
      </div>
    );
  }
  clicked() {
    console.log("You clicked me.");
  }
  onClickDelete(data) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return data !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  onAdd(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
}

// class TodoItem extends React.Component {
//   render() {
//     return(
//       <li>
//         <div className="todo-item">
//           <span className="item-name">{this.props.item}</span>
//           <span className="item-delete" onClick={this.handleDelete.bind(this)}>X</span>
//         </div>
//       </li>
//     );
//   }
//   handleDelete() {
//     this.props.onClickDelete(this.props.item);
//   }
// }
ReactDOM.render(<TodoState />, document.getElementById('todo-wrapper'));
/*
class TodoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['todo 1', 'todo 2', 'todo 3'],
      age: 30
    };
  }

  render() {
    var ager = setTimeout(function(){
      this.setState({
        age: 35
      });
    }.bind(this), 5000);
    return(
      <div id="todo-list">
        <h1>React State:</h1>
        <h2>AGE: {this.state.age}</h2>
        <p>The busiest people have the most leisure...</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<TodoState />, document.getElementById('todo-state'));
*/
/////////////////////////////////////////////////////*
/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('todo-wrapper')
  );
}

setInterval(tick, 1000);*/

/////////////////////////////////////////////////////
class Navbar extends React.Component{
  render() {
    return(
      <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    );
  }
}

///// Put Component Into HTML  \\\\\


ReactDOM.render(<Navbar />, document.getElementById('nav-react'));
