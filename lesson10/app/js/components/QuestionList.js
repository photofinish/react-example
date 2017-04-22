var React = require('react')
var QuestionItem = require('./QuestionItem')

module.exports = React.createClass({
    
    render: function() {
        var questions = this.props.questions;
        if (!Array.isArray(questions)) throw new Error('questions must be a Array')
        var questionComps = questions.map(function(qst){
            return (
                <QuestionItem key={qst.key}
                title={qst.title}
                questionKey={qst.key}
                onVote={this.props.onVote}
                description={qst.description}
                voteCount={qst.voteCount} />
            )
        }.bind(this))
        return (
        <div id="questions" className="">
          {questionComps}
        </div>
        )
    }
})