//第一种方式输出Hello World
//var app =  document.getElementById('app');
//app.innerHTML = "Hello World!";



//第二种方式输出Hello World
//var React = require('react');
//var ReactDOM = require('react-dom');
//
////1、生产Component
////这里是jsx的语法
//var HelloWorld = React.createClass({
//    render: function(){
//        //console.log(this.props);
//        return (
//            <div>Hello {this.props.name}</div>
//        )
//    }
//});
//
////2、渲染出来
//ReactDOM.render(
//    <HelloWorld name="darren" anySortData={29}/>,
//    document.getElementById('app')
//);


//组件嵌套
//组件的几个要求：focused, independent, reusable, small, testable

//var USER_DATA = {
//    name: 'darren',
//    username: 'DarrenActive',
//    image: 'https://avatars0.githubusercontent.com/u/2933430?v=38s=460'
//};
//
//
//var React = require('react');
//var ReactDOM = require('react-dom');
//
////被嵌套组件
//var ProfilePic = React.createClass({
//    render: function(){
//        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//    }
//})
//
//var Link = React.createClass({
//    
//    changeURL: function(){
//        window.location.replace(this.props.href);
//    },
//    
//    render: function(){
//        return (
//            <span 
//                style={{color: 'blue', cursor: 'pointer'}}
//                onClick={this.changeURL}>
//                {this.props.children}
//            </span>
//        )
//    }
//});
//
////被嵌套组件
//var ProfileLink = React.createClass({
//    render: function(){
//        return (
//            <div>
//                <Link href={'https://www.github.com/' + this.props.username}>
//                    {this.props.username}
//                </Link>
//            </div>
//        )
//    }
//});
//
////被嵌套组件
//var ProfileName = React.createClass({
//    render: function(){
//        return (
//            <div>{this.props.name}</div>
//        )
//    }
//})
//
////嵌套组件
//var Avatar = React.createClass({
//    render: function(){
//        return (
//            <div>
//                <ProfilePic imageUrl={this.props.user.image} />
//                <ProfileName name={this.props.user.name} />
//                <ProfileLink username={this.props.user.username} />
//            </div>
//        )
//    }
//})
//
//ReactDOM.render(
//    <Avatar user={USER_DATA} />,
//    document.getElementById('app')
//);



//路由
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
    routes,
    document.getElementById('app')
);

