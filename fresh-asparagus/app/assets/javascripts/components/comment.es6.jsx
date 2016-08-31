class Comment extends React.Component {

  constructor() {
    super();
    this.state = {
      votes: 0
    }
    this.updateVotes = this.updateVotes.bind(this);
    this.numberOfVotes = this.numberOfVotes.bind(this);
  }

  componentDidMount() {
    this.numberOfVotes();
  }

  numberOfVotes() {
    $.ajax({
      method: "GET",
      url: "/comments/" + this.props.comment.id.toString(),
    }).done((response) => {
      this.setState({votes: parseInt(response)});
    })
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
          <li>{this.props.comment.body}</li>
          <Vote updateVotes={this.updateVotes} votes={this.state.votes} parent_class="Comment" parent_id={this.props.comment.id} user_id={this.props.user_id}/>
        </ul>
      </div>
    );
  };
};
