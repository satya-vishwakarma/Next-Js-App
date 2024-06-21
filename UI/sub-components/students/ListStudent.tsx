import axiosInstance from '@/lib/axios-instance';
import ConfirmBox from '@/pages/components/common/confirmModalBox';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/router';

const StudentList = () => {
  const [listStudent, setStudentList] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const [modelProps, setModelProps] = useState({});

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
  }, []);

  const deleteStudent = (id: string) => {
    setSelectedId(id);
    setModalShow(true);
  };

  const activeAndInActiveHandle = (e: any, id: string) => {
    const { title } = e.target; // Active

    setModelProps({
      body: `Are you sure you want to be ${title}?`,
      actionType: title.toLowerCase(),
    });
    setSelectedId(id);
    setModalShow(true);
  };

  const iconCursor = { cursor: 'pointer' };

  const onConfirm = async (actionType: string) => {
    /// selectedId;
    console.log(actionType, 'onConfirm');
    try {
      let response: any = '';
      switch (actionType.toLowerCase()) {
        case 'active':
          response = await axiosInstance.put('students/' + selectedId, {
            status: 1,
          });
          break;
        case 'inactive':
          response = await axiosInstance.put('students/' + selectedId, {
            status: 2,
          });
          break;
        case 'delete':
          response = await axiosInstance.delete('students/' + selectedId);
          break;
      }

      toast.success(response.data);
      setModalShow(false);
      getStudentList();
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const hideModal = () => {
    setSelectedId('');
    setModalShow(false);
  };

  const router = useRouter();

  const handleEditEvent = (id: any) => {
    router.push({
      pathname: '/pages/addStudent',
      query: { type: 'edit', id: id },
    });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Table responsive className="text-nowrap">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">FatherName</th>
            <th scope="col">MotherName</th>
            <th scope="col">Class</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student: any, index) => (
            <tr key={index}>
              <th scope="row">
                <img
                  className="rounded-circle avatar-md"
                  alt={student?.firstName}
                  src={student.profileImage}
                  height="30"
                  width="30"
                />
              </th>
              <td>{student?.firstName}</td>
              <td>{student?.lastName}</td>
              <td>{student?.fatherName}</td>
              <td>{student?.motherName}</td>
              <td>{student?.class}</td>
              <td>{student?.statusLabel}</td>
              <td>
                <i
                  className="fa fa-eye fs-3 icon"
                  title="View"
                  style={iconCursor}
                ></i>{' '}
                &nbsp;&nbsp;
                <i
                  className="fa-regular fa-pen-to-square fs-3 pl3-l icon"
                  title="Edit"
                  style={iconCursor}
                  onClick={(i) => handleEditEvent(student._id)}
                ></i>
                &nbsp;&nbsp;
                {student?.status === 1 ? (
                  <i
                    className="fa-regular fa-eye-slash fs-3 icon mr-2"
                    title="Inactive"
                    onClick={(i) => activeAndInActiveHandle(i, student._id)}
                    style={iconCursor}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-eye fs-3 pl3-l icon"
                    title="Active"
                    onClick={(i) => activeAndInActiveHandle(i, student._id)}
                    style={iconCursor}
                  ></i>
                )}
                &nbsp;&nbsp;
                <i
                  className="fa fa-trash fs-3 icon"
                  onClick={() => deleteStudent(student._id)}
                  title="Delete"
                  style={iconCursor}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmBox
        {...modelProps}
        show={modalShow}
        onHide={hideModal}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default StudentList;
