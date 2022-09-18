import React, {Component} from "react"; //리액트 라이브러리에서 React, Component 클래스 가져오기
import "./App.css"

export default class App extends Component{  //클래스형 컴포넌트

  state={
    todoData : [
      {
        id:"1",
        title:"공부하기",
        completed: true
      },
  
      {
        id:"2",
        title:"청소하기",
        completed: false
      }
    ]
  }

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

  

  handleClick = (id) => {
    let newtodoData = this.state.todoData.filter((data) => data.id !== id); // 파라미터 id와 다른 data.id를 가진 data들로만 재나열
    this.setState({ todoData: newtodoData });
  }

  render() { // 랜더 함수내에서 UI 작성
    return( 
      <div className="container">

        <div className="todoBlock">
          <div classname="title">
            <h1>할 일 목록</h1>
          </div>
      
      {this.state.todoData.map((data) => ( 
        //key 속성 필수
        <div style={this.getStyle()} key={data.id}>  
        <input type="checkbox" defalutChecked={data.completed}/>
        {data.title}
        <button style={this.btnStyle} onclick={() => this.handleClick(data.id)}>x</button>
      </div>
      ))}          

        </div>

      </div>
    )
  }
}