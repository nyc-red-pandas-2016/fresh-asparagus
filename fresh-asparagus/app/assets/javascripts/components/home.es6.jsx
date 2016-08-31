class Home extends React.Component {

  // Renders all the categories in the homepage.
  // Each category is a link to its specific category.
  render() {
    var linkPrefix = "/categories/"
    return(
      <div id="home-wrapper">
        <img src="https://metrouk2.files.wordpress.com/2015/10/giphy15.gif" alt="Mountain View"/>
        <h1>View all categories</h1>
          <ul>
            {this.props.data.map((category, i) =>
              <a href={linkPrefix.concat(category.id)}><li key={i}> <h3> {category.name} </h3></li></a>
            )}
          </ul>
      </div>
    )
  }
}
