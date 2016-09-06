var React = require('react')
var MovieSelect = require('./MovieSelect')
var MovieDetails = require('./MovieDetails')

var MoviesBox = React.createClass({

  getInitialState: function(){
    return {movies:[], currentMovie: null}
  },

  setCurrentMovies: function(movie){
    this.setState({currentMovie: movie})
  },

  componentWillMount: function(){
    var url = 'http://netflixroulette.net/api/api.php?actor=Christopher%20Walken'
    var request = new XMLHttpRequest()
    request.open( "GET", url )
    request.onload = function(){
      if (request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState({movies:data, currentMovie: data[0]})
      }
    }.bind(this)
    request.send(null)
  },

  render: function(){
    return(
      <div>
      <h4>film</h4>
      <MovieSelect movies={this.state.movies} setCurrentMovies={this.setCurrentMovies} />
      <MovieDetails movies={this.state.CurrentMovie} />
      </div>
      )
  }


})


module.exports = MoviesBox