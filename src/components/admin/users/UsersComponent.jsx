import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';


const UsersComponent = () => {

  const data = [
    {
      userId: 1,
      firstName: "Dileep",
      middleName: "Kumar",
      lastName: "Singh",
      email: "dileep.kumar@abjima.com",
      ext: "",
      phone: "91362589542",
      fax: "",
      status: "Active",
      isTestUser: true
    },
    {
      userId: 2,
      firstName: "Dinesh",
      middleName: "Kumar",
      lastName: "Choudhery",
      email: "dinesh.choudhry@abjima.com",
      ext: "",
      phone: "12563625482",
      fax: "",
      status: "Active",
      isTestUser: true
    },
    {
      userId: 3,
      firstName: "Aman",
      middleName: "Kumar",
      lastName: "Singh",
      email: "aman.singh@abjima.com",
      ext: "",
      phone: "7845123692",
      fax: "",
      status: "Active",
      isTestUser: true
    }
  ]
  const enterprises = [
    { name: 'Center for Vein Restoration', id: 1 },
    { name: 'CVM US', id: 2 },
   ];
  const [users, setUsers] = useState([]);
  const [lockedUsers, setLockedUsers] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setUsers(data);
    setLockedUsers([]);
  }, []);

  const lockTemplate = (rowData, options) => {
    const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
    const disabled = options.frozenRow ? false : lockedUsers.length >= 2;

    return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />;
  };

  const toggleLock = (data, frozen, index) => {
    let _lockedUsers, _unlockedUsers;

    if (frozen) {
      _lockedUsers = lockedUsers.filter((c, i) => i !== index);
      _unlockedUsers = [...users, data];
    } else {
      _unlockedUsers = users.filter((c, i) => i !== index);
      _lockedUsers = [...lockedUsers, data];
    }

    _unlockedUsers.sort((val1, val2) => {
      return val1.id < val2.id ? -1 : 1;
    });

    setLockedUsers(_lockedUsers);
    setUsers(_unlockedUsers);
  };
  return (
    <div className='border-round-xl p-3 mt-5 shadow-5'>
      <strong className='text-gray-500 p-1'>User</strong>
      <div className='w-15rem'>
      <div className="card flex justify-content-center">
        <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={enterprises} optionLabel="name" className="w-full" />
      </div>
      </div>
      <div className="card m-5">
        <DataTable value={users} frozenValue={lockedUsers} scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem', height: '10rem' }}>
          <Column sortable field="userId" header="User Id"></Column>
          <Column sortable field="firstName" header="First Name"></Column>
          <Column sortable field="middleName" header="Middle Name"></Column>
          <Column sortable field="lastName" header="Last Name"></Column>
          <Column sortable field="ext" header="Ext"></Column>
          <Column sortable field="phone" header="Phone"></Column>
          <Column sortable field="fax" header="Fax"></Column>
          <Column sortable field="status" header="Status"></Column>
          <Column sortable field="isTestUser" header="Test User"></Column>

          <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
        </DataTable>
      </div>
    </div>
  )
}

export default UsersComponent
