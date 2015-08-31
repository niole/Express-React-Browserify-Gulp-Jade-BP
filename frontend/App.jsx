"use strict";

var React = require('react');
var ArticleGetter = require('./ArticleGetter.jsx');
var $ = require('jquery');

var App = React.render( <ArticleGetter/>, $('#container')[0]);
