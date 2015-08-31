"use strict";

var React = require('react');
var FreeDictBox = require('./FreeDictBox.jsx');
var $ = require('jquery');
var _ = require('lodash');

var ArticleGetter = React.createClass({
  getInitialState: function() {
    return {text: [],
            defs: []
            };
  },
  componentDidMount: function() {
    document.addEventListener('click', function(event) {
      var T = event.target;
      if (T.className === "news-text") {
        var t = T.innerHTML.match(/[a-zA-Z0-9\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]/g);
        var text = t.join("");
        this.getInnerText(text);
      }
    }.bind(this));
  },
  render: function(){
    return (
      <span>
        <input ref="urlBox" id="urlBox" type="text" placeholder="enter a url .."/>
        <input onClick={this.sendReq} type="submit"/>
        <div className="text-result">
          {this.state.text}
        </div>
        <FreeDictBox words={this.state.defs}/>
      </span>
    );
  },
  getInnerText: function(text) {
    ///[a-zA-Z]+/g <-- for just letters
    var newDefs = this.state.defs.concat([text]);
    this.setState({defs: newDefs});
  },
  wrapText: function(text) {
    //split text on space, wrap each in a span, return
    //all in a nice format
    var splitText = text.split(" ");
    return _.map(splitText, function(t) {
      return <span className="news-text">{" "+t}</span>;
    });
  },
  sendReq: function() {
    var URL = this.refs.urlBox.getDOMNode().value;
    $.get(URL, function(response) {
        var returnText = $(response).find("p").text();
        this.setState({text: this.wrapText(returnText)});
        }.bind(this));
  }
});

module.exports = ArticleGetter;
