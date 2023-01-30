import { Router } from 'express'
import { createTodo, getTodo, updateTodo, deleteTodo } from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router
