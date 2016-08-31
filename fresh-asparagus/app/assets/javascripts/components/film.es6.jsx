class Film extends React.Component {

  // renders a specific film with its description.
  // Also renders a 'Comment' component.

  constructor() {
    super();
    this.state = {
      comments: [],
      reviews: [],
      votes: 0
    }
    this.updateComments = this.updateComments.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
  }

  componentDidMount() {
    this.updateComments(null);
    this.updateReviews(null);
    this.setState({votes: this.props.votes});
  }

  updateComments(newComment) {
    if (newComment) {
      this.setState({comments: this.state.comments.concat(newComment)});
    } else {
      this.setState({comments: this.props.comments})
    }
  }

  updateReviews(newReview) {
    if (newReview) {
      this.setState({reviews: this.state.reviews.concat(newReview)});
    } else {
      this.setState({reviews: this.props.reviews})
    }
  }

  updateVotes(newVote) {
    if (newVote) {
      this.state.votes++;
      this.setState({votes: this.state.votes});
    } else {
      this.setState({votes: this.state.votes});
    }
  }

  render() {
    let film = this.props.film
    return(
      <div>
        <h1>{film.title}</h1>
        Director: {film.director}
        <p>Plot: {film.summary}</p>
        Year: {film.year}<br/>
        <Vote updateVotes={this.updateVotes} votes={this.state.votes} parent_class="Film" parent_id={film.id} user_id={this.props.user_id}/>

        <Reviews updateReviews={this.updateReviews} user_id={this.props.user_id} reviews={this.state.reviews} film={this.props.film} isAdmin={this.props.isAdmin}/>
        <Comments updateComments={this.updateComments} user_id={this.props.user_id} parent_class="Film" comments={this.state.comments} parentID={this.props.film.id}/>
      </div>
    )
  }
}
