class Vote extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // debugger;
    $.ajax({
      method: "POST",
      url: "/votes",
      data: {
        vote: {
          votable_id: this.props.parent_id,
          votable_type: this.props.parent_class,
          user_id: this.props.user_id
        }
      }
    }).done((response) => {
      // debugger;
      this.props.updateVotes(response);
    })
  }

  render() {
    return(
      <div>
        {this.props.user_id != 0 ?
          <form onSubmit={this.handleSubmit} action='/votes' method='post' >
            <input type="submit" value="Vote"/>
          </form>
          :
          <h4>Must be logged in to vote</h4>
        }
        <p>Votes: {this.props.votes}</p>
      </div>
    );
  };
};
