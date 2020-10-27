// 如果沒有引入 react 則編譯氣會無法編譯 JSX語法
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 這邊可以想成引入App這一個component
// 使用 JSX語法中 component 名字一定要大寫
// import App from './App';
import Todolist from './Todolist';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  // <App />
  <Todolist />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
