// React
import React from 'react'

// MDB
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBBtn
} from 'mdbreact';

// Components
import CreateAction from '../../organisms/Modals/Create/action'

class CreateRecordDialog extends React.Component{

    state = {
        modal_createRecord: false,
    }

    
    toggle_createRecord = () => {
        this.setState({
            modal_createRecord: !this.state.modal_createRecord
        });
    }

    render(){
        // Get records from Regex Reducer
        const { records } = this.props;

        return(
            <div>
                <button className="btn btn-success" onClick={this.toggle_createRecord}>Create Record</button>
                {this.state.modal_createRecord &&
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal_createRecord} toggle={this.toggle_createRecord}>
                            <MDBModalHeader toggle={this.toggle_createRecord}>MDBModal title</MDBModalHeader>
                            <MDBModalBody>
                                <CreateAction/>
                            </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle_createRecord}>Close</MDBBtn>
                            <MDBBtn color="primary">Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
                }
            </div>
        )
    }
}

export default CreateRecordDialog;