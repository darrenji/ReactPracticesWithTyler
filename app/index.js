//第一种方式输出Hello World
//var app =  document.getElementById('app');
//app.innerHTML = "Hello World!";



//第二种方式输出Hello World
var React = require('react');
var ReactDOM = require('react-dom');

//1、生产Component
//这里是jsx的语法
var HelloWorld = React.createClass({
    render: function(){
        return (
            <div>Hello Wold Program again</div>
        )
    }
});

//2、渲染出来
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);