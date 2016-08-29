class Category extends React.Component {


  render() {
    var link = "/films/"
    return(
      <div>
        <ul>
        {this.props.data.map((film, i) =>
          <li key={i}><a href={link.concat(film.id)}><h1> {film.title}</h1></a></li>
        )}
        </ul>
      </div>
    )
  }
}
