import React, {Component} from 'react';
import Node from './Node/Node';

import './PathfindingVisualizer.css';


export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      nodes: [],
    };
  }

  componentDidMount(){
    const nodes = []
    for(let row = 0; row < 20; row++){
      const currentRow = []
      for(let col = 0; col < 50; col++){
        const currentNode = {
          row,
          col,
          isStart: row === 0 && col === 0,
          isFinish: row === 20 && col === 20,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow)
    }
    this.setState({nodes: nodes})
    
  }

  render() {

    const {nodes} = this.state;
    console.log(nodes);

    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          return (<div key = {rowIdx}>{row.map((node, nodeIdx) => {
            const {isStart, isFinish} = node;
            return (
              <Node>
                key = {nodeIdx}
                isStart = {isStart}
                isFinish = {isFinish}
                test = {'foo'}
                test = {'kappa'}
              </Node>
            )
          } 
          )}</div>)      
        })}
      </div>
    );
  }

  
}

