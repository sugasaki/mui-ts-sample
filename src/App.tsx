import * as React from 'react';
import FlatButtonsSample from './components/FlatButtonsSample';
import RaisedButtonsSample from './components/RaisedButtonsSample';



class App extends React.Component {
  public handleClick = () => {
    alert('Clicked!');
  }

  public render() {
    return (
      <div>
        <RaisedButtonsSample onClick={this.handleClick} />
        <FlatButtonsSample onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;