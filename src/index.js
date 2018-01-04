import React from 'react';
import ReactDOM from 'react-dom';

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {turnCount: 0, space1: "", space2: "", space3: "", space4: "", space5: "", space6: "", space7: "", space8: "", space9: ""};
    this.markBoard = this.markBoard.bind(this);
    this.reset = this.reset.bind(this);
  }

  markBoard(b) {
    let space = b.target.id;
    if (b.target.innerHTML !== "") {
      return;
    }
    let mark
    let whosTurn = this.state.turnCount % 2;
    switch (whosTurn) {
      case 0:
        mark = "X";
        break;

      case 1:
        mark = "O"
        break;

      default:
        mark = "";
    }

    this.setState({[space]: mark});
    this.setState({turnCount: this.state.turnCount += 1});
  }

  reset() {
    this.setState({turnCount: 0});
    let space;
    for (var i = 0; i < 10; i++) {
      this.setState({[`space${i}`]: ""});
    }
  }

  render() {
    let boardFull;
    if (this.state.turnCount === 9) {
      boardFull = (
        <p>Board Is Full!</p>
      )
    }
    return <section>
      <table align='center'>
        <tbody>
          <tr>
            <td id='space1' onClick={this.markBoard}>{this.state.space1}</td>
            <td id='space2' onClick={this.markBoard}>{this.state.space2}</td>
            <td id='space3' onClick={this.markBoard}>{this.state.space3}</td>
          </tr>
          <tr>
            <td id='space4' onClick={this.markBoard}>{this.state.space4}</td>
            <td id='space5' onClick={this.markBoard}>{this.state.space5}</td>
            <td id='space6' onClick={this.markBoard}>{this.state.space6}</td>
          </tr>
          <tr>
            <td id='space7' onClick={this.markBoard}>{this.state.space7}</td>
            <td id='space8' onClick={this.markBoard}>{this.state.space8}</td>
            <td id='space9' onClick={this.markBoard}>{this.state.space9}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={this.reset}>Reset</button>
      {boardFull}
    </section>
  }
}

ReactDOM.render(<Tictactoe />, document.getElementById('root'));
