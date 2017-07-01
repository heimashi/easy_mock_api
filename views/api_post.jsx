var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
        	<h1>接口录入页面</h1>
	        <form action="/api/post" method="post">
	        	<p>URL :<input name="url_path" type="text"/></p>
	        	<p>JSON:<textarea name="json_text" rows="10" cols="30"/></p>
	        	<input type="submit" value="提交"/>
	        </form>
	        <br/>
          <h3>提示:</h3>
	        <p>{this.props.msg1}</p>
          <p>{this.props.msg2}</p><br/>
          <a href="/">返回首页</a>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;