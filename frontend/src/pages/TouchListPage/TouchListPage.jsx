import { Link } from 'react-router-dom'

export default function TouchListPage(props) {
      console.log(props)
  return (
    <div class="flex-container">
    <h1>PLAYER SESSIONS</h1>
      <main>
  {props.touches.map(touch => (
    <Link key={touch._id} to={`/touches/${touch._id}/edit`}>
      <article>
      <div class="box one">{touch.Session}</div> 
      
      <div class="box two">{touch.Location}</div> 
      <div class="box three">{touch.Date}</div> 
      <div class="box four">{touch.Time}</div> 
      <button onClick={() => handleDeleteTouch(touch._id)} >DELETE</button>
      </article>
      </Link>
    ))} 
    </main>
    </div>
  )
}