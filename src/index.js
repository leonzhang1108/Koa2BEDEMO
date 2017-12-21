import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hello from './pages/hello'

export default ReactDOMServer.renderToString(<Hello/>)