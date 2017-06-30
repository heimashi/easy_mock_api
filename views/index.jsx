var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
  	    <a href="/api/list">接口列表</a>
  	    <br/>
        <hr/>
  	    <a href="/api">接口录入页面</a>
  	    <br/>
        <hr/>
        <div>Hello {this.props.msg}</div>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;