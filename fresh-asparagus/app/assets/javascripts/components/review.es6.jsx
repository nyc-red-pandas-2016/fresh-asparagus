class Review extends React.Component {

  constructor() {
    super();
    this.state = {
      comments: [],
      votes: 0
    }
    this.updateVotes = this.updateVotes.bind(this);
    this.updateComments = this.updateComments.bind(this);
    this.numberOfVotes = this.numberOfVotes.bind(this);
    this.reviewComments = this.reviewComments.bind(this);
  }

  componentDidMount() {
    this.numberOfVotes();
    this.reviewComments();
  }

  numberOfVotes() {
    $.ajax({
      method: "GET",
      url: "/reviews/" + this.props.review.id.toString(),
    }).done((response) => {
      this.setState({votes: parseInt(response)});
    })
  }

  reviewComments() {
    $.ajax({
      method: "GET",
      url: "/asparagus/" + this.props.review.id.toString(),
    }).done((response) => {
      // debugger;
      this.setState({comments: response});
    })
  }

  updateComments(newComment) {
    // debugger;
    if (newComment) {
      this.setState({comments: this.state.comments.concat(newComment)});
    } else {
      this.setState({comments: this.props.comments})
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
    return(
      <div>
        <ul className="comment-item">
          <li>{this.props.review.star_rating}</li>
          <li>{this.props.review.content}</li>
          <Vote updateVotes={this.updateVotes} votes={this.state.votes} parent_class="Review" parent_id={this.props.review.id} user_id={this.props.user_id}/>
          <h3>Comments on this Review:</h3>
          <Comments updateComments={this.updateComments} user_id={this.props.user_id} parent_class="Review" comments={this.state.comments} parentID={this.props.review.id}/>
        </ul>
      </div>
    );
  };
};
