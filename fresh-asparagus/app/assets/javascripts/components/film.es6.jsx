class Film extends React.Component {

  // renders a specific film with its description.
  // Also renders a 'Comment' component.

  constructor() {
    super();
    // debugger;
    this.state = {
      comments: [],
      reviews: []
    }
    // debugger;
    this.updateComments = this.updateComments.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
  }

  componentDidMount() {
    this.updateComments(null);
    this.updateReviews(null);
  }

  updateComments(newComment) {
    // debugger;
    if (newComment) {
      this.setState({comments: this.state.comments.concat(newComment)});
    } else {
      this.setState({comments: this.props.comments})
    }
  }

  updateReviews(newReview) {
    // debugger;
    if (newReview) {
      this.setState({reviews: this.state.reviews.concat(newReview)});
    } else {
      this.setState({reviews: this.props.reviews});
    }
  }

  render() {
    let film = this.props.film
    return(
      <div>
        <h1>{film.title}</h1>
        Director: {film.director}
        <p>Plot: {film.summary}</p>
        Year: {film.year}

        <Review updateReviews={this.updateReviews} user_id={this.props.user_id} reviews={this.state.reviews} film={this.props.film}  trusted={this.props.trusted}/>
        <Comment updateComments={this.updateComments} user_id={this.props.user_id} parent_class="Film" comments={this.state.comments} film={this.props.film}/>
      </div>
    )
  }
}
