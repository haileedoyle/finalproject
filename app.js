class App extends React.Component {
  state = {
    styles: []
  }

  updateStyle = (event) => {
    event.preventDefalut();
    const id = event.target.getAttribute('id');
    axios.put(
      '/kelc/' + id,
      {
        name: this.state.updateStyleName,
        image: this.state.updateStyleImage,
        description: this.state.updateStyleDesc,
      }
    ).then(
      (response) => {
        this.setState({
          styles: response.data
        })
      }
    )
  }

  componentDidMount = () => {
    axios.get('/kelc').then(
      (response) => {
        this.setState({
          styles: response.data
        })
      }
    )
  }

  createStyle = (event) => {
    event.preventDefault();
    axios.post(
      '/kelc',
      {
        name: this.state.newStyleName,
        image: this.state.newStyleImage,
        description: this.state.newStyleDesc,
      }
    ).then(
      (response) => {
        this.setState({
          styles: response.data
        })
      }
    )
  }

  changeNewStyleDesc = (event) => {
    this.setState({
      newStyleDesc: event.target.value
    })
  }

  changeNewStyleImage = (event) => {
    this.setState({
      newStyleImage: event.target.value
    })
  }

  changeNewStyleName = (event) => {
    this.setState({
      newStyleName: event.target.value
    })
  }

  render = () => {
    return <div>
      <h1>kelc moore beauty</h1>
      <nav>
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
      <h3>post new style</h3>
      <form onSubmit={this.createStyle}>
        <input onKeyUp={this.changeNewStyleName} type="text" placeholder="Name"/><br/>
        <input onKeyUp={this.changeNewStyleImage} type="text" placeholder="Image"/><br/>
        <input onKeyUp={this.changeNewStyleDesc} type="text" placeholder="Description"/><br/>
        <input type="submit" value="Create"/>
      </form>
      <h2>services</h2>
      <ul>
        {
          this.state.styles.map(
            (style) => {
              return <li className="list-unstyled">
                <img src={style.image}/>
                <h3>{style.name}</h3>
                <p>{style.description}</p>
              </li>
            }
          )
        }
      </ul>
    </div>
  }

}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
