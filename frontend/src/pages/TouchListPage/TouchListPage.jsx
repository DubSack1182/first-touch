import { Link } from 'react-router-dom';

export default function TouchListPage(props) {
  return (
    <>
    <h1>Session List Page</h1>
      <main>
    {props.touches.map((touch) => (
      <Link key={touch._id} to={`/touches/${touch._id}`}>
        <article>
          <header>
            <h2>{touch.title}</h2>
            <p>
              {touch.author.username} posted on 
              {new Date(touch.createdAt).toLocaleDateString()}
            </p>
          </header>
          <p>{touch.text}</p>
        </article>
      </Link>
    ))}
  </main>
  </>
  
)
}