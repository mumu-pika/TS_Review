// const express = require('express') // nodejs环境默认使用commonjs的语法
// 但是在ts环境下，我们可以使用es6的import语法
import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import todoRoutes from './routes/todos'

const app = express()

app.use(json())

app.use('/todos', todoRoutes)

// 添加上type类型
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(3000, () => {
  console.log('Server is listening on 3000...')
})
