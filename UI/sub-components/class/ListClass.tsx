import DynamicTableExample from '@/components/comman/tables';
import dynamic from 'next/dynamic';

const LoadingSpinner = dynamic(() => import('@/components/comman/loader'), {
  ssr: false,
});

const ListClasses = () => {
  const headers: Header[] = [
    {
      text: 'Profile',
      dataField: 'profileImage',
    },
    {
      text: 'First Name',
      dataField: 'firstName',
    },
    {
      text: 'Last Name',
      dataField: 'lastName',
    },
    {
      text: 'Father Name',
      dataField: 'fatherName',
    },
    {
      text: 'Mother Name',
      dataField: 'motherName',
    },
    { text: 'Class', dataField: 'class' },
    {
      text: 'Status',
      dataField: 'statusLabel',
    },
    {
      text: 'Action',
      dataField: 'action',
      styles: {
        textAlign: 'right',
        fontWeight: 'bold',
      },
    },
  ];

  const iconCursor = { cursor: 'pointer', marginLeft: '10px' };

  const dataWithCellStyles: DataRow[] = [
    {
      profileImage: { value: 'John Doe' },
      firstName: { value: 'Jane' },
      lastName: { value: 'Smith' },
      fatherName: { value: 'Mike' },
      motherName: { value: 'Emily' },
      class: { value: '10A' },
      statusLabel: { value: 'Active' },
      action: {
        value: 'Actions',
        components: [
          <i
            className="fa fa-eye fs-3 icon"
            title="View"
            style={iconCursor}
          ></i>,

          // Add more components for other actions as needed
        ],
      },
    },
    // Add more data rows as needed
  ];

  return (
    <div className="App">
      <DynamicTableExample
        headers={headers}
        dataWithCellStyles={dataWithCellStyles}
      />
    </div>
  );
};

export default ListClasses;
