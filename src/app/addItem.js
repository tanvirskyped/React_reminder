var React = require('react');

require('./css/addItem.css');

class AddItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hit me" />
      </form>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.newItem.value);
    this.props.onAdd(this.refs.newItem.value);
  }
}

module.exports = AddItem;
