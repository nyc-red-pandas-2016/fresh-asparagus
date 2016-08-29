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

    return(
      <div>
        <h1>Fresh Asparagus Movies</h1>
          <ul>
            <Category data={this.props.data} />
          </ul>
      </div>
    )
  }
}
