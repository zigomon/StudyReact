import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout'
import Top from './Top'
import MainContent from './MainContent'
import Docker from './docker/Docker'

// コンテンツ変更
const onChangeContent = (e, contentName) => {
    e.preventDefault();
    console.log("onChangeContent() " + contentName);
    let component;
    switch(contentName) {
        case "Docker":
            component = <MainContent content={<Docker />} />
            break;
        default:
            component = <Top />
            break;
    }

    ReactDOM.render(
        <React.StrictMode>
          <Layout content={component} onChangeContent={onChangeContent} />
        </React.StrictMode>,
        document.getElementById('root')
      );
}

ReactDOM.render(
  <React.StrictMode>
    <Layout content={<Top />} onChangeContent={onChangeContent} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
