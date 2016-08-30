class Film extends React.Component {

  // renders a specific film with its description.
  // Also renders a 'Comment' component.
  render() {
    let film = this.props.film
    return(
      <div>
        <h1>{film.title}</h1>
        Director: {film.director}
        <p>Plot: {film.summary}</p>
        Year: {film.year}

        <h3>Reviews:</h3>

        <Comment comments={this.props.comments} film={this.props.film}/>
      </div>
    )
  }
}
