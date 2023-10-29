import React from 'react'
import { Main, MainServer } from "./Main";

export function App() {
    return <html>
    <head>
        <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
    </head>
    <body>
    <div id='root'>
        <Main/>
    </div>
    <script src='./app.bundle.js'></script>
    </body>
    </html>
}

export const MainComponent = Main