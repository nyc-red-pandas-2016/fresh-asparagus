class Category extends React.Component {

  // Renders all the movies of a specific category.
  render() {
    var filmLink = "/films/"
    return(
      <div id="category-wrapper">
      <iframe src="//giphy.com/embed/5YNbv4BFFPcIg" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h1>View All Movies in This Category</h1>
        <ul>
        {this.props.data.map((film, i) =>
          <li key={i}><a href={filmLink.concat(film.id)}><h3> {film.title}</h3></a></li>
        )}
        </ul>
      </div>
    )
  }
}
