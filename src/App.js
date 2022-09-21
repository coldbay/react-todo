import React, {Component} from "react"; //리액트 라이브러리에서 React, Component 클래스 가져오기
import "./App.css"

export default class App extends Component{  //클래스형 컴포넌트

  state={
    todoData : [],
    value:""
  }

  //x버튼 스타일
  btnStyle={        
    color: "#fff",
    border: "none", //테두리
    padding: "5px 9px", // 상하 5px, 좌우 9px
    borderRadius: "50%", // 일반 css - border-radius
    cursor: "pointer",
    float: "right"  //오른쪽에 부유하는 버튼 생성
  }



  //구현한 함수

  getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom:"1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  handleClick = (id) => {
    let newtodoData = this.state.todoData.filter((data) => data.id !== id); // 파라미터 id와 다른 data.id를 가진 data들로만 재나열
    this.setState({ todoData: newtodoData });
    console.log('newtodoData', newtodoData)
  }

  handleChange = (e) => {
    console.log('e',e.target.value)
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    //form 안에서 input를 전송시 리로드를 막음
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }  
    this.setState({ todoData : [...this.state.todoData, newTodo], value:""}); //전개 연산자 (특정 객체의 값 -> 다른 객체로 복제, 옮길때)
  }

  handleCompletedChange = (id) => {
    let newtodoData = this.state.todoData.map((data)=> {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData : newtodoData});
  }

  // 랜더 시 보이는 UI (랜더 함수내에서 UI 작성)
  render() { 
    return( 
      <div className="container">

        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
      
        {this.state.todoData.map((data) => (  //새로운 배열로 반환
          //key 속성 필수 -요소의 리스트를 나열할 때, REACT가 변경하는 부분 식별하는데 도움

          <div style={this.getStyle(data.completed)} key={data.id}>  
          <input type="checkbox"
          onChange={() => this.handleCompletedChange(data.id)}
          defaultChecked={false}
          />
          {data.title}
          <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
        </div>
        ))}        

        <form style={{display:'flex'}} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="value"
            style={{flex:'10', padding: '5px'}}
            placeholder="해야할 일을 입력하세요"
            value={this.state.value} //적히는 부분
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="btn"
            style={{flex:'1'}}
            value="입력"
          />
        </form>
        </div>

      </div>
    )
  }
}