import { Link } from 'react-router-dom'

export default function TouchListPage(props) {
      console.log(props)
  return (
    <div class="flex-container">
    <h1>PLAYER SESSIONS</h1>
      <main>
  {props.touches.map(touch => (
    <Link key={touch._id} to={'/touches/:touchId/edit'}>
      <article class="bigbox">
      <div class="boxone">{touch.Session}</div> 
      <div class="boxtwo">{touch.Location}</div> 
      <div class="boxthree">{touch.Date}</div> 
      <div class="boxfour">{touch.Time}</div>
      <button onClick={() => props.handleUpdateTouch(touch._id)} >UPDATE</button> 
      <button onClick={() => props.handleDeleteTouch(touch._id)} >DELETE</button>
      </article>
      </Link>
    ))} 
    </main>
    </div>
  )
}