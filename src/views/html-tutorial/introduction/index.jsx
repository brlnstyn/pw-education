import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Introduction() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="📘 Pengenalan HTML untuk Pemula">

          {/* APA ITU HTML */}
          <section>
            <h2 className="mt-3">Apa itu HTML?</h2>
            <p>
              <strong>HTML (HyperText Markup Language)</strong> adalah bahasa markup standar untuk
              membuat struktur halaman web seperti teks, gambar, dan tautan.
            </p>
          </section>

          {/* SEJARAH */}
          <section>
            <h2 className="mt-4">🕰️ Sejarah Singkat</h2>
            <p>
              HTML pertama kali dikembangkan oleh <strong>Tim Berners‑Lee</strong> di CERN pada awal tahun 1990-an.
              Saat ini, versi terbaru yang digunakan adalah <strong>HTML5</strong>.
            </p>
          </section>

          {/* PERSIAPAN */}
          <section>
            <h2 className="mt-4">🛠️ Persiapan</h2>
            <ul>
              <li>Gunakan text editor seperti <strong>Visual Studio Code</strong></li>
              <li>Gunakan browser modern seperti <strong>Chrome</strong> atau <strong>Firefox</strong></li>
            </ul>
          </section>

          {/* CONTOH DOKUMEN HTML */}
          <section>
            <h2 className="mt-4">💡 Contoh Dokumen HTML Pertama</h2>
            <pre className="bg-light p-3 rounded border mb-2">
{`<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Belajar HTML #01</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <strong>Hasil Render:</strong><br />
                <p>Hello World!</p>
              </Card.Body>
            </Card>
          </section>

          {/* STRUKTUR DASAR */}
          <section>
            <h2 className="mt-4">🏗️ Struktur Dasar HTML</h2>
            <ul>
              <li><code>&lt;!DOCTYPE html&gt;</code>: Mendeklarasikan HTML5</li>
              <li><code>&lt;html&gt;</code>: Elemen root</li>
              <li><code>&lt;head&gt;</code>: Metadata halaman</li>
              <li><code>&lt;body&gt;</code>: Isi utama dari halaman web</li>
            </ul>
          </section>

          {/* HEADING */}
          <section>
            <h2 className="mt-4">🔤 Tag Heading</h2>
            <p>HTML menyediakan 6 level heading dari <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>
            <pre className="bg-light p-3 rounded border mb-3">
{`<h1>Ini Heading 1</h1>
<h2>Ini Heading 2</h2>
<h3>Ini Heading 3</h3>
<h4>Ini Heading 4</h4>
<h5>Ini Heading 5</h5>
<h6>Ini Heading 6</h6>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <h1>Ini Heading 1</h1>
                <h2>Ini Heading 2</h2>
                <h3>Ini Heading 3</h3>
                <h4>Ini Heading 4</h4>
                <h5>Ini Heading 5</h5>
                <h6>Ini Heading 6</h6>
              </Card.Body>
            </Card>
          </section>

          {/* PARAGRAF */}
          <section>
            <h2 className="mt-4">📄 Paragraf</h2>
            <p>Digunakan untuk menampilkan blok teks, memakai tag <code>&lt;p&gt;</code>.</p>
            <pre className="bg-light p-3 rounded border">
{`<p>Ini adalah paragraf pertama saya di HTML.</p>`}
            </pre>
            <Card className="my-3">
              <Card.Body>
                <p>Ini adalah paragraf pertama saya di HTML.</p>
              </Card.Body>
            </Card>
          </section>

          {/* LIST */}
          <section>
            <h2 className="mt-4">📝 Daftar (List)</h2>

            <h5 className="mt-3">Unordered List (tidak berurutan):</h5>
            <pre className="bg-light p-3 rounded border">
{`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}
            </pre>
            <Card className="my-3">
              <Card.Body>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </Card.Body>
            </Card>

            <h5 className="mt-3">Ordered List (berurutan):</h5>
            <pre className="bg-light p-3 rounded border">
{`<ol>
  <li>Install VS Code</li>
  <li>Buat file HTML</li>
  <li>Jalankan di browser</li>
</ol>`}
            </pre>
            <Card className="my-3">
              <Card.Body>
                <ol>
                  <li>Install VS Code</li>
                  <li>Buat file HTML</li>
                  <li>Jalankan di browser</li>
                </ol>
              </Card.Body>
            </Card>
          </section>

          {/* PENUTUP */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Elemen-elemen dasar seperti <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;p&gt;</code>,
              dan <code>&lt;ul&gt;</code> adalah fondasi untuk membangun halaman web yang terstruktur dan mudah dibaca.
            </p>
          </section>
        </MainCard>
      </Col>
    </Row>
  );
}
