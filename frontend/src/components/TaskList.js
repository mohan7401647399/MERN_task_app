import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { toast } from 'react-toastify';
import axios from 'axios';
import { URL } from '../App'
import LoadingImg from '../assets/loader.gif'

const TaskList = () => {
  const [formData, setFormData] = useState({ name: "", completed: false })
  const [tasks, setTasks] = useState([])
  const [completedTask, setCompletedTask] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { name } = formData
  const [isEditing, setIsEditing] = useState(false)
  const [taskID, setTaskID] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const createTask = async (e) => {
    e.preventDefault()
    if (name === "") return toast.error("Input field cannot be empty")
    try {
      await axios.post(`${URL}/api/tasks`, formData)
      setFormData({ ...formData, name: "" })
      getTasks()
    } catch (error) {
      toast(error.message)
    }
  }

  const getTasks = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(`${URL}/api/tasks`)
      setTasks(data)
      setIsLoading(false)
    } catch (error) {
      toast(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`)
      getTasks()
    } catch (error) {
      toast(error.message)
    }
  }

  const getSingleTask = (task) => {
    setFormData({ name: task.name, completed: false })
    setTaskID(task._id)
    setIsEditing(true)
  }

  const updateTask = async (e) => {
    e.preventDefault()
    if (name === "") return toast.error("Input field cannot be empty!")
    try {
      await axios.put(`${URL}/api/tasks/${taskID}`, formData)
      setFormData({ ...formData, name: "" })
      setIsEditing(false)
      getTasks()
    } catch (error) {
      toast(error.message)
    }
  }

  const setToComplete = async (task) => {
    const newFormData = { name: task.name, completed: true }
    try {
      await axios.put(`${URL}/api/tasks/${task._id}`, newFormData)
      getTasks()
    } catch (error) {
      toast(error.message)
    }
  }

  useEffect(() => {
    const completedTaskCount = tasks.filter((task) => {
      return task.completed === true
    })
    setCompletedTask(completedTaskCount)
  }, [tasks])

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask} isEditing={isEditing} updateTask={updateTask} />
      {tasks.length > 0 && (
        <div className='--flex-between --pb'>
          <p>
            <b>Total Tasks: </b>{tasks.length}
          </p>
          <p>
            <b>Completed Tasks: </b>{completedTask.length}
          </p>
        </div>
      )}
      <hr />
      {
        isLoading && (
          <div className='--flex-center'>
            <img src={LoadingImg} alt="loading" />
          </div>
        )
      }
      {
        !isLoading && tasks.length === 0 ? (
          <p className='--py'>No Tasks Added... Please add a task</p>
        ) : (
          <>
            {
              tasks.map((task, index) => {
                return <Task key={task._id} index={index} task={task} deleteTask={deleteTask} getSingleTask={getSingleTask} setToComplete={setToComplete} />
              })
            }
          </>
        )
      }
    </div>
  );
}

export default TaskList;
