var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var ApiTipsPage = createReactClass({
  
  render: function() {
  	var item;
  	if(this.props.url!=null){
  		item = (<li>
                 <a href={this.props.url}>点击测试一下：{ this.props.url }</a>
            </li>);
  	}else{
  		item = (<div/>);
  	}
    return (
      <DefaultLayout title={this.props.title}>
        <div>
          <h3>提示:</h3>
	        <p>{this.props.msg}</p>
          {item}	
          <br/><br/><a href="/api">返回录入页面</a>

        </div>
      </DefaultLayout>
    );
  }
});

module.exports = ApiTipsPage;