import { FaSignInAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
            {user ? (
              <button
                onClick={onLogout}
                className="btn btn-ghost normal-case text-xl"
              >
                <FaSignInAlt /> <p className="ml-1">Sign-out</p>
              </button>
            ) : (
              <Link to={'/login'} className="btn btn-ghost normal-case text-xl">
                <FaSignInAlt /> <p className="ml-1">Login</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
