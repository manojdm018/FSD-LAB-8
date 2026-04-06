const Dashboard = ({ onLogout }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Dashboard</h2>
      <p>You are logged in ✅</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Dashboard