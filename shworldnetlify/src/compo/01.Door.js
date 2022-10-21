import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

function Door() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    AI Life Concierge System
                    <Link to='/Main' ><img src={logo} className="App-logo" alt="logo" /></Link>
                    Team Eclipse
                </header>
            </div>

        </>
    )
}
export default Door;