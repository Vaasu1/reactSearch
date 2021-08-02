import React from 'react';
import ReactHtmlParser from 'react-html-parser';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

const defaultProps = {};

/**
 * 
 */
class suggesions extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        songs: []
    };
    this.setState({
        songs: this.props.songs
    })

}

componentWillReceiveProps(nextProp){
    this.setState({
        songs: nextProp.songs
    })
}
renderElement(){
    if(this.state.songs != null)
       return (
        <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Artist</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
            {
                this.state.songs.map((songVal, songIndex) => {
                    return <tr>
                        <td>{songVal.id}</td>
                        <td>{ReactHtmlParser(songVal.artist)}</td>
                        <td>{ReactHtmlParser(songVal.title)}</td>
                    </tr>
                })
            }
        </tbody>
        </table>
    );
    return null;
 }
    render() {
        return this.renderElement()
    }
}

suggesions.defaultProps = defaultProps;
// #endregion

export default suggesions;