var React = require('react')

module.exports = React.createClass({
    voteUp: function(e){
      var newCount = parseInt(this.props.voteCount, 10) + 1;
      this.props.onVote(this.props.questionKey, newCount)
    },
    voteDown: function(e){
      var newCount = parseInt(this.props.voteCount, 10) - 1;
      this.props.onVote(this.props.questionKey, newCount)
    },
    render: function(){
        return (
        <div className="media">
            <div className="media-left">
              <button onClick={this.voteUp} className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-up"></span>
                <span className="vote-count">{this.props.voteCount}</span>
              </button>
              <button onClick={this.voteDown} className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.title}</h4>
              <p>{this.props.description}</p>
            </div>
          </div>
        )
    }
})