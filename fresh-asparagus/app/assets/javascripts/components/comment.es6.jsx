class Comment extends React.Component {

  // constructor() {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

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
        body: commentBody.value,
        id: filmId,
        user_id: 1
      }
    }).done((response) => {
      debugger;
    })
  }

  // Renders comments for a specific film.
  // Renders a comment form for the film.
  render() {
    return(
      <div>
        <h3>Comments:</h3>
          <form onSubmit={this.handleSubmit.bind(this)} action='/comments' method='post' >
            <label>Leave a comment for the film:</label>
            <input ref='commentBody' type='text' name='body'/>
            <input type="submit" value="Create Comment"/>
          </form>
        <ul>
          {this.props.comments.map((comment, i) =>
            <li key={i}>{comment.body}</li>
          )}
        </ul>
      </div>
    );
  };
};
