import { Col, Row } from 'react-bootstrap';
import MainCard from '../../components/Card/MainCard';

import logo from '../../assets/images/landing-page.jpg';
import java from '../../assets/images/Java.png';
import react from '../../assets/images/React.png';
import vue from '../../assets/images/Vue.png';
import go from '../../assets/images/Golang.png';
import html from '../../assets/images/HTML.png';
import code from '../../assets/images/code.png';

export default function About() {
  const handleMouseEnter = (e) => {
    // Tambahkan transform dan box-shadow untuk efek timbul
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  };

  const handleMouseLeave = (e) => {
    // Reset transform dan box-shadow saat hover selesai
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <Row>
      <Col sm={12}>
        <MainCard>
          <h1 className="text-center">EduPaham: Dari Bingung Jadi Paham Koding</h1>
          <img src={logo} alt="Landing Page" className="w-75 d-block mx-auto" />

          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src={code} alt="Belajar Koding" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h3 className="fw-bold text-primary mb-3">
                  Selamat Datang di <span className="text-warning">EduPaham!</span>
                </h3>
                <p className="lead">
                  Pernah merasa belajar programming itu rumit, penuh istilah asing, dan bingung harus mulai dari mana? Kamu tidak sendirian.
                </p>
                <p>
                  Itulah alasan <strong>EduPaham</strong> hadir — platform belajar koding online berbahasa Indonesia yang dirancang dengan
                  satu filosofi utama: <em>membuatmu benar-benar paham</em>.
                </p>
                <p>
                  Karena <strong>koding bukan sekadar hafalan sintaks</strong>, tapi tentang memahami konsep dan logika di baliknya.
                </p>
              </div>
            </div>
          </div>

          <div id="langCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center gap-4">
                  <img src={java} alt="Java" height="90" />
                  <img src={html} alt="HTML" height="90" />
                  <img src={react} alt="React" height="90" />
                  <img src={go} alt="Go" height="90" />
                  <img src={vue} alt="Vue" height="90" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="my-5 text-center fw-bold">
            Visi dan Misi <span className="text-primary">EduPaham</span>
          </h2>

          <div className="container">
            <div className="row g-4">
              {/* VISI */}
              <div className="col-md-6">
                <div className="p-4 border rounded shadow-sm h-100 bg-light">
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-eye-fill fs-2 text-primary me-3"></i>
                    <h5 className="mb-0 text-primary">Visi</h5>
                  </div>
                  <p className="mb-0">
                    Menjadi platform belajar koding berbahasa Indonesia yang paling mudah dipahami dan membumi, menjangkau siapa saja yang
                    ingin masuk ke dunia teknologi.
                  </p>
                </div>
              </div>

              {/* MISI */}
              <div className="col-md-6" id="misiCard">
                <div className="p-4 border rounded shadow-sm h-100 bg-light">
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-bullseye fs-2 text-warning me-3"></i>
                    <h5 className="mb-0 text-warning">Misi</h5>
                  </div>
                  <ul className="mb-0 ps-3">
                    <li>Membuat materi pemrograman yang sederhana dan praktis</li>
                    <li>Menghilangkan rasa takut terhadap koding</li>
                    <li>Memberikan akses gratis dan berkualitas</li>
                    <li>Membentuk komunitas belajar yang saling dukung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="my-md-5 text-center">Ada Apa Aja Sih Disini?</h2>
          <div className="container py-3">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div
                className="col"
                style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex">
                  <div className="me-3">
                    <i className="bi bi-diagram-3 fs-1 text-primary toggle-icon" data-target="desc-1" style={{ cursor: 'pointer' }}></i>
                  </div>
                  <div>
                    <h5>Alur Belajar Terstruktur</h5>
                    <p id="desc-1" className="desc">
                      Kurikulum yang dirancang dari nol hingga siap kerja, membimbingmu langkah demi langkah.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex">
                  <div className="me-3">
                    <i className="bi bi-lightbulb fs-1 text-warning toggle-icon" data-target="desc-2" style={{ cursor: 'pointer' }}></i>
                  </div>
                  <div>
                    <h5>Penjelasan Intuitif</h5>
                    <p id="desc-2" className="desc">
                      Menggunakan analogi dunia nyata dan studi kasus sederhana agar konsep rumit terasa lebih mudah.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex">
                  <div className="me-3">
                    <i className="bi bi-bricks fs-1 text-success toggle-icon" data-target="desc-3" style={{ cursor: 'pointer' }}></i>
                  </div>
                  <div>
                    <h5>Fokus pada Fondasi</h5>
                    <p id="desc-3" className="desc">
                      Kami memastikan kamu kuat di dasar-dasarnya, karena fondasi kokoh adalah kunci teknologi masa depan.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex">
                  <div className="me-3">
                    <i className="bi bi-gift fs-1 text-danger toggle-icon" data-target="desc-4" style={{ cursor: 'pointer' }}></i>
                  </div>
                  <div>
                    <h5>Materi Gratis dan Berkualitas</h5>
                    <p id="desc-4" className="desc">
                      Semua materi bisa diakses gratis, karena pendidikan berkualitas harus bisa dijangkau semua orang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="my-5 text-center">Gabung Komunitas EduPaham</h2>
          <p className="container text-center">
            EduPaham bukan hanya tempat belajar, tapi juga tempat tumbuh bareng. Gabung komunitas kami di Discord, ikut diskusi, atau bahkan
            kontribusi materi baru!
          </p>
          <div className="text-center">
            <a href="https://discord.gg/EmYy7cMA" className="btn btn-primary">
              Join Discord
            </a>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
