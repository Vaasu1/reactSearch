import React from 'react';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
class Header extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return ( 
        <div className="header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Search Songs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    
                </div>
                </div>
            </nav>
        </div>
    );
    }
}

// #endregion

export default Header;