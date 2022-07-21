import { useState } from 'react'
import './App.css'
// import { Button } from '@mantine/core';
// import { Menu, Divider, Text } from '@mantine/core';
import ReactDOMServer from 'react-dom/server'
import { LogoIcon } from './assets/logo.jsx';
import { Copy, Settings, Grid, Clock } from 'react-feather';
import { SelectedColorSquare } from './components/SelectedColorSquare.jsx';

setIcon()

function setIcon (color) {
    let string = ReactDOMServer.renderToStaticMarkup(<LogoIcon color={color}/>)
    console.log(string)

    let imageUrl = URL.createObjectURL(
        new Blob([string], { type: 'image/svg+xml;charset=utf-8' })
    )

    let image = new Image()
    image.src = imageUrl
    image.onload = function () {
        const canvas = new OffscreenCanvas(48, 48)
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, 48, 48)
        context.drawImage(this, 0, 0)
        URL.revokeObjectURL(imageUrl)

        chrome.action.setIcon({ imageData: context.getImageData(0, 0, 48, 48) })
    }
}

export function App () {
    const [color, setColor] = useState(null)

    async function openColorPicker () {
        let eyeDropper = new EyeDropper()
        let colorResult = await eyeDropper.open()
        setColor(colorResult.sRGBHex)
        setIcon(colorResult.sRGBHex)
    }

    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={openColorPicker}>
                        <SelectedColorSquare color={color}/>
                        Pick a color { color ? `(${color})` : ''}
                    </button>
                </li>
                <li className="menu-item">
                    <button className="menu-button"><Copy/>Copy to clipboard</button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => window.location = 'picker.html'}>
                        <Grid/>Color picker
                    </button>
                </li>
                <li className="menu-item">
                    <button className="menu-button"><Clock/>History</button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button"><Settings/>Options</button>
                </li>
            </ul>
        </div>
    )
}
