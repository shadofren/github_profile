import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Row, Col, Label, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Repo from './Repo';

class RepoList extends React.Component {
    render(){
        let repos = this.props.userRepos.map((repo) => {
            return(
                <Repo repo={repo} key={repo.id}/>
            );
        })
        return (
            <ListGroup>
                {repos}
            </ListGroup>
        )
    }
}

export default RepoList;