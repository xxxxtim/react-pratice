// 如果沒有引入 react 則編譯氣會無法編譯 JSX語法
import React from 'react';
import ReactDOM from 'react-dom';
// 這邊可以想成引入App這一個component
// 使用 JSX語法中 component 名字一定要大寫
// import App from './App';
import Todolist from './Todolist';

ReactDOM.render(
  <Todolist />,
  document.getElementById('root')
);

