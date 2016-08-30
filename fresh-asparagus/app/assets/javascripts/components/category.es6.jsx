class Category extends React.Component {

  // Renders all the movies of a specific category.
  render() {
    var filmLink = "/films/"
    return(
      <div>
        <ul>
        {this.props.data.map((film, i) =>
          <li key={i}><a href={filmLink.concat(film.id)}><h1> {film.title}</h1></a></li>
        )}
        </ul>
      </div>
    )
  }
}
