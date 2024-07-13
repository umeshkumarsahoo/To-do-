import "./components/header.css";
import "./components/task.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { PiGithubLogo } from "react-icons/pi";
import list_header from "./components/listhead";
import { useState } from "react";
function App() {
  const [task, settask] = useState("");
  const [mainArr, setmainArr] = useState([]);
  function create() {
    if (task.trim() !== "") {
      let obj = {
        id: Math.random(),
        task: task,
        iscmplt: false,
      };
      setmainArr([...mainArr, obj]);
      settask("");
    }
  }
  function toggleComplete(id) {
    setmainArr(
      mainArr.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  function deleteTask(id) {
    setmainArr(mainArr.filter((task) => task.id !== id));
  }

  console.log(mainArr);
  return (
    <>
      <header className="header">
      <PiGithubLogo  size={30}/>
        <h1 className="head">TODO-LIST</h1>
      </header>
      <div className="container">
        <div className="all">
          <div className="tasks">
            <input
              type="text"
              placeholder="add a new task"
              onChange={(e) => {
                settask(e.target.value);
              }}
            />
            <button className="create" onClick={create}>
              <IoAddCircleOutline size={30} />
            </button>
          </div>
          <div className="task_lists">
            {mainArr.length > 0 ? (
              <ul className="unordered">
                {mainArr.map((task) => (
                  <li className="list" key={task.id}> 
                    <p>{task.task}</p>
                    <input
                      className="check_box"
                      type="checkbox"
                      checked={task.isComplete}
                      onChange={() => toggleComplete(task.id)}
                    />
                    <span className="cmplt">
                      {task.isComplete ? "completed" : "not completed"}
                    </span>
                    <button  className="delete" onClick={() => deleteTask(task.id)}><MdDeleteForever size={25} /></button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no_task">No tasks yet. Add a task to get started!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
