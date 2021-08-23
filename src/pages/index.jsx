import { useEffect, useState } from 'react'
import {
  Heading,
  IconButton,
  useColorMode,
  VStack,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { AddTodo } from '../components/AddTodo'
import { TodoList } from '../components/TodoList'

const Index = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(todo)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack p={4} h='100vh' w='100vw'>
      <Flex justify='flex-end' w='100%'>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          isRound='true'
          size='lg'
          onClick={toggleColorMode}
        />
      </Flex>
      <VStack h='100%' w='100%' justify='space-evenly' mb='4'>
        <Flex
          w='100%'
          h='50%'
          align='center'
          justify='space-between'
          direction='column'
          style={{ gap: '1rem' }}
        >
          <Heading
            fontWeight='extrabold'
            size='2xl'
            bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
            bgClip='text'
          >
            Todo Application
          </Heading>

          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <AddTodo addTodo={addTodo} />
        </Flex>
      </VStack>
    </VStack>
  )
}

export default Index
