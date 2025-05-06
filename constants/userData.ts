type User = {
  id: string;
  name: string;
  fatherName: string;
  photoUrl: string;
  status: 'Present' | 'Absent' | 'Leave';
  designation: 'Junior Engineer' | 'Senior Engineer' | 'Engineering Manager';
  department: 'Development' | 'Design' | 'QA' | 'HR';
};

const users: User[] = [
  {
    id: 'EMP001',
    name: 'John Doe',
    fatherName: 'Richard Doe',
    photoUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    status: 'Present',
    designation: 'Junior Engineer',
    department: 'Development',
  },
  {
    id: 'EMP002',
    name: 'Jane Smith',
    fatherName: 'Robert Smith',
    photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    status: 'Absent',
    designation: 'Senior Engineer',
    department: 'Design',
  },
  {
    id: 'EMP003',
    name: 'Ali Khan',
    fatherName: 'Imran Khan',
    photoUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
    status: 'Leave',
    designation: 'Engineering Manager',
    department: 'QA',
  },
  {
    id: 'EMP004',
    name: 'Sara Ali',
    fatherName: 'Zafar Ali',
    photoUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
    status: 'Present',
    designation: 'Junior Engineer',
    department: 'HR',
  },
  {
    id: 'EMP005',
    name: 'David Miller',
    fatherName: 'Steve Miller',
    photoUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    status: 'Absent',
    designation: 'Senior Engineer',
    department: 'Development',
  },
  {
    id: 'EMP006',
    name: 'Fatima Noor',
    fatherName: 'Aslam Noor',
    photoUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
    status: 'Leave',
    designation: 'Engineering Manager',
    department: 'Design',
  },
  {
    id: 'EMP007',
    name: 'Mohammad Rizwan',
    fatherName: 'Yasir Rizwan',
    photoUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
    status: 'Present',
    designation: 'Junior Engineer',
    department: 'QA',
  },
  {
    id: 'EMP008',
    name: 'Emily Clark',
    fatherName: 'George Clark',
    photoUrl: 'https://randomuser.me/api/portraits/women/74.jpg',
    status: 'Leave',
    designation: 'Senior Engineer',
    department: 'HR',
  },
  {
    id: 'EMP009',
    name: 'Zain Ahmed',
    fatherName: 'Tariq Ahmed',
    photoUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
    status: 'Absent',
    designation: 'Engineering Manager',
    department: 'Development',
  },
  {
    id: 'EMP010',
    name: 'Ayesha Malik',
    fatherName: 'Naveed Malik',
    photoUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
    status: 'Present',
    designation: 'Senior Engineer',
    department: 'Design',
  },
  {
  id: 'EMP011',
  name: 'Ayesha Malik',
  fatherName: 'Naveed Malik',
  photoUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
  status: 'Present',
  designation: 'Senior Engineer',
  department: 'Design',
},
  
  
];

export default users;
