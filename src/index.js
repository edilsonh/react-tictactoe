import React from 'react';
import ReactDOM from 'react-dom';

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {space1: "", space2: "", space3: "", space4: "", space5: "", space6: "", space7: "", space8: "", space9: ""};
    this.markBoard = this.markBoard.bind(this);
  }

  markBoard(b) {
    let m = b.target.id;
    const x = this.state[m] === "" ? "X" : "";

    this.setState({[m]: x});
  }

  render() {
    return <table>
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
  }
}

ReactDOM.render(<Tictactoe />, document.getElementById('root'));
