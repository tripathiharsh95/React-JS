import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='bg-gray-700 text-orange-600 rounded-2xl p-5 w-[800px]'>
        <p className='text-2xl text-white mb-4 text-center'>Password Generator</p>

        <div className='flex w-full gap-0'>
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className='bg-white text-orange-500 font-bold h-11 w-full px-4 text-ms rounded-l-full focus:outline-none'
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='px-4 text-sm rounded-r-full hover:bg-blue-700'
          >
            copy
          </button>
        </div>
        <div className='flex justify-evenly'>
          <div className='mt-3'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='mt-3'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charinput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>

          <div className='mt-3'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberinput'
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
        </div>


      </div>
    </div>


  )
}
export default App

