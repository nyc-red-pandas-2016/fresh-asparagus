class Comment extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  handleSubmit(event) {
    event.preventDefault();
    var filmId = this.props.film.id
    var commentBody = this.refs.commentBody
    $.ajax({
      method: "POST",
      url: "/comments",
      data: {
        comment: {
          body: commentBody.value,
          commentable_id: filmId,
          commentable_type: this.props.parent_class,
          user_id: this.props.user_id
        }
      }
    }).done((response) => {
      // debugger;
      this.refs.commentBody.value = "";
      this.props.updateComments(response);
    })
  }

  // Renders comments for a specific film.
  // Renders a comment form for the film.
  render() {
    return(
      <div>
        {this.props.user_id != 0 ?
          <form onSubmit={this.handleSubmit} action='/comments' method='post' >
            <label>Leave a comment for the film:</label><br/><br/>
            <input ref='commentBody' type='text' name='body'/><br/>
            <input type="submit" value="Create Comment"/>
          </form>
          :
          <h4>Must be logged in to comment</h4>
        }
        <h3>Comments:</h3>

        <ul>
          {this.props.comments.map((comment, i) => {
            return (<li className="comment-item" key={i}>{comment.body}</li>);
          })}
        </ul>
      </div>
    );
  };
};
