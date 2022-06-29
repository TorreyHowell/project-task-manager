import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/')
      console.log(user)
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const createAccountSubmit = (e) => {
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }

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
      <h2 className="text-center text-4xl">Sign-Up</h2>

      <form onSubmit={createAccountSubmit} className="mt-5 text-center">
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mt-3">
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <button className="btn btn-wide my-3">Submit</button>
        </div>
        <Link className="hover:text-teal-200" to={'/login'}>
          Already Have An Account?
        </Link>
      </form>
    </>
  )
}

export default SignUp
