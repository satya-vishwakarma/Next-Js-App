import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { student } from '../../lib/redux/features/student';
import { RootState } from '../../lib/redux/store';

const StudentList = () => {
  const ListStudent = useSelector(
    (state: RootState) => state.student.studenList,
  );

  return (
    <Table responsive className="text-nowrap">
      <thead>
        <tr>
          <th scope="col"> Sr.No </th>
          <th scope="col"> FirstName </th>
          <th scope="col"> LastName </th>
          <th scope="col"> FatherName </th>
          <th scope="col"> MotherName </th>
          <th scope="col"> Class </th>
          <th scope="col"> Action </th>
        </tr>
      </thead>
      <tbody>
        {ListStudent.map((i: student, index) => (
          <tr key={index}>
            <th scope="row"> {index + 1} </th>
            <td>{i.firstName}</td>
            <td>{i.lastName}</td>
            <td>{i.fatherName}</td>
            <td>{i.motherName}</td>
            <td>{i.class}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
