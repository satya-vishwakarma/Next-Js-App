import axiosInstance from '@/lib/axios-instance';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const StudentList = () => {
  const [listStudent, setStudentList] = useState([]);

  const getStudentList = async () => {
    try {
      const response = await axiosInstance.get('students');
      setStudentList(response.data);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    getStudentList();
  }, []); // Empty dependency array means this effect runs only once, on mount

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Table responsive className="text-nowrap">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">FatherName</th>
            <th scope="col">MotherName</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student: any, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{student?.firstName}</td>
              <td>{student?.lastName}</td>
              <td>{student?.fatherName}</td>
              <td>{student?.motherName}</td>
              <td>{student?.class}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentList;
