import { useState } from 'react';

export default function PersonalForm({ onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdate = (field, value) => {
    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);
    if (field === 'phone') setPhone(value);
    if (field === 'address') setAddress(value);

    onSave({ name, email, phone, address, [field]: value });
  }

  return (
    <div className="personal-form">
      <form action="">
        <label htmlFor="full-name">Full name</label>
        <input
          type="text"
          id="full-name"
          placeholder="First and last name"
          name="full-name"
          value={name}
          onChange={(e) => handleUpdate('name', e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => handleUpdate('email', e.target.value)}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter phone number"
          name="phone"
          value={phone}
          onChange={(e) => handleUpdate('phone', e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="City, Country"
          name="address"
          value={address}
          onChange={(e) => handleUpdate('address', e.target.value)}
        />
      </form>
    </div>
  );
}
