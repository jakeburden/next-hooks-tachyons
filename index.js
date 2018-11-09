import { useState } from 'react'
import 'tachyons'

export default () => {
  const [name, setName] = useState('')

  return (
    <main className='ma5'>
      <div className='sans-serif'>
        <p className='h1 measure lh-copy'>{name && `Hello, ${name} 👋`}</p>
        <input className='input-reset ba b--black pa2' placeholder='Name' onInput={(e) => setName(e.target.value)} />
      </div>
    </main>
  )
}
