import React from 'react';

const DeleteCustomer = ({ customerId, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      fetch(`http:localhost:5000/api/customers/${customerId}`, { method: 'DELETE' })
        .then(() => onDelete(customerId))
        .catch((error) => console.error(error));
    }
  };

  return <button onClick={handleDelete}>Delete Customer</button>;
};

export default DeleteCustomer;
