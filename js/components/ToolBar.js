import React from 'react';

var ToolBar = React.createClass({
    render(){
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <button className="btn btn-default" onClick={() => this.props.onNameSort(!this.props.sortDir)}>
                            <i className="icon fa fa-sort-alpha-asc"></i>
                            <span>  Sort by name</span></button>
                        <button className="btn btn-default" onClick={() => this.props.onAgeSort(!this.props.sortDir)}>
                            <i className="icon fa fa-sort-numeric-desc"></i>
                            <span>  Sort by age</span></button>
                    </div>
                </div>
            </div>
        );
    }
});


export default ToolBar;