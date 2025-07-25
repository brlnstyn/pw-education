import { Col, Row } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function InputTypes() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Input Types">
          <p className="fs-5">
            Dalam HTML, tag <code className="bg-light px-2 py-1 rounded border">&lt;input&gt;</code> merupakan elemen
            serbaguna
            yang digunakan untuk membuat berbagai jenis kolom isian di dalam form. Atribut <code>type</code> menentukan
            fungsi dan tampilan dari input yang dibuat. Setiap jenis input memiliki peran khusus, memungkinkan kita
            membangun
            formulir yang sesuai kebutuhan pengguna.
          </p>

          <div className="mb-4">
            <h5 className="fw-bold">Berikut beberapa tipe input yang paling sering digunakan dalam pembuatan form:</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <code>type="text"</code> – Menyediakan kolom untuk mengetik teks biasa, seperti nama atau alamat.
              </li>
              <li className="list-group-item">
                <code>type="password"</code> – Menyembunyikan karakter yang diketik, cocok digunakan untuk input kata
                sandi.
              </li>
              <li className="list-group-item">
                <code>type="email"</code> – Memastikan format input sesuai dengan alamat email yang valid.
              </li>
              <li className="list-group-item">
                <code>type="checkbox"</code> – Menampilkan kotak centang yang memungkinkan pengguna memilih lebih dari
                satu opsi.
              </li>
              <li className="list-group-item">
                <code>type="radio"</code> – Menyediakan pilihan tunggal dari beberapa opsi; hanya satu yang bisa dipilih
                dalam satu grup.
              </li>
              <li className="list-group-item">
                <code>type="file"</code> – Memungkinkan pengguna mengunggah berkas dari perangkat mereka, seperti gambar
                atau dokumen.
              </li>
              <li className="list-group-item">
                <code>type="submit"</code> – Menambahkan tombol untuk mengirimkan data form ke server.
              </li>
            </ul>
          </div>

          <h5 className="fw-bold">Contoh</h5>

          <form className="border p-4 bg-white rounded shadow-sm">
            <div className="mb-4">
              <label htmlFor="textInput" className="form-label fw-bold">Text (Nama):</label>
              <input type="text" id="textInput" className="form-control" placeholder="Masukkan nama Anda" />
            </div>

            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label fw-bold">Password:</label>
              <input type="password" id="passwordInput" className="form-control" placeholder="Masukkan password" />
            </div>

            <div className="mb-4">
              <label htmlFor="emailInput" className="form-label fw-bold">Email:</label>
              <input type="email" id="emailInput" className="form-control" placeholder="contoh@email.com" />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Hobi:</label><br />
              <div className="form-check form-check-inline">
                <input type="checkbox" id="hobi1" name="hobi" className="form-check-input" />
                <label className="form-check-label" htmlFor="hobi1">Membaca</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" id="hobi2" name="hobi" className="form-check-input" />
                <label className="form-check-label" htmlFor="hobi2">Menulis</label>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Jenis Kelamin:</label><br />
              <div className="form-check form-check-inline">
                <input type="radio" id="genderMale" name="gender" className="form-check-input" />
                <label className="form-check-label" htmlFor="genderMale">Laki-laki</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="genderFemale" name="gender" className="form-check-input" />
                <label className="form-check-label" htmlFor="genderFemale">Perempuan</label>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="fileInput" className="form-label fw-bold">Upload File:</label>
              <input type="file" id="fileInput" className="form-control" />
            </div>

            <div className="d-grid">
              <input type="submit" value="Kirim Form" className="btn btn-primary w-100" />
            </div>
          </form>
        </MainCard>
      </Col>
    </Row>
  );
}