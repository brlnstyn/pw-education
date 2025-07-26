import { useState } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Layout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Layout (Responsive + Collapsible Sidebar)">
          {/* Pendahuluan */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              Layout HTML yang baik harus responsif dan adaptif terhadap berbagai ukuran layar.
              Kita juga bisa menambahkan sidebar collapsible agar tampilan lebih dinamis dan user-friendly.
            </p>
          </section>

          {/* Layout Preview */}
          <section>
            <h2 className="mt-4">📱 Responsive Layout + Sidebar Collapse</h2>
            <Card className="mb-3">
              <Card.Body>
                <style>{`
                  .layout-wrapper {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    overflow: hidden;
                    font-family: sans-serif;
                  }
                  .header { background: #007bff; color: white; padding: 10px; text-align: center; }
                  .nav { background: #eee; padding: 10px; text-align: center; }
                  .sidebar { background: #17a2b8; color: white; padding: 10px; width: 100%; }
                  .main-content { background: #fff; padding: 10px; text-align: center; }
                  .footer { background: #343a40; color: white; padding: 10px; text-align: center; }
                  @media (min-width: 768px) {
                    .content-area {
                      display: flex;
                      flex-direction: row;
                    }
                    .sidebar {
                      width: 30%;
                    }
                    .main-content {
                      width: 70%;
                    }
                  }
                `}</style>

                <div className="layout-wrapper">
                  <div className="header">Header</div>
                  <div className="nav">Navigation</div>
                  <Button onClick={toggleSidebar} className="w-100" style={{ background: '#4dd0e1', border: 'none' }}>
                    Toggle Sidebar
                  </Button>
                  <div className="content-area">
                    {sidebarVisible && <div className="sidebar">Sidebar</div>}
                    <div className="main-content">Konten utama yang fleksibel dan responsif</div>
                  </div>
                  <div className="footer">Footer © EduPaham</div>
                </div>
              </Card.Body>
            </Card>
          </section>

          {/* Penjelasan */}
          <section>
            <h2 className="mt-4">🧠 Penjelasan</h2>
            <ul>
              <li><strong>Header</strong>: Bagian atas halaman, biasanya berisi judul situs atau logo.</li>
              <li><strong>Navigation</strong>: Menu untuk berpindah antar halaman.</li>
              <li><strong>Sidebar</strong>: Kolom samping untuk informasi tambahan, bisa disembunyikan.</li>
              <li><strong>Main Content</strong>: Area utama untuk isi konten.</li>
              <li><strong>Footer</strong>: Bagian bawah yang berisi informasi hak cipta atau kontak.</li>
            </ul>
          </section>

          {/* Kesimpulan */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Dengan kombinasi HTML dasar, media query, dan sedikit JavaScript (React), kita bisa membuat layout yang dinamis, modern,
              dan ramah untuk semua ukuran layar. Sidebar collapsible menambah fleksibilitas dan kenyamanan pengguna.
            </p>
          </section>
        </MainCard>
      </Col>
    </Row>
  );
}
