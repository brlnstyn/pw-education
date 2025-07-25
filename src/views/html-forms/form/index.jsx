import { Col, Row } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

import video from '../../../assets/videos/html-form-form.mp4';
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ fname: 'Asep', age: 25 });
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = 'Name wajib diisi';
    if (!formData.age || parseInt(formData.age) < 1) newErrors.age = 'Age minimal 1';
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(null);
    } else {
      setErrors({});
      setSubmitted(formData);
      setFormData({ fname: '', age: '' }); // reset form
    }
  };
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Form">
          <video controls width="70%" height="30%" className="d-block mx-auto rounded shadow-sm">
            <source src={video} type="video/mp4" />
          </video>

          <div className="my-4 fs-5">
            <p className="fs-5">
              Formulir di HTML adalah alat penting untuk mengumpulkan data dari pengguna, seperti nama, email, komentar,
              hingga pilihan tertentu. Semua input tersebut biasanya dikirim ke server untuk diproses lebih lanjut.
              Formulir dibuat menggunakan tag <code className="bg-light px-1 rounded">&lt;form&gt;</code>, yang
              berfungsi
              sebagai wadah untuk berbagai elemen input seperti <i>text field</i>, <i>checkbox</i>, <i>radio button</i>,
              <i>submit button</i>, dan lainnya.
            </p>

            <p className="mt-4 fw-semibold">Berikut beberapa elemen form yang umum digunakan:</p>
            <ul>
              <li>
                <code>&lt;input&gt;</code>: digunakan untuk input teks pendek
                seperti <i>text</i>, <i>email</i>, <i>password</i>, dan lainnya.
              </li>
              <li>
                <code>&lt;textarea&gt;</code>: digunakan untuk input teks panjang, seperti komentar atau deskripsi.
              </li>
              <li>
                <code>&lt;button&gt;</code> atau <code>&lt;input type="submit"&gt;</code>: digunakan untuk mengirim data
                form ke server.
              </li>
            </ul>
          </div>

          <h3 className="mt-4">Contoh</h3>
          <form className="p-4 border rounded shadow-sm bg-light mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label fw-bold">Name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                className={`form-control ${errors.fname ? 'is-invalid' : ''}`}
              />
              {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label fw-bold">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
              />
              {errors.age && <div className="invalid-feedback">{errors.age}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>

          {submitted && (
            <div className="alert alert-success mt-4">
              <strong>Form Submitted!</strong><br />
              <span>Name: {submitted.fname}</span><br />
              <span>Age: {submitted.age}</span>
            </div>
          )}
        </MainCard>
      </Col>
    </Row>
  );
}
