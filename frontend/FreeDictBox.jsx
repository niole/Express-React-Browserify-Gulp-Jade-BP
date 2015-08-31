"use strict";

var _ = require('lodash');
var $ = require('jquery');
var React = require('react');

var FreeDictBox = React.createClass({
  propTypes: {
    words: React.PropTypes.array
  },
  getDef: function(w) {
    $.get(
          function(page) {
            console.log( typeof page);
            console.log('page');
            console.log($(page));
          }
        );
  },
  buildDefs: function() {
    return _.map(this.props.words, function(word) {
      return <li>{this.getDef(word)}</li>;
    }.bind(this));
  },
  render: function() {
    return (
      <span>
        <h1>Defs</h1>
        <div className="def-box">
          <ul>
            {this.buildDefs()}
          </ul>
        </div>
      </span>
    );
  }
});

module.exports = FreeDictBox;
