import { Link } from 'react-router-dom'

// style
const body       = {backgroundColor : '#282c34'               }
const styleDoor  = {backgroundColor : 'red'    , color: 'black'}
const styleMain  = {backgroundColor : 'orange' , color: 'black'}
const styleJoin  = {backgroundColor : 'yellow' , color: 'black'}
const styleLogin = {backgroundColor : 'green'  , color: 'black'}

function Header() {
    return (
        <>
        <body style={body}>
            <Link to='/' style={styleDoor}> Door </Link>
            <Link to='/Main' style={styleMain}> Main </Link>
            <Link to='/Join' style={styleJoin}> Join </Link>
            <Link to='/Login' style={styleLogin}> Login </Link>
        </body>

         </>
    )
}
export default Header