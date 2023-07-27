const RoboItem = ({ robo }) => {
  return (
    <div>
      <img src={`https://robohash.org/${robo.id}`} alt={robo.id} />
      <span className="bold">{robo.name}</span>
      <p>{robo.email}</p>
      <p>{robo.username}</p>
    </div>
  )
}

export default RoboItem
