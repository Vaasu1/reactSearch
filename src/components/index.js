import React from 'react';
import axios from 'axios';
import Suggesions from './partials/suggesions';
import XMLParser from 'react-xml-parser';
// #region constants

// #endregion

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
class Index extends React.Component {
constructor(props) {
    super(props);
    this.handleSearch = this.keyUpHandler.bind(this, 'searchSong');
    this.state = {
        songs: []
    };
}

searchSongs(search){
    axios.get('http://www.songsterr.com/a/ra/songs.xml?pattern='+search).then( (response) => {
        
        var xml = new XMLParser().parseFromString(response.data)
        var rows = []
        xml.children.forEach(child => {
            var row = {id:"", title:"", artist:"", search:""}
            // console.log(child)
            row.search = search
            row.id = child.attributes.id
            child.children.forEach(element => {
                var regx = new RegExp(search,'ig')
                switch (element.name) {
                    case 'title':
                        row.title =  element.value.replace(regx,'<span class="highlight">'+search+'</span>')
                    break;
                    case 'artist':
                        element.children.forEach(artist => {
                            if(artist.name == 'name'){
                                row.artist = artist.value.replace(regx,'<span class="highlight">'+search+'</span>')
                            }
                        });
                    break;    
                
                    default:
                        break;
                }

            });
            rows.push(row)
        });
        console.log(xml.children)
        this.setState({
            'songs':rows
        });
        console.log(xml.children[0])

    })
}

keyUpHandler(refName, e) {
    
    switch (refName) {
        case "searchSong":
                this.searchSongs(e.target.value)
            break;
    
        default:
            break;
    }
}

    render() {
        return (
            <div className="Index">              
              <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 mt-5">
                        <div className="input-group">
                          <input type="search" id="search" className="form-control" placeholder="Search" onKeyUp={this.handleSearch}  />
                          <button type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>     
                        <div className="suggesions">
                            <Suggesions songs={this.state.songs} />
                        </div>           
                      </div>
                    </div>
              </div>
            </div>
          );
    }
}

// #endregion

export default Index;