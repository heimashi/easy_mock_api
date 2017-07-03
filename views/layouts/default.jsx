var React = require('react');
var createReactClass = require('create-react-class');

var DefaultLayout = createReactClass({
  render: function() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;