import React from 'react';

class Modal extends React.Component {
    render() {
        const { isOpen, toggle, title, children } = this.props;

        const modalClass = isOpen ? 'modal fade show' : 'modal';
        const displayStyle = isOpen ? { display: 'block' } : { display: 'none' };

        return (
            <div className={modalClass} style={displayStyle} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="modal-close-button btn btn-default" onClick={toggle}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
