import {createRoot} from 'react-dom/client'
import {App} from './shared/App'
// import React from 'react'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(<App></App>)
