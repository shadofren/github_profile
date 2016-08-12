import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        if (!username){
            return
        }
        this.props.fetchUserData(username);
        this.props.fetchUserRepos(username, this.props.perPage);
    }

    handleChange(e){
        this.props.handleChangeUsername(e.target.value);
    }

    render(){
        return (
            <Form inline>
                <FormGroup>
                    <FormControl
                        ref="username"
                        type="text"
                        value={this.props.value}
                        placeholder="Enter profile name ..."
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button 
                    type="submit"
                    bsStyle="info"
                    onClick={this.handleSubmit}
                >
                    Search
                </Button>
            </Form>
        );
    }
}

export default Search;