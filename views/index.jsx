var React = require('react');
var DefaultLayout = require('./layouts/default');
var divStyle = {
      color: 'blue',
      wdith: '150px',
      paddingTop: '10px',
      display: 'inline-block'
  };
var HelloMessage = React.createClass({
  
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>导航</h1>
  	    <li><a href="/api">接口录入页面</a><br/></li>
        <li><a href="/api/list">接口列表</a></li>
        <div style={{paddingTop:'600px'}}><p style={{fontSize:'14px'}}>{this.props.msg}</p></div>
      </DefaultLayout>
    );
  }

  
});

module.exports = HelloMessage;