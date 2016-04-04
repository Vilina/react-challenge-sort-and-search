import React from 'react';
import UserData from './UserData';

var UserList = React.createClass({

    render(){
        var UserDataTD = this.props.userData.map(function (value, key) {
            return (

                <UserData  onUserClick={this.props.onUserClick} userData={value} key={key}/>
            )
        }.bind(this));
        return (
            <div className="col-sm-10">
                <table className="table table-striped user-table ">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {UserDataTD}
                    </tbody>
                </table>
            </div>
        )
    }
});


export default UserList;