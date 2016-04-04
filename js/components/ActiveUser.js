import React from 'react';

var ActiveUser = React.createClass({
    render(){
        if (!this.props.activeUser) {
            return <div className="col-sm-2"><h3>Not Found</h3></div>;
        }
        console.log(this.props.activeUser);
        return (
            <div className="col-sm-2">
                <div className="thumbnail">
                    <img src={'./images/' + this.props.activeUser.image + '.svg'} className=""/>
                    <div className="text-center">
                        <h3 >{this.props.activeUser.name}</h3>
                        <table className="user-info table table-responsive">
                            <tbody >
                            <tr   >
                                <td >Age:</td>
                                <td >{this.props.activeUser.age}</td>
                            </tr>
                            <tr >
                                <td >Favorite animal:</td>
                                <td >{this.props.activeUser.image}</td>
                            </tr>
                            <tr >
                                <td >Phone:</td>
                                <td >
                                    <span >8 </span>
                                    <span>{this.props.activeUser.phone}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p >
                            <b >Favorite phrase:</b>
                            <span> </span>
                            <span>{this.props.activeUser.phrase}</span>
                        </p></div>
                </div>
            </div>
        )
    }
});

export default ActiveUser;
