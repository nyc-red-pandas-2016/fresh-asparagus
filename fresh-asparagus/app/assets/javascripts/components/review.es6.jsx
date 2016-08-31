class Review extends React.Component {

  // Renders comments for a specific film.
  // Renders a comment form for the film.
  render() {
    return(
      <div>
        <ul className="comment-item">
          <li>{this.props.starRating}</li>
          <li>{this.props.content}</li>
        </ul>
      </div>
    );
  };
};
