import React from 'react';

var UserData = React.createClass({
    render(){

        return (
            <tr  className="userrow" onClick={() => this.props.onUserClick(this.props.userData)} >
                <td className="col-sm-2">
                    <img src={'./images/' + this.props.userData.image + '.svg'} className="img-thumb"/>
                </td>
                <td className="col-sm-5">
                    <div>{this.props.userData.name} </div>
                </td>
                <td className="col-sm-1">
                    <div>{this.props.userData.age}</div>
                </td>
                <td className="col-sm-6">
                    <div>{this.props.userData.phone}</div>
                </td>
            </tr>

        );
    }
});


export default UserData;