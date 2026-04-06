const Login = ({ onLogin }) => {
  const handleLogin = () => {
    const fakeToken = "fake-jwt-token-123"
    localStorage.setItem("authToken", fakeToken)
    onLogin()
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login