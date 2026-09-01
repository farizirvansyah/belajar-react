import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DataSiswa from './components/DataSiswa'
import FormSiswa from './components/FormSiswa'
import Login from './pages/Login'

function counter() {
  const [count, setCount] = useState(0)
}

function App() {
  const [count, setCount] = useState(0)

  const tambah = () => setCount((count) => count + 1);
  const multiplier = () => setCount((count) => count * count);
  const kurang = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  const [students, setStudents] = useState([
    { id: 1, name: "Reza Ibrahim", usia: 20, jurusan: "JWP" },
    { id: 2, name: "Rudi", usia: 50, jurusan: "Tata Boga" },
  ]);

  const handleTambahSiswa = (newStudent) => {
    setStudents([newStudent, ...students]);
  };
  console.log(students);

  return (
    <>
      {/* <DataSiswa name="Reza Ibrahim" usia="25" jurusan="Junior Web Prog" alamat="Bali" />
      <DataSiswa name="Budi Sudarsono" usia="30" jurusan="MUA" alamat="Jakarta" />
      <DataSiswa name="Bambang Pamungkas" usia="35" jurusan="Content Creator" alamat="Puncak" />
      <DataSiswa name="Rudi Habibie" usia="35" jurusan="Content Creator" alamat="Bekasi" /> */}

      <section>
        <h1>{count}</h1>
        <button type="button" className="counter" onClick={tambah}>+ Tambah</button>
        <button type="button" className="counter" onClick={multiplier}>Multiplier</button>
        <button type="button" className="counter" onClick={kurang}>- Kurang -</button>
        <br />
        <button type="button" className="counter" onClick={reset}>Reset</button>
      </section>

      <div className="container">
        <header>
          <h1>Data Siswa PPKD Jakarta Pusat</h1>
        </header>

        <FormSiswa tambahSiswa={handleTambahSiswa} />

        <section className="student-list">
          <div className="student-grid">
            {students.length === 0 ? (<p>Data tidak ditemukan</p>) : (
              students.map((student) => (
                <DataSiswa key={student.id}
                  name={student.name}
                  usia={student.usia}
                  jurusan={student.jurusan}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default App;
