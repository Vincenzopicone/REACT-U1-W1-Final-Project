import { Component } from "react";
/* import { Image } from "react-bootstrap"; */
import CardFilm from "./CardFilm";

class Galleria extends Component {
    state = {
        Search:[]
    }

    fetchFilm = async () => {
        try {
            const response = await fetch ("http://www.omdbapi.com/?apikey=c6fbb83e&s="+this.props.film);
            
            if (response.ok) {
                const data = await response.json();
                this.setState({
                    "Search": data.Search})
            } else {             
            }
        } catch (error) {
            console.log("Errore caricamento", error)
        }
    }

    componentDidMount = () => {
        this.fetchFilm()
    }
    
    render () {
        
        return (
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          {this.state.Search.filter(film=> film.Type==="movie" && film.Year > 2000)
          .map(film => ( <CardFilm key={film.imdbID} img={film.Poster} title={film.Title} year={film.Year} imdbID={film.imdbID} /> ))}        
        </div>)
        
    }
};

export default Galleria;
