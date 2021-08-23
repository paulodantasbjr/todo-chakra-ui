import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export const AddTodo = ({ addTodo }) => {
  const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault()
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    const todo = {
      id: nanoid(),
      body: content,
    }

    addTodo(todo)
    setContent('')
  }

  const [content, setContent] = useState('')

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          variant='filled'
          placeholder='Digite um TODO ...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}
