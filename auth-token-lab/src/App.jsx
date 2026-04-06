import { useEffect, useState } from "react"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsAuthenticated(false)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Auth Token Lab</h1>

      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App