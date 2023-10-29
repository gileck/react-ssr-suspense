const path = require('path')
const fs = require('fs')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const express = require('express')
const HtmlWritable = require('./HtmlWritable')
const { App } = require('./server.bundle')
const app = express();

app.get('/', (req, res) => {
    const stream = ReactDOMServer.renderToPipeableStream(
        React.createElement(App), {
            onShellReady: () => {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            onError: (error) => {
                console.log("ERROR:", error);
            }
        }
    )
})

function renderToString(ReactEntry) {
    return new Promise(resolve => {
        const writable = new HtmlWritable();
        const stream = ReactDOMServer.renderToPipeableStream(
            React.createElement(ReactEntry), {
                onShellReady: () => stream.pipe(writable),
            }
        );
        writable.on('finish', () => resolve(writable.getHtml()));
    })
}


app.use(express.static('./'));

app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
