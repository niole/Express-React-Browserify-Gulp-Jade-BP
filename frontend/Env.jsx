"use strict";
/*global React*/

var React = require('react');

var Env = React.createClass({
  getInitialState: function() {
    return {boxes: [],
            north: 0,
            east: 0,
            south: 0,
            west: 0
           };
  },
  setPos: function(p) {
  },
  eventHandler: function(e) {
    e.preventDefault();
    //j is up, k is down, l is rigt h is left
    switch (e.which) {
      case "j":
        this.setState({south: (function(this.state.south) { if})()});
        break;
      case "k":
        break;
      case "l":
        break;
      case "h":
        break;
    }
  },
  componentDidMount: function() {
    window.addEventListener('keyup', function(e) {
      e.preventDefault();
      this.eventHandler(e);
    }.bind(this));
  },
  componentWillUnmount: function() {
    window.removeEventListener('keyup', function() {
    });

  },

  makeBox: function(event) {
    event.preventDefault();
    var boxStyle = {position: "absolute",backgroundColor: "red", tabIndex: "0", width: "20px", height: "20px"};
    if (this.state.boxes.length < 0 ) {
      this.state.boxes.push(<div style={boxStyle} key={this.state.boxes.length} className="box"/>);
      this.setState({boxes: this.state.boxes});
    }
  },
  render: function(){
    var container = {width: "300px", height: "300px"};
    return (
    <span>
      <i onClick={this.makeBox} className="heartbeat icon" style={container}></i>
      <div className="boxes">
        {this.state.boxes}
      </div>
    </span>
    );
  }
});

module.exports = Env;
