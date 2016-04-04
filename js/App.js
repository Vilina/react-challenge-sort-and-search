import React, { Component } from 'react';
//import Button from './components/Button';
import SearchBar from './components/SearchBar';
import ActiveUser from './components/ActiveUser';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import $ from "jquery";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            searchedData: [],
            activeUser: null,
            sortDir: true,
            count: 0
        };
        this.getData('data.json');
    }

    getData(data) {
        $.getJSON(data, function (dat) {
            this.setState({userData: dat, searchedData: dat, activeUser: dat[0]});
        }.bind(this));
    }

    onNameSort(direction) {
        this.setState({sortDir: direction});
        this.state.searchedData.sort(function (a, b) {
            if (a.name > b.name) return this.state.sortDir ? 1 : -1;
            if (a.name < b.name) return !this.state.sortDir ? 1 : -1;
            return 0;
        }.bind(this));
        this.setState({activeUser: this.state.searchedData[0]});
    }

    onAgeSort(direction) {
        this.setState({sortDir: direction});
        this.state.searchedData.sort(function (a, b) {
            if (a.age > b.age) return this.state.sortDir ? 1 : -1;
            if (a.age < b.age) return !this.state.sortDir ? 1 : -1;
            return 0;
        }.bind(this));
        this.setState({activeUser: this.state.searchedData[0]});

    }

    onSearchUpdate(searchKey) {
        var searchKey = searchKey.toLowerCase();
        var users = this.state.userData;
        var newList = [];
        for (var i = 0; i < users.length; i++) {
            if (users[i]['name'].toLowerCase().indexOf(searchKey) > -1) {
                //push data into results array
                newList.push(users[i]);
            }
        }
        this.setState({searchedData: newList});
        if (newList == [])
            this.setState({activeUser: {}});
        else
            this.setState({activeUser: newList[0]});
    }

    render() {
        return (
            <div className="container-fluid app">
                <SearchBar onSearchUpdate={searchKey => this.onSearchUpdate(searchKey)}/>
                <ToolBar onNameSort={sortDir => this.onNameSort(sortDir)} onAgeSort={sortDir => this.onAgeSort(sortDir)}
                         sortDir={this.state.sortDir} sortonAgeSort={searchedData => this.setState({searchedData})}/>
                <div className="row">
                    <ActiveUser activeUser={this.state.activeUser}/>
                    <UserList onUserClick={activeUser => this.setState({activeUser:activeUser})}
                              userData={this.state.searchedData}/>
                </div>
            </div>
        );
    }
}
