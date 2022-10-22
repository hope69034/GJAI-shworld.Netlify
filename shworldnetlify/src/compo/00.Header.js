import { Link } from 'react-router-dom'

// style
const body       = {backgroundColor : '#282c34'               }
const styleDoor  = {backgroundColor : 'red'    , color: 'black'}
const styleResume  = {backgroundColor : 'orange' , color: 'black'}
const styleProject1 = {backgroundColor : 'yellow'  , color: 'black'}
const styleProject2 = {backgroundColor : 'green'  , color: 'black'}

function Header() {
    return (
        <>
        <body style={body}>
            <Link to='/' style={styleDoor}> Door </Link>
            <Link to='/Resume' style={styleResume}> Resume </Link>
            <Link to='/Project1' style={styleProject1}> Project1 </Link>
            <Link to='/Project2' style={styleProject2}> Project2 </Link>
        </body>

        </>
    )
}
export default Header