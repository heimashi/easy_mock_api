var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var ApiListPage = createReactClass({
  render: function() {
  	var items = this.props.json_list.map(function (item) {
            return (
                <li key={item.toString()}>
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

module.exports = ApiListPage;