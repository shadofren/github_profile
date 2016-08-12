import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Row, Col, Label, Image, ListGroup, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

class Repo extends React.Component {
    /* 
        TODO:
        Add number of commits and forks but api currently does not support
        Number of forks always 0 for some reason
    */
    render(){
        let repo = this.props.repo;
        let description = repo.description || "no description"
        let last_update = `Last updated at: ${new Date(repo.updated_at)}`;
        return (
            <ListGroupItem>
                <Panel header={repo.name}>
                    {last_update}  <a href={repo.html_url}><Glyphicon glyph="new-window" /></a><br />
                    {description}<br />
                    {repo.open_issues_count} Open Issues
                </Panel>
            </ListGroupItem>
        )
    }
}

export default Repo;