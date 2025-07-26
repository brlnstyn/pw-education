import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Semantic() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Semantic">

          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              HTML Semantic adalah elemen-elemen HTML yang secara eksplisit menjelaskan makna konten yang dibungkusnya. Elemen ini membantu mesin pencari,
              pembaca layar, dan developer memahami struktur konten secara lebih baik dibandingkan tag non-semantik seperti <code>&lt;div&gt;</code> atau <code>&lt;span&gt;</code>.
            </p>
          </section>

          {/* ELEMEN SEMANTIK */}
          <section>
            <h2 className="mt-4">🔍 Contoh Elemen Semantic</h2>
            <p>Berikut adalah beberapa elemen semantic yang umum digunakan dalam HTML5:</p>
            <ul>
              <li><code>&lt;header&gt;</code>: Bagian kepala dari halaman atau section.</li>
              <li><code>&lt;nav&gt;</code>: Navigasi utama.</li>
              <li><code>&lt;main&gt;</code>: Konten utama halaman.</li>
              <li><code>&lt;section&gt;</code>: Bagian konten bertema tertentu.</li>
              <li><code>&lt;article&gt;</code>: Konten independen seperti artikel blog.</li>
              <li><code>&lt;aside&gt;</code>: Konten tambahan seperti sidebar.</li>
              <li><code>&lt;footer&gt;</code>: Bagian bawah halaman.</li>
            </ul>
          </section>

          {/* CONTOH KODE */}
          <section>
            <h2 className="mt-4">🧾 Contoh Kode HTML</h2>
            <pre className="bg-light p-3 rounded border">
{`<header>
  <h1>Judul Website</h1>
</header>

<nav>
  <a href="#">Beranda</a> |
  <a href="#">Kontak</a>
</nav>

<main>
  <section>
    <h2>Artikel Utama</h2>
    <article>
      <h3>Judul Artikel</h3>
      <p>Isi artikel...</p>
    </article>
  </section>
  <aside>
    <p>Iklan atau info tambahan</p>
  </aside>
</main>

<footer>
  <p>Hak Cipta &copy; 2025</p>
</footer>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <header style={{ background: '#f8f9fa', padding: '10px' }}>
                  <h3>Judul Website</h3>
                </header>
                <nav style={{ padding: '10px', background: '#e9ecef' }}>
                  <a href="#">Beranda</a> | <a href="#">Kontak</a>
                </nav>
                <main style={{ padding: '10px' }}>
                  <section>
                    <h4>Artikel Utama</h4>
                    <article>
                      <h5>Judul Artikel</h5>
                      <p>Isi artikel yang bersifat independen dan bermakna.</p>
                    </article>
                  </section>
                  <aside style={{ background: '#f1f1f1', padding: '10px', marginTop: '10px' }}>
                    <p>Iklan atau informasi tambahan di sidebar</p>
                  </aside>
                </main>
                <footer style={{ background: '#212529', color: 'white', padding: '10px', textAlign: 'center' }}>
                  <p>Hak Cipta &copy; 2025</p>
                </footer>
              </Card.Body>
            </Card>
          </section>

          {/* MANFAAT */}
          <section>
            <h2 className="mt-4">🎯 Manfaat HTML Semantic</h2>
            <ul>
              <li>Memudahkan pemeliharaan kode (readability & struktur jelas)</li>
              <li>Lebih mudah diakses oleh pembaca layar dan perangkat bantu</li>
              <li>SEO friendly – mesin pencari lebih mudah memahami isi konten</li>
              <li>Konsisten dengan standar HTML5 modern</li>
            </ul>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Gunakan elemen semantic seperti <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, dan <code>&lt;article&gt;</code> untuk struktur yang
              jelas, aksesibilitas lebih baik, dan performa SEO yang optimal.
            </p>
          </section>

        </MainCard>
      </Col>
    </Row>
  );
}
