import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';

const StudentList = () => {
  const ListStudent = useSelector(
    (state: RootState) => state.counter.studenList,
  );






  return (
    <Table responsive className="text-nowrap">
      <thead>
        <tr>
          {ListStudent.length > 0 && Object.keys(ListStudent[0]).map((i: any) => (
            <th scope="col">{i} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ListStudent.map((i: any) => (
          <tr>
            <th scope="row"> </th>
            <td>{i.firstName}</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
