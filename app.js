// ======= //
// DELETE  //
// ======= //

class Delete extends React.Component {
  state= {
    styles: [],
    admin: true
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

  render = () => {
    return
  }
}


// ======= //
// UPDATE  //
// ======= //

class Update extends React.Component {
  state = {
    styles: [],
    admin: true
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

    render = () => {
      {
        this.state.styles.map(
          (style) => {
            return <form onSubmit={this.updateStyle} id={style.id} className="form">
                <input onKeyUp={this.changeUpdateStyleName} type="text" placeholder="Name"/><br/>
                <input onKeyUp={this.changeUpdateStyleImage} type="text" placeholder="Image"/><br/>
                <input onKeyUp={this.changeUpdateStyleDesc} type="text" placeholder="Description"/><br/>
                <input type="submit" value="update" className="btn btn-dark"/><br/>
                <button onClick={this.deleteStyle} value={style.id} className="btn btn-dark">delete</button>
              </form>
          }
        )
      }
  }
}

// ======= //
// CREATE  //
// ======= //

class Create extends React.Component {
  state = {
    styles: [],
    admin: true
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
        <h3>post new style</h3>
        <form onSubmit={this.createStyle}>
          <input onKeyUp={this.changeNewStyleName} type="text" placeholder="Name"/><br/>
          <input onKeyUp={this.changeNewStyleImage} type="text" placeholder="Image"/><br/>
          <input onKeyUp={this.changeNewStyleDesc} type="text" placeholder="Description"/><br/>
          <input type="submit" value="post"
          className="btn btn-dark"/>
        </form>
    </div>
  }
}

// ======= //
//   APP   //
// ======= //

class App extends React.Component {
  state = {
    styles: [],
    admin: false
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

  render = () => {
    return <div className="container-fluid">
      <div className="header">
        <h1>kelc moore beauty</h1>
      </div>
      <nav id="sidebar">
            <a className="active" href="#home">home</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
            <a href="#login">admin login</a>
        <Create></Create>
      </nav>
      <div className="about" id="about">
          <div className="contact" id="contact">
          <img src="https://i.imgur.com/wyyKCwn.jpg" alt="kelc"/>
          <h5>Reach Out</h5>
            <form action="#" method="post">
              <div className="name">
                <label for="name"></label>
                <input type="text" placeholder="Name"/>
              </div>
              <div className="email">
                <label for="email"></label>
                <input type="email" placeholder="Email"/>
              </div>
              <div className="telephone">
                <label for="name"></label>
                <input type="text" placeholder="Number"/>
              </div>
              <div className="subject">
                <label for="subject"></label>
              </div>
              <div className="message">
                <label for="message"></label>
                <textarea name="message" placeholder="I'd like to chat about"></textarea>
              </div>
              <div className="submit">
                <input type="submit" value="Send Message"
                className="btn btn-dark" />
              </div>
            </form>
          </div>
        <ul className="styles">
          {
            this.state.styles.map(
              (style) => {
                return <li className="list-unstyled">
                  <img src={style.image}/>
                  <Update></Update>
                  <Delete></Delete>
                </li>
              }
            )
          }
        </ul>
      </div>
    <footer>
      <em>Hailee Doyle 2020</em>
    </footer>
    </div>
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
