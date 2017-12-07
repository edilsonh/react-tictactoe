import React from 'react';
import ReactDOM from 'react-dom';

class Tictactoe extends React.Component {
  
  render() {

    return <table>
      <tr>
        <td id='square-1'></td>
        <td id='square-2'></td>
        <td id='square-3'></td>
      </tr>
      <tr>
        <td id='square-4'></td>
        <td id='square-5'></td>
        <td id='square-6'></td>
      </tr>
      <tr>
        <td id='square-7'></td>
        <td id='square-8'></td>
        <td id='square-9'></td>
      </tr>
    </table>
  }
}

ReactDOM.render(<Tictactoe />, document.getElementById('root'));
