var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
        	<h2>接口录入页面</h2>
	        <form action="/api/post" method="post">
	        	<p>URL PATH:<input name="url_path" type="text"/></p>
	        	<p>JSON:<textarea name="json_text" rows="10" cols="30"/></p>
	        	<input type="submit" value="提交"/>
	        </form>
	        <br/>
	        <p>提示信息:{this.props.msg}</p>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;