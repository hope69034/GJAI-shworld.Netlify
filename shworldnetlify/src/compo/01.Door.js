import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

function Door() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                The Curious Developer SeHyoung
                    <Link to='/Resume' ><img src={logo} className="App-logo" alt="logo" /></Link>
                    Welcome to SHworld
                </header>
            </div>

        </>
    )
}
export default Door;