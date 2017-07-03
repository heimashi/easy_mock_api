var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var RootPage = createReactClass({
  
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>导航</h1>
  	    <li><a href="/api">接口录入页面</a><br/></li>
        <li><a href="/api/list">接口列表</a></li>
        <div style={{paddingTop:'500px'}}><p style={{fontSize:'14px'}}>{this.props.msg}</p></div>
      </DefaultLayout>
    );
  }

  
});

module.exports = RootPage;