import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="container">
          <div className="flex-1">
            <Link to={'/'} className="normal-case text-xl ml-2 ">
              Task Manager
            </Link>
          </div>
          <div className="flex-none">
            <Link to={'/login'} className="btn btn-ghost normal-case text-xl">
              <FaSignInAlt /> <p className="ml-1">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
