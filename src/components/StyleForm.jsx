import React from 'react';
import {
    Form,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Label,
    FormText
} from 'reactstrap';

import './StyleForm.css';

export default class StyleForm extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);

        this.inputEl = null;
        this.state = {
          file: null,
          checkpoint: 'la_muse.ckpt'
        };

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleStyleChange = this.handleStyleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        });
    }

    render() {
        return (
            <div className='style-form'>
              <h3>Image Upload</h3>
                <Form className='' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="file">Select picture (JPG and JPEG format allowed)</Label>
                    <Input type="file" name="file" id="file" value={this.state.file} onChange={this.handleFileChange}/>
                    <FormText color="muted">
                      JPG and JPEG format allowed on server.
                      If sending file to Heroku demo server, please select a file with small size due to server limitations.
                      IF running the server on localhost or on other platform please check your platform limitations.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="checkpoint">Select the style to modify the image (See images below for description)</Label>
                    <Input type="select" name="checkpoint" id="checkpoint" value={this.state.checkpoint} onChange={this.handleStyleChange}>
                      <option value="la_muse.ckpt"> A Muse - Pablo Picasso </option>
                      <option value="rain_princess.ckpt"> Rain Princess - Leonid Afremov </option>
                      <option value="scream.ckpt"> The Scream -  Edvard Munch </option>
                      <option value="udnie.ckpt"> Udnie - Francis Picabia </option>
                      <option value="wave.ckpt"> The Great Wave off Kanagawa - Katsushika Hokusai </option>
                      <option value="wreck.ckpt"> The Shipwreck of the Minotaur - J. M. W. Turner </option>
                    </Input>
                  </FormGroup>
                  <Button type="submit" color="info">Send Image</Button>
                </Form>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Sending file');
        if (this.state.file && this.state.checkpoint) {
          console.log(this.state.file);
          console.log(this.state.checkpoint);
            // this.props.onQuery(this.state.inputValue, this.state.unit);
        } else {
            alert('Please select a JPG file and a style');
        }
    }

    handleFileChange(e) {
        this.setState({file: e.target.value});
    }

    handleStyleChange(e) {
        this.setState({style: e.target.value});
    }

}
