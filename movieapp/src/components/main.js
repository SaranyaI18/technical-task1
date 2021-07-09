import React, {Component} from 'react';

class main extends Component{

    constructor(props) {
        super(props)   
        this.state = {
            movie: [],
            
        }
    }

    componentDidMount() {
        this.listing();
      }
  
    listing = () =>{
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=abe4a464921755443f6f180a59aab7b4&page=1`)
      .then(res => res.json())
      .then(res=>{
          console.log(res.results)
          //this.setState({movie:res.results})
      })
      
      .catch(error => console.log(error))

    }


      render(){
          console.log(this.state.movie)
        const {movie} = this.state;
      return(
        <div className='container'>
      
  
            <div>
                
                {movie.filter(val=>{
                     if (movie == ""){
                         return val
                     }else if(val.title.toLowercase().includes(movie.toLowercase())){
                         return val
                     }
            }
                   
                ).map(el =>{
                    return(
                        <div>
                            {el.title}
                        </div>
                    )
                })}
                
            </div>
            
           
        </div>
        
      )
    }
  
    
  }


export default main;
  
  
