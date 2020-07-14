class App extends React.Component {
  state = {
    content: []
  }

  updateItem = (event) => {
    event.preventDefalut();
    const id = event.target.getAttribute('id');
    axios.put(
      '/kelc/' + id,
      {
        name: this.state.updateItemName,
        image: this.state.updateItemImage,
        description: this.state.updateItemDesc,
      }
    ).then(
      (response) => {
        this.setState({
          content: response.data
        })
      }
    )
  }

  componentDidMount = () => {
    axios.get('/kelc').then(
      (response) => {
        this.setState({
          content: response.data
        })
      }
    )
  }

  createItem = (event) => {
    event.preventDefault();
    axios.post(
      '/kelc',
      {
        name: this.state.newItemName,
        image: this.state.newItemImage,
        description: this.state.newItemDesc,
      }
    ).then(
      (response) => {
        this.setState({
          content: response.data
        })
      }
    )
  }

  changeNewItemDesc = (event) => {
    this.setState({
      newItemDesc: event.target.value
    })
  }

  changeNewItemImage = (event) => {
    this.setState({
      newItemImage: event.target.value
    })
  }

  changeNewItemName = (event) => {
    this.setState({
      newItemName: event.target.value
    })
  }

  render = () => {
    return <div>
      <h1>kelc moore beauty</h1>
    </div>
  }

}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
