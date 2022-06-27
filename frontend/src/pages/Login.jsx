import { Link } from 'react-router-dom'

function Login() {
  const loginSubmit = (e) => {
    e.preventDefault()
    alert('submit')
  }
  return (
    <>
      <h2 className="text-center text-4xl">Login</h2>

      <form onSubmit={loginSubmit} className="mt-5 text-center">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
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
