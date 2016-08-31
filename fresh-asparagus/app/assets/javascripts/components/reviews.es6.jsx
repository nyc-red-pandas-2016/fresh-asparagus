class Reviews extends React.Component {

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

          {this.props.isAdmin ?
            <form onSubmit={this.handleSubmit} action='/reviews' method='post' >
              <label>Review the film:</label><br/><br/>
              How many stars would you give this movie?<br/><input ref='starRating' type='number' name='body'/><br/>
              What do you have to say about it?<br/>
              <input ref='content' type='text' name='body'/><br/>
              <input type="submit" value="Create Review"/>
            </form>
            :
            <h4>Must have permission to review this film.</h4>
          }
          <h3>Reviews:</h3>
        <ul>
          {this.props.reviews.map((review, i) => {
            return (
              <ul key={i}>
                <Review review={review} user_id={this.props.user_id}/>
              </ul>
            );
          })}
        </ul>
      </div>
    );
  };
};
