import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'



import './index.css'
import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'
import { Layout } from './useLayoutEffect/Layout'
import { Memorize } from './memos/Memorize'
import { MemoHook } from './memos/MemoHook'
import { CallbackHook } from './memos/CallbackHook'





ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <CallbackHook />
  //</React.StrictMode>
)