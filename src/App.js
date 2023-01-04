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

  //completed 값에 따라 line-through(완료 표시)가 추가되는 함수

  getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom:"1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  //클릭된 버튼의 id만 제외하고 todoData를 재구성하는 함수

  handleClick = (id) => {
    let newtodoData = this.state.todoData.filter((data) => data.id !== id); // 조건문을 통과하는 요소들로 재나열
    this.setState({ todoData: newtodoData });
    //console.log('newtodoData', newtodoData)
  }

  //value의 상태를 확인하는 함수

  handleChange = (e) => {
    //console.log('e',e.target.value)
    this.setState({value: e.target.value}) //써진 값들
  }

  //입력한 value값을 title로 지정해 새 할 일 데이터를 추가하는 함수

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

  // 체크박스의 체크여부 상태를 확인하는 함수

  handleCompletedChange = (id) => {
    let newtodoData = this.state.todoData.map((data)=> {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data; //newtodoData=data
    });
    this.setState({ todoData : newtodoData}); //state가 바뀌면 컴포넌트는 리렌더링
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
          <input //form- 입력양식 태그
            type="text" 
            name="value"
            style={{flex:'10', padding: '5px'}}
            placeholder="해야할 일을 입력하세요"
            value={this.state.value} //적히는 부분
            onChange={this.handleChange}// value가 수정되면 value값 변경
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