import React, {Component} from "react"; //리액트 라이브러리에서 React, Component 클래스 가져오기
import "./App.css"

export default class App extends Component{  //클래스형 컴포넌트

  btnStyle={
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%", // 일반 css - border-radius
    cursor: "pointer",
    float: "right" 
  }

  getStyle = () => {
    return{
      padding: "10px",
      borderBottom:"1px #ccc dotted",
      textDecoration:"none"
    }
  }

  render() { // 랜더 함수내에서 UI 작성
    return(
      <div className="container">

        <div className="todoBlock">
          <div classname="title">
            <h1>할 일 목록</h1>
          </div>
        
          <div style={this.getStyle()}>
            <input type="checkbox" defalutChecked={false}/>
            공부하기
            <button style={this.btnStyle}>x</button>
          </div>
        </div>

      </div>
    )
  }
}