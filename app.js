// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemClick () {
    this.setState({
      done: !this.state.done
    })
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}

var GroceryList = (props) => (
  // this is where we give groceryList an click function
  // var onListItemClick = (event) => {
  //   this.state({
  //     done: !this.state.done
  //   });
  // }
  //we always return the JSX in () asign <li>'s on click do this

    <ul>
      {/* <li onClick={onListItemClick}>{props.items[0]}</li>
      <li onClick={onListItemClick}>{props.items[1]}</li>
      <li onClick={onListItemClick}>{props.items[2]}</li>
      <li onClick={onListItemClick}>{props.items[3]}</li> */}
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );
//this is a way to break up the Grocery list into smaller components
// var Juice = () => (
//   <li> Juice </li>
// );

// var Mango = () => (
//   <li> Mango </li>
// );
// here we can pass in <GroceryList/ > or <Juice /> <Mango /> for the same
var App = () => (
  <div>
    <h2>My Shopping List</h2>
      <GroceryList items={['Beer', 'Pizza', 'Kale', 'Fruit']}/>
  </div>
);
// if you are using getElementById() you use a string without the #
// when adding props
ReactDOM.render(<App />, document.getElementById('app'))