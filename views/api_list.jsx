var React = require('react');
var DefaultLayout = require('./layouts/default');
  

var HelloMessage = React.createClass({
  render: function() {
  	var items = this.props.json_list.map(function (item) {
            return (
                <li>
                    <a href={item}>{ item }</a>
                </li>
                );
        });
    return (
      <DefaultLayout title={this.props.title}>
	      <br/>
	      <h2>接口列表</h2>
        <div >{items}</div>
        <br/>
        <a href="/">返回首页</a>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;