class Home extends React.Component {

  // Renders all the categories in the homepage.
  // Each category is a link to its specific category.
  render() {
    var linkPrefix = "/categories/"
    return(
      <div>
        <h1>Fresh Asparagus Movies</h1>
          <ul>
            {this.props.data.map((category, i) =>
              <a href={linkPrefix.concat(category.id)}><li key={i}> <h1> {category.name} </h1></li></a>
            )}
          </ul>
      </div>
    )
  }
}
