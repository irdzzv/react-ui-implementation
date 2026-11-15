import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students] = useState([
    {
      nim: '2401001',
      nama: 'Annisa Firdausi',
      hp: '081234567801',
      email: 'annisa@gmail.com',
      alamat: 'Surabaya',
      prodi: 'Manajemen',
      tahun: '2024'
    },
    {
      nim: '2401002',
      nama: 'Dewa Sagara',
      hp: '081234567802',
      email: 'dewa@gmail.com',
      alamat: 'Malang',
      prodi: 'Sistem Informasi',
      tahun: '2024'
    },
    {
      nim: '2401003',
      nama: 'Citra Amelia',
      hp: '081234567803',
      email: 'citra@gmail.com',
      alamat: 'Malang',
      prodi: 'Informatika',
      tahun: '2024'
    },
    {
      nim: '2501001',
      nama: 'Silvi Riska',
      hp: '081234567804',
      email: 'silvi@gmail.com',
      alamat: 'Jember',
      prodi: 'Manajemen',
      tahun: '2025'
    },
    {
      nim: '2501002',
      nama: 'Fatih Pratama',
      hp: '081234567805',
      email: 'fatih@gmail.com',
      alamat: 'Blitar',
      prodi: 'Informatika',
      tahun: '2025'
    }
  ]);
  
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Student Management</h1>
        <h3>Daftar Data Mahasiswa</h3>
        <p>Total Mahasiswa: <strong>{students.length}</strong> orang</p>
      </header>

      <p className="clock">
        🕒 {currentTime.toLocaleTimeString('id-ID')}
      </p>

      <table className="student-table">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>No. HP</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Prodi</th>
            <th>Tahun</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.nim}>
              <td>{student.nim}</td>
              <td>{student.nama}</td>
              <td>{student.hp}</td>
              <td>{student.email}</td>
              <td>{student.alamat}</td>
              <td>{student.prodi}</td>
              <td>{student.tahun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;