
import UseGenre from '../hook/useGenre'

const GenreList = () => {
   const {genres}= UseGenre();
  return (
    <div>
      <ul>
        {genres.map(genre=><li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  )
}

export default GenreList
