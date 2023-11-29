import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact, editContatc } from 'redux/operations';
import { Modal, Input, Button, Popconfirm } from 'antd';
import {
  ContactItems,
  ContactName,
  ContactNumber,
  Btn,
  BtnEdit,
} from './ContactItem.styled';

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const confirm = e => {
    handleDelete(e.target.value);
  };
  const cancel = e => {
    console.log(e);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContatc({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber href={`tel:${contact.number}`}>
        {contact.number}
      </ContactNumber>
      <BtnEdit onClick={handleEdit}>
       Edit
      </BtnEdit>
      <Popconfirm
        title="Delete the contact"
        description="This contacts will be deleted permanently. Are tou sure youy want to delete it?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Btn danger>
          Delete
        </Btn>
      </Popconfirm>

      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div className="modal-content">
          <label>New Name:</label>
          <Input
            type="text"
            value={newName}
            onChange={handleNameChange}
            required
          />
          <label>New Number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            required
          />
        </div>
      </Modal>
    </ContactItems>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
