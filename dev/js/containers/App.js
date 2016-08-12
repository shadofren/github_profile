import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import * as actions from '../actions/index';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import Profile from '../components/Profile';
import RepoList from '../components/RepoList';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "shadofren",
            perPage: 10
        }
        this.changeUsername = this.changeUsername.bind(this);
    }

    changeUsername(username){
        this.setState({username: username});
    }

    render(){
        return (
            <div>
                <NavBar />
                <Grid>                    
                    <Row>
                        <Col md={12}>
                            <Search 
                                value={this.state.username}
                                handleChangeUsername={this.changeUsername} 
                                fetchUserData={this.props.getUserData}
                                fetchUserRepos={this.props.getUserRepos}
                                perPage={this.state.perPage}                            
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12}>
                            <Profile 
                                userData={this.props.userData}
                                userRepos={this.props.userRepos}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData.result,
        userRepos: state.userRepos.result,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: bindActionCreators(actions.getUserData, dispatch),
        getUserRepos: bindActionCreators(actions.getUserRepos, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
