import React, { Component } from 'react';
import Modal from './components/Modal'; // Импортируйте компонент Modal из соответствующего файла

class MyComponent extends Component {
    state = {
        modal: false,
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>
                    Open
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} title="Modal title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </Modal>
            </div>
        );
    }
}

export default MyComponent;
