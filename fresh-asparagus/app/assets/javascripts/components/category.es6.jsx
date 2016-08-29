class Category extends React.Component {

  render() {


    var linkPrefix = "/categories/"
    return(
      <div>
      {this.props.data.map((category, i) =>
        <a href={linkPrefix.concat(category.id)}><li key={i}> <h1> {category.name} </h1></li></a>
      )}
      </div>
    )
  }
}
