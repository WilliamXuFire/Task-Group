import React, { Component } from "react";
import PropTypes from "prop-types";

class ArrayOfTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskGroup: [
        {
          id: 1, //This id needs to be Unique for each Task
          details: "Task 1",
          completed: true
        },
        {
          id: 2, //This id needs to be Unique for each Task
          details: "Task 2",
          completed: true
        },
        {
          id: 3, //This id needs to be Unique for each Task
          details: "Task 3",
          completed: true
        },
        {
          id: 4, //This id needs to be Unique for each Task
          details: "Task 4",
          completed: true
        },
        {
          id: 5, //This id needs to be Unique for each Task
          details: "Task 5",
          completed: true
        },
        {
          id: 6, //This id needs to be Unique for each Task
          details: "Task 6",
          completed: true
        },
        {
          id: 7, //This id needs to be Unique for each Task
          details: "Task 7",
          completed: true
        },
        {
          id: 8, //This id needs to be Unique for each Task
          details: "Task 8",
          completed: true
        },
        {
          id: 9, //This id needs to be Unique for each Task
          details: "Task 9",
          completed: true
        },
        {
          id: 10, //This id needs to be Unique for each Task
          details: "Task 10",
          completed: true
        },
        {
          id: 11, //This id needs to be Unique for each Task
          details: "Task 11",
          completed: true
        },
        {
          id: 12, //This id needs to be Unique for each Task
          details: "Task 12",
          completed: true
        },
        {
          id: 13, //This id needs to be Unique for each Task
          details: "Task 13",
          completed: true
        },
        {
          id: 14, //This id needs to be Unique for each Task
          details: "Task 14",
          completed: true
        },
        {
          id: 15, //This id needs to be Unique for each Task
          details: "Task 15",
          completed: true
        },
        {
          id: 16, //This id needs to be Unique for each Task
          details: "Task 16",
          completed: true
        }
      ],
      taskLength: 5
    };
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
