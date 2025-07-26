import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Links() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Links (Hyperlink)">
          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              HTML Link (Hyperlink) memungkinkan kita berpindah antar halaman web. Tag <code>&lt;a&gt;</code> digunakan dengan atribut <code>href</code> sebagai alamat tujuan.
              Tautan ini bisa berupa link ke situs lain, ke halaman internal, bahkan email atau gambar.
            </p>
          </section>

          {/* JENIS LINK */}
          <section>
            <h2 className="mt-4">🔗 Jenis-Jenis Link</h2>
            <ul>
              <li><strong>Eksternal</strong>: link ke situs lain</li>
              <li><strong>Internal</strong>: antar halaman di situs kita sendiri</li>
              <li><strong>Anchor</strong>: lompat ke bagian halaman tertentu</li>
              <li><strong>Email</strong>: buka email client dengan <code>mailto:</code></li>
            </ul>
          </section>

          {/* CONTOH LINK */}
          <section>
            <h2 className="mt-4">✍️ Contoh Kode HTML</h2>
            <pre className="bg-light p-3 rounded border">
{`<!-- Link Eksternal -->
<a href="https://www.google.com" target="_blank" rel="noopener">Google</a>

<!-- Link Internal -->
<a href="https://edupaham.vercel.app/about" target="_blank" rel="noopener">Tentang Kami</a>

<!-- Link ke Halaman Pengenalan -->
<a href="https://edupaham.vercel.app/html/introduction" target="_blank" rel="noopener">Bagian 1: Pengenalan HTML</a>

<!-- Link Email -->
<a href="mailto:email@example.com">Hubungi Kami</a>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <p><a href="https://www.google.com" target="_blank" rel="noopener">Google</a></p>
                <p><a href="https://edupaham.vercel.app/about" target="_blank" rel="noopener">Tentang Kami</a></p>
                <p><a href="https://edupaham.vercel.app/html/introduction" target="_blank" rel="noopener">Bagian 1: Pengenalan HTML</a></p>
                <p><a href="mailto:email@example.com">Hubungi Kami</a></p>
              </Card.Body>
            </Card>
          </section>

          {/* LINK DENGAN GAMBAR */}
          <section>
            <h2 className="mt-4">🖼️ Link dengan Gambar</h2>
            <p>
              Gambar juga bisa dijadikan link dengan membungkus elemen <code>&lt;img&gt;</code> di dalam <code>&lt;a&gt;</code>.
              Contoh berikut menggunakan logo EduPaham:
            </p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<a href="https://edupaham.vercel.app" target="_blank">
  <img src="https://edupaham.vercel.app/assets/edupaham-Cv5NQefs.png" alt="Logo EduPaham">
</a>`}
            </pre>
            <Card className="mb-3 text-center">
              <Card.Body>
                <a
                  href="https://edupaham.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Klik untuk ke EduPaham"
                >
                  <img
                    src="https://edupaham.vercel.app/assets/edupaham-Cv5NQefs.png"
                    alt="Logo EduPaham"
                    style={{ maxWidth: '180px', borderRadius: '12px' }}
                  />
                </a>
                <p className="mt-2"><small>Logo EduPaham – klik untuk ke halaman utama</small></p>
              </Card.Body>
            </Card>
          </section>

          {/* ATRIBUT LINK */}
          <section>
            <h2 className="mt-4">⚙️ Atribut pada Tag &lt;a&gt;</h2>
            <ul>
              <li><code>href</code>: alamat tujuan link</li>
              <li><code>target="_blank"</code>: buka di tab baru</li>
              <li><code>rel="noopener"</code>: keamanan saat pakai <code>_blank</code></li>
              <li><code>title</code>: tooltip saat hover</li>
            </ul>
            <pre className="bg-light p-3 rounded border">
{`<a href="https://example.com" target="_blank" rel="noopener" title="Kunjungi Example">Klik di sini</a>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <a href="https://example.com" target="_blank" rel="noopener" title="Kunjungi Example">
                  Klik di sini (hover untuk lihat tooltip)
                </a>
              </Card.Body>
            </Card>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Hyperlink adalah bagian penting dari HTML. Gunakan <code>&lt;a&gt;</code> untuk membuat navigasi, tautan ke halaman luar,
              email, atau gambar. Tambahkan atribut seperti <code>target</code> dan <code>rel</code> untuk pengalaman pengguna dan keamanan yang lebih baik.
            </p>
          </section>
        </MainCard>
      </Col>
    </Row>
  );
}
