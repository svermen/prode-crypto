import React, { useState } from "react"
import {count} from '../stores/count'
import {useStore} from '@nanostores/react'

export default function Example() {
  // Declaración de una variable de estado que llamaremos "count"  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0)
  const $count = useStore(count)
  return (
    <div>
      <p>You clicked {$count} times</p>
      <button onClick={() => count.set($count + 1)}>Click me</button>
    </div>
  )
}
