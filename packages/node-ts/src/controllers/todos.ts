import { Request, Response, NextFunction, RequestHandler } from 'express'

import { Todo } from '../models/todo'

// 类也是类型
const TODOS: Todo[] = []

// post 请求 去添加todo
export const createTodo: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const text = (req.body as { text: string }).text
  const newTodo = new Todo(Math.random().toString(), text)

  TODOS.push(newTodo)

  res.status(201).json({ message: 'Created the todo', createTodo: newTodo })
}

// get 请求
export const getTodo: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: 'Get The Todo Successfully', todos: TODOS })
}

// patch 请求
export const updateTodo: RequestHandler<{ id: string }> = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.params.id // 获取到url中params的值
  const updatedText = (req.body as { text: string }).text
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId)

  // 如果find的index为-1则没有找到
  if (todoIndex < 0) {
    throw new Error('Could not find this todo! Please check again.')
  } else {
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
    res
      .status(201)
      .json({ message: 'Updated Successfully!', updatedTodo: TODOS[todoIndex] })
  }
}

// delete 请求
export const deleteTodo: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = req.params.id // 获取到url中params的值
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId)

  // 如果find的index为-1则没有找到
  if (todoIndex < 0) {
    throw new Error('Could not find this todo! Please check again.')
  } else {
    TODOS.splice(todoIndex, 1) // 删除那个元素
    // 如果这里的状态码设置为204的话，即使删除数据成功也不会返回数据
    res
      .status(200)
      .json({ message: 'Delete Successfully!'})
  }
}
