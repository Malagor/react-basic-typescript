import React, {Component} from 'react';
import './App.css';
import Cat from "./Cat/Cat";


class App extends Component {

  state = {
    cats: [
      {name: "Bars", age: 10, color: 'white'},
      {name: "Mazzy", age: 7, color: 'yellow'},
      {name: "Black", age: 7, color: 'black'},
      {name: "White", age: 1.5, color: 'white'}
    ],
    pageTitle: 'My Cats',
    showCats: false,
  };

  changeTitleHandler = (pageTitle: string) => {
    this.setState({pageTitle});
  };

  handlerToggleCats = () => {
    this.setState({
      showCats: !this.state.showCats
    });
  };


  render() {

    const catList = {
      display: 'flex',
      maxWidth: '900px',
      justifyContent: 'space-between',
      margin: '2rem auto'
    };

    let cats = null;

    if (this.state.showCats) {
      cats = this.state.cats.map((cat, index) => {
        return (
          <Cat
            key={index}
            name={cat.name}
            age={cat.age}
            color={cat.color}
            onChangeTitle={this.changeTitleHandler.bind(this, `Cat: ${cat.name}`)}
          />
        )
      })
    }
    return (
      <div className={'App'}>
        <h1 style={{marginBottom: '1rem'}}>{this.state.pageTitle}</h1>

        <button onClick={this.handlerToggleCats}>Toggle Cats</button>

        <div style={catList}>

          { cats }

          {/*{*/}
          {/*  this.state.showCats*/}
          {/*  ? this.state.cats.map((cat, index) => {*/}
          {/*    return (*/}
          {/*      <Cat*/}
          {/*        key={index}*/}
          {/*        name={cat.name}*/}
          {/*        age={cat.age}*/}
          {/*        color={cat.color}*/}
          {/*        onChangeTitle={this.changeTitleHandler.bind(this, `Cat: ${cat.name}`)}*/}
          {/*      />*/}
          {/*    )*/}
          {/*  })*/}
          {/*  : null*/}
          {/*}*/}


        </div>
      </div>
    );
  }
}


export default App;
