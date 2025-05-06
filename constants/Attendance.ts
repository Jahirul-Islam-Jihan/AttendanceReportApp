export type AttendanceStatus = 'present' | 'absent' | 'late' | 'leave' | 'weekend';

export interface AttendanceRecord {
  userId: string;
  date: string; // Format: YYYY-MM-DD
  status: AttendanceStatus;
  checkIn?: string;   // Format: HH:mm
  checkOut?: string;  // Format: HH:mm
}

export const attendanceRecords: AttendanceRecord[] = [
    {
      userId: 'EMP001',
      date: '2025-04-01',
      status: 'present',
      checkIn: '08:05',
      checkOut: '17:55',
    },
    {
      userId: 'EMP001',
      date: '2025-04-02',
      status: 'late',
      checkIn: '08:45',
      checkOut: '17:40',
    },
    {
      userId: 'EMP001',
      date: '2025-04-03',
      status: 'absent',
    },
    {
      userId: 'EMP001',
      date: '2025-04-04',
      status: 'present',
      checkIn: '08:10',
      checkOut: '18:00',
    },
    {
      userId: 'EMP001',
      date: '2025-04-05',
      status: 'weekend',
    },
    {
      userId: 'EMP001',
      date: '2025-04-06',
      status: 'weekend',
    },
    {
      userId: 'EMP001',
      date: '2025-04-07',
      status: 'present',
      checkIn: '08:05',
      checkOut: '17:50',
    },
    {
      userId: 'EMP001',
      date: '2025-04-08',
      status: 'absent',
    },
    {
      userId: 'EMP001',
      date: '2025-04-09',
      status: 'leave',
    },
    {
      userId: 'EMP001',
      date: '2025-04-10',
      status: 'present',
      checkIn: '08:00',
      checkOut: '17:30',
    },
  
    {
      userId: 'EMP002',
      date: '2025-04-01',
      status: 'leave',
    },
    {
      userId: 'EMP002',
      date: '2025-04-02',
      status: 'present',
      checkIn: '07:55',
      checkOut: '17:50',
    },
    {
      userId: 'EMP002',
      date: '2025-04-03',
      status: 'present',
      checkIn: '08:10',
      checkOut: '17:40',
    },
    {
      userId: 'EMP002',
      date: '2025-04-04',
      status: 'absent',
    },
    {
      userId: 'EMP002',
      date: '2025-04-05',
      status: 'weekend',
    },
    {
      userId: 'EMP002',
      date: '2025-04-06',
      status: 'weekend',
    },
    {
      userId: 'EMP002',
      date: '2025-04-07',
      status: 'present',
      checkIn: '08:00',
      checkOut: '18:00',
    },
    {
      userId: 'EMP002',
      date: '2025-04-08',
      status: 'late',
      checkIn: '08:30',
      checkOut: '17:45',
    },
    {
      userId: 'EMP002',
      date: '2025-04-09',
      status: 'present',
      checkIn: '07:50',
      checkOut: '17:30',
    },
    {
      userId: 'EMP002',
      date: '2025-04-10',
      status: 'absent',
    },
  
    {
      userId: 'EMP003',
      date: '2025-04-01',
      status: 'present',
      checkIn: '08:00',
      checkOut: '17:50',
    },
    {
      userId: 'EMP003',
      date: '2025-04-02',
      status: 'late',
      checkIn: '08:20',
      checkOut: '17:45',
    },
    {
      userId: 'EMP003',
      date: '2025-04-03',
      status: 'present',
      checkIn: '08:05',
      checkOut: '18:00',
    },
    {
      userId: 'EMP003',
      date: '2025-04-04',
      status: 'leave',
    },
    {
      userId: 'EMP003',
      date: '2025-04-05',
      status: 'weekend',
    },
    {
      userId: 'EMP003',
      date: '2025-04-06',
      status: 'weekend',
    },
    {
      userId: 'EMP003',
      date: '2025-04-07',
      status: 'absent',
    },
    {
      userId: 'EMP003',
      date: '2025-04-08',
      status: 'present',
      checkIn: '08:00',
      checkOut: '17:40',
    },
    {
      userId: 'EMP003',
      date: '2025-04-09',
      status: 'present',
      checkIn: '08:10',
      checkOut: '17:55',
    },
    {
      userId: 'EMP003',
      date: '2025-04-10',
      status: 'absent',
    },
  ];
  