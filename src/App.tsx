import React, {ChangeEvent, Component} from 'react';
import classes from './App.module.scss';
import Cat from "./Cat/Cat";

class App extends Component {

  state = {
    cats: [
      {name: "Bars", age: 10, color: 'white'},
      {name: "Mazzy", age: 7, color: 'yellow'},
      {name: "Black", age: 7, color: 'black'},
    ],
    pageTitle: 'My Cats',
    showCats: true,
  };

  handlerToggleCats = () => {
    this.setState({
      showCats: !this.state.showCats
    });
  };

  onChangeName = (name: string, index: number) => {
    const cat = this.state.cats[index];
    cat.name = name;

    const cats = [...this.state.cats];
    cats[index] = cat;

    this.setState({
      cats
    })
  };

  deleteHandler(index: number) {
    const cats = this.state.cats.concat();
    cats.splice(index, 1);

    this.setState({cats});
  }

  render() {

    let cats = null;

    if (this.state.showCats) {
      cats = this.state.cats.map((cat, index) => {
        return (
          <Cat
            key={index}
            name={cat.name}
            age={cat.age}
            color={cat.color}
            onChangeName={(event: ChangeEvent<HTMLInputElement>) => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        );
      })
    }
    return (
      <div className={classes.App}>
        <h1 style={{marginBottom: '1rem'}}>{this.state.pageTitle}</h1>
        <button onClick={this.handlerToggleCats}>Toggle Cats</button>
        <div className={classes.catList}>
          {cats}
        </div>
      </div>
    );
  }
}


export default App;
