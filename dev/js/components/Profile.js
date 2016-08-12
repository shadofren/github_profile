import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Row, Col, Label, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import RepoList from './RepoList';

class Profile extends React.Component {
    render(){
        let data = this.props.userData;
        let repos = this.props.userRepos;
        if (data !== undefined && data !== null && repos !== undefined && repos !== null){
            return (
                <Panel header={data.name}  bsStyle="info">
                    <Row>
                        <Col md={4}>
                            <Image src={data.avatar_url} responsive rounded />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={12}>
                                    <Label bsStyle="primary">{data.public_repos} Repos</Label>&nbsp;
                                    <Label bsStyle="success">{data.public_gists} Gists</Label>&nbsp;
                                    <Label bsStyle="info">{data.followers} Followers</Label>&nbsp;
                                    <Label bsStyle="warning">{data.following} Followings</Label>&nbsp;
                                </Col>
                            </Row>       
                            <hr />                     
                            <Row>
                                <Col md={12}>
                                    <ListGroup>
                                        <ListGroupItem><strong>Username:</strong> {data.login}</ListGroupItem>
                                        <ListGroupItem><strong>Location:</strong> {data.location}</ListGroupItem>
                                        <ListGroupItem><strong>Email:</strong> {data.email}</ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <br />          
                            <Button target="_blank" href={data.html_url}>Visit Page</Button>
                        </Col>
                    </Row>
                    <h2>User Repos</h2>
                    <RepoList userRepos={repos} />
                </Panel>
            );
        } else {
            return (
                <div>Enter the username and press search to get user profile and repos</div>
            );
        }
    }
}

export default Profile;