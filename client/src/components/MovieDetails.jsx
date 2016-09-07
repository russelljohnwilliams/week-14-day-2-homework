var React = require('react')

var MovieDetails = function(props){
console.log(props)
  if(!props.movie){

    return(
      <p>I've got nothing for you</p>
      )
  }
  return(
    <div>
    <h3>{props.movie.show_title}</h3>
    <p>{props.movie.summary}</p>
    <p>{props.movie.poster}</p>
    </div>
    )
}


module.exports = MovieDetails