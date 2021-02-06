import React, {ChangeEvent, Component} from 'react';
import './App.css';
import Cat from "./Cat/Cat";


class App extends Component {

  state = {
    cats: [
      {name: "Bars", age: 10, color: 'white'},
      {name: "Mazzy", age: 7, color: 'yellow'},
      {name: "Black", age: 7, color: 'black'},
      // {name: "White", age: 1.5, color: 'white'}
    ],
    pageTitle: 'My Cats',
    showCats: true,
  };

  // changeTitleHandler = (pageTitle: string) => {
  //   this.setState({pageTitle});
  // };

  handlerToggleCats = () => {
    this.setState({
      showCats: !this.state.showCats
    });
  };

  onChangeName = (name: string, index: number) => {
    // console.log(name, index)
    const cat = this.state.cats[index];
    cat.name = name;

    // const cats = this.state.cats.concat();
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
            // onChangeTitle={this.changeTitleHandler.bind(this, `Cat: ${cat.name}`)}
            onChangeName={(event: ChangeEvent<HTMLInputElement>) => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        );
      })
    }
    return (
      <div className={'App'}>
        <h1 style={{marginBottom: '1rem'}}>{this.state.pageTitle}</h1>

        <button onClick={this.handlerToggleCats}>Toggle Cats</button>

        <div className='catList'>

          {cats}

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
