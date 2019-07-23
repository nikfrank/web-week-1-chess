import React from 'react';
import './App.css';

import Piece from 'react-chess-pieces';

const initialPosition = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];


class App extends React.Component {
  state = {
    pieces: initialPosition,

  }

  clickCell = (row, col)=>{
    const selectedPiece = (this.state.pieces[this.state.selectedRow] || []
                          )[this.state.selectedCol];

    if( selectedPiece ){
      let nextPieces = this.state.pieces;

      nextPieces[this.state.selectedRow][this.state.selectedCol] = '';
      nextPieces[row][col] = selectedPiece;
      
      this.setState({
        pieces: nextPieces,

        selectedRow: null,
        selectedCol: null,
      });

    } else {
      if( this.state.pieces[row][col] )
        this.setState({
          selectedRow: row,
          selectedCol: col,
        });
    }
  }

  render() {
    const { pieces, selectedCol, selectedRow } = this.state;

    return (
      <div className="App">
        <div className='board'>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(row => (
            <div className='row' key={row}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map(col => (
                <div className={((selectedRow === row) && (selectedCol === col)) ?
                                 'cell selected' : 'cell'}
                     key={col}
                     onClick={()=> this.clickCell(row, col)}>
                  <Piece piece={pieces[row][col]}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
