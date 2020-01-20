import React, { Component } from "react";
import data from "../data.json"
import PropTypes from "prop-types";

class ArrayOfTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskGroup: [],
      taskLength: 5
    };
  }

  componentDidMount() {
    this.setState({taskGroup: data.taskGroup})
  }

  showMoreAction = () => {
    const newLength = this.state.taskLength + 5 > this.state.taskGroup.length 
      ? this.state.taskGroup.length 
      : this.state.taskLength + 5
    this.setState({ taskLength: newLength });
  };

  showLessAction = () => {
    const newLength = this.state.taskLength - 5 <= 0 
      ? 0 
      : this.state.taskLength - 5
    this.setState({ taskLength: newLength});
  };

  checkboxAction = (index) => {
    const taskGroupTemp = this.state.taskGroup
    this.setState({ taskGroup: [
      ...taskGroupTemp.slice(0, index), 
      {...taskGroupTemp[index], completed: !taskGroupTemp[index].completed}, 
      ...taskGroupTemp.slice(index+1, taskGroupTemp.length)] 
    });
  };

  render() {
    const { taskGroup, taskLength } = this.state
    return (
      <div className="task-component-body">
        {taskGroup.slice(0, taskLength).map((task, key) => {
          return (
            <div key={key} className="task-box">
              <label>{task.details}</label>
              <input type="checkbox" checked={task.completed} onClick={() => this.checkboxAction(key)} />
            </div>
          )
        })}
        <button onClick={() => this.showMoreAction()}>Show More</button>
        <button onClick={() => this.showLessAction()}>Show Less</button>
      </div>
    );
  }
}

ArrayOfTask.propTypes = {
  taskGroup: PropTypes.object,
  taskLength: PropTypes.number
};

export default ArrayOfTask;
