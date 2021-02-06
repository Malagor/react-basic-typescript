import React, {ChangeEvent, Component} from 'react';
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
    pageTitle: 'My Cats'
  };

  changeTitleHandler = (newTitle: string) => {

    this.setState(
      {
        pageTitle: newTitle
      }
    )
  };

  handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {target} = event;
    this.setState({
      pageTitle: target.value
    })
  };

  render() {
    // const cats: catsProps[] = this.state.cats;

    const catList = {
      display: 'flex',
      maxWidth: '900px',
      justifyContent: 'space-between',
      margin: '2rem auto'
    };

    return (
      <div className={'App'}>
        <h1 style={{marginBottom: '1rem'}}>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handlerInput}/>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!!')}>Change title</button>
        <div style={catList}>

          {
            this.state.cats.map((cat, index) => {
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

          {/*<Cat*/}
          {/*  name={cats[0].name}*/}
          {/*  age={cats[0].age}*/}
          {/*  color={cats[0].color}*/}
          {/*  onChangeTitle={this.changeTitleHandler.bind(this, `Cat: ${cats[0].name}`)}*/}
          {/*/>*/}

          {/*<Cat*/}
          {/*  name={cats[1].name}*/}
          {/*  age={cats[1].age}*/}
          {/*  color={cats[1].color}*/}
          {/*  onChangeTitle={() => this.changeTitleHandler(`Cat: ${cats[1].name}`)}*/}
          {/*/>*/}

          {/*<Cat*/}
          {/*  name={cats[2].name}*/}
          {/*  age={cats[2].age}*/}
          {/*  color={cats[2].color}*/}
          {/*  onChangeTitle={this.changeTitleHandler.bind(this, `Cat: ${cats[2].name}`)}*/}
          {/*/>*/}

          {/*<Cat*/}
          {/*  name={cats[3].name}*/}
          {/*  age={cats[3].age}*/}
          {/*  color={cats[3].color}*/}
          {/*  onChangeTitle={this.changeTitleHandler.bind(this, `Cat: ${cats[3].name}`)}*/}
          {/*/>*/}
        </div>
      </div>
    );
  }
}


export default App;
