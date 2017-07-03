var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var ApiPostPage = createReactClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
        	<h1>接口录入页面</h1>
	        <form action="/api/post" method="post">
	        	<p>URL :</p><input name="url_path" type="text" style={{ width:'400px', height:'30px'}}/>
	        	<p>JSON:</p><textarea name="json_text" rows="20" cols="100"/>
	        	<br/><input type="submit" value="提交"  style={{fontSize:'35px', width:'100px', height:'50px'}}/>
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

module.exports = ApiPostPage;