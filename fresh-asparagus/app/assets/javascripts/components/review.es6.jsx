class Review extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var filmId = this.props.film.id
    var contentBody = this.refs.content.value
    $.ajax({
      method: "POST",
      url: "/reviews",
      data: {
        review: {
          content: contentBody,
          film_id: filmId,
          star_rating: parseInt(this.refs.starRating.value),
          user_id: this.props.user_id
        }
      }
    }).done((response) => {
      this.refs.content.value = "";
      this.props.updateReviews(response);
    })
  }

  // Renders comments for a specific film.
  // Renders a comment form for the film.
  render() {
    return(
      <div>
        <h3>Reviews:</h3>
          {this.props.trusted ?
            <form onSubmit={this.handleSubmit} action='/reviews' method='post' >
              <label>Review the film:</label>
              <input ref='starRating' type='number' name='body'/>
              <input ref='content' type='text' name='body'/>
              <input type="submit" value="Create Review"/>
            </form>
            :
            <h4>Must have permission to review this film.</h4>
          }
        <ul>
          {this.props.reviews.map((review, i) => {
            return (
              <ul key={i}>
                <li>{review.star_rating.toString()}</li>
                <li>{review.content}</li>
                {/* <li><Comment updateComments={this.updateComments} user_id={this.props.user_id} parent_class="Review" comments={this.state.comments} film={this.props.film}/></li> */}
              </ul>
            );
          })}
        </ul>
      </div>
    );
  };
};
