import { Component } from "react";
import { Image } from "react-bootstrap";

class Galleria1 extends Component {
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
          .map(film => (
          <div className="CardFilm col-sm-6 col-md-3 col-lg-2 mb-3 px-1" >
            <Image className="img-fluid" src={film.Poster} alt={"alt"} />
            <div className="text-center">
                <h6>{film.Title} </h6>
                <h6>{film.Year}</h6>
            </div>
          </div>
        ))}
        </div>)
        
    }
};

export default Galleria1;
