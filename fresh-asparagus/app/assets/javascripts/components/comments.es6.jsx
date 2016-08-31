class Comments extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var commentableID = this.props.parentID
    var commentBody = this.refs.commentBody
    $.ajax({
      method: "POST",
      url: "/comments",
      data: {
        comment: {
          body: commentBody.value,
          commentable_id: commentableID,
          commentable_type: this.props.parent_class,
          user_id: this.props.user_id
        }
      }
    }).done((response) => {
      this.refs.commentBody.value = "";
      this.props.updateComments(response);
    })
  }

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
        {this.props.comments.map((comment, i) => {
          return (
            <ul key={i}>
              <Comment comment={comment} user_id={this.props.user_id}/>
            </ul>
          );
        })}
      </div>
    );
  };
};
