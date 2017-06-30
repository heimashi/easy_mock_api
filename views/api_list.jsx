var React = require('react');
var DefaultLayout = require('./layouts/default');
var utils = require('../common/utils');
  

var HelloMessage = React.createClass({
  render: function() {
  	var items = this.props.onlineUsers.map(function (item) {
            return (
                <li className="navigation__item">
                    { utils.allPrpos(item) }
                </li>
                );
        });
  	var userInfoitems = this.props.userInfos.map(function (item) {
            return (
                <li className="navigation__item">
                    { utils.allPrpos(item) }
                </li>
                );
        });
    return (
      <DefaultLayout title={this.props.title}>
	    <a href="/admin/logout">注销登录</a>
	    <br/>
	    <hr/>
	    <a href="/admin">返回首页</a>
	    <br/>
	    <h2>用户在线表</h2>
        <div className="navigation">{items}</div>
         <br/>
        <h2>用户信息表</h2>
        <div className="navigation">{userInfoitems}</div>
        <hr/>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;