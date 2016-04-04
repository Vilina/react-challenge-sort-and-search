import React from 'react';

var SearchBar = React.createClass({
    render(){
        return (
            <div className="row">
                <div className="col-sm-12  ">
                    <div className="form-group">
                        <input type="text" className="form-control" id="search_input" placeholder="Search..." onChange={() => this.props.onSearchUpdate(document.getElementById('search_input').value)}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default SearchBar;
