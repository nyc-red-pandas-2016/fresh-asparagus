class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  };

  // componentDidMount() {
  //
  //   $.ajax({
  //     url: '/categories/show',
  //     method: 'GET'
  //   }).done((response) => {
  //     this.setState({
  //       categories: response
  //     });
  //   });
  //
  // };

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
