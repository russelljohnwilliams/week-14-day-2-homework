var React = require('react')

var MovieSelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleChange: function(element){
    var newIndex = element.target.value
    this.setState({selectedIndex: newIndex})
    this.props.setCurrentMovie(this.props.movies[newIndex])
  },

  render: function(){
    var movies = this.props.movies.map(function(movie, index){
      return(
        <option value={index} key={index}>
        {movie.show_title}
        </option>
        )
    }.bind(this))
    return(
      <select value={this.state.selectedIndex} onChange={this.handleChange}>
      {movies}
      </select>
      )
  }


})

module.exports = MovieSelect
