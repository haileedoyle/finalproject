class App extends React.Component {
  state = {
    styles: []
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

  deleteStyle = (event) => {
    axios.delete(
      '/kelc/' + event.target.value).then(
        (response) => {
          this.setState({
            styles: response.data
          })
        }
      )
  }

  updateStyle = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
        '/kelc/' + id,
        {
          name: this.state.updateStyleName,
          image: this.state.updateStyleImage,
          description: this.state.updateStyleDesc,
        }
    )
    .then(
      (response) => {
        this.setState({
            styles: response.data
        })
    }
  )
}

  changeUpdateStyleName = (event) => {
    this.setState({
      updateStyleName: event.target.value
    })
  }

  changeUpdateStyleImage = (event) => {
    this.setState({
      updateStyleImage: event.target.value
    })
  }

  changeUpdateStyleDesc = (event) => {
    this.setState({
      updateStyleDesc: event.target.value
    })
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
    return <div className="container-fluid">
    <div className="header">
      <h1>kelc moore beauty</h1>
    </div>
    <div className="wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
        <li className="active">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
        </li>
        </ul>
      </nav>
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>
        </nav>
    </div>
    </div>
      <h3>post new style</h3>
      <form onSubmit={this.createStyle}>
        <input onKeyUp={this.changeNewStyleName} type="text" placeholder="Name"/><br/>
        <input onKeyUp={this.changeNewStyleImage} type="text" placeholder="Image"/><br/>
        <input onKeyUp={this.changeNewStyleDesc} type="text" placeholder="Description"/><br/>
        <input type="submit" value="post"
        className="btn btn-dark"/>
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
                <form onSubmit={this.updateStyle} id={style.id}>
                  <input onKeyUp={this.changeUpdateStyleName} type="text" placeholder="Name"/><br/>
                  <input onKeyUp={this.changeUpdateStyleImage} type="text" placeholder="Image"/><br/>
                  <input onKeyUp={this.changeUpdateStyleDesc} type="text" placeholder="Description"/><br/>
                  <input type="submit" value="update"
                  className="btn btn-dark"/>
                </form>
                  <button onClick={this.deleteStyle} value={style.id}
                  className="btn btn-dark">delete</button>
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
