import './SelectedColorSquare.css'

export function SelectedColorSquare ({ color }) {
    return <div className="current-color" style={{ backgroundColor: color }}></div>
}
