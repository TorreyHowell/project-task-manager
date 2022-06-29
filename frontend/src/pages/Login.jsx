import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const loginSubmit = (e) => {
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))

    e.preventDefault()
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <h2 className="text-center text-4xl">Login</h2>

      <form onSubmit={loginSubmit} className="mt-5 text-center">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            value={email}
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={password}
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <button className="btn btn-wide my-3">Login</button>
        </div>
        <Link className="hover:text-teal-200" to={'/create-account'}>
          Sign-Up?
        </Link>
      </form>
    </>
  )
}

export default Login
