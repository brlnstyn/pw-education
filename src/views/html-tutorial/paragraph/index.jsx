import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Paragraph() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Paragraph">
          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📄 Pendahuluan</h2>
            <p>
              Elemen <code>&lt;p&gt;</code> digunakan untuk membuat paragraf teks dalam HTML. Paragraf otomatis diberi jarak
              atas dan bawah oleh browser agar teks mudah dibaca.
            </p>
          </section>

          {/* DASAR PENGGUNAAN */}
          <section>
            <h2 className="mt-4">✍️ Cara Menulis Paragraf</h2>
            <pre className="bg-light p-3 rounded border">
{`<p>Ini paragraf pertama saya.</p>
<p>Ini paragraf kedua yang terpisah.</p>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <p>Ini paragraf pertama saya.</p>
                <p>Ini paragraf kedua yang terpisah.</p>
              </Card.Body>
            </Card>
          </section>

          {/* ATRIBUT */}
          <section>
            <h2 className="mt-4">⚙️ Atribut yang Didukung</h2>
            <p>
              Tag <code>&lt;p&gt;</code> mendukung atribut seperti <code>class</code>, <code>id</code>, dan <code>style</code>.
              Contohnya:
            </p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<p class="highlight">Paragraf penting</p>
<p id="intro">Paragraf pengantar</p>
<p style="text-align: center;">Teks rata tengah</p>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <p className="highlight">Paragraf penting</p>
                <p id="intro">Paragraf pengantar</p>
                <p style={{ textAlign: 'center' }}>Teks rata tengah</p>
              </Card.Body>
            </Card>
          </section>

          {/* BR TAG */}
          <section>
            <h2 className="mt-4">↵ Ganti Baris dengan &lt;br&gt;</h2>
            <p>
              Gunakan <code>&lt;br&gt;</code> untuk memaksa baris baru dalam satu paragraf.
            </p>
            <pre className="bg-light p-3 rounded border">
{`<p>Ini baris pertama.<br>Ini baris kedua.</p>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <p>
                  Ini baris pertama.<br />
                  Ini baris kedua.
                </p>
              </Card.Body>
            </Card>
          </section>

          {/* HR TAG */}
          <section>
            <h2 className="mt-4">— Garis Horizontal dengan &lt;hr&gt;</h2>
            <p>
              Gunakan <code>&lt;hr&gt;</code> untuk memberi garis pemisah antar konten.
            </p>
            <pre className="bg-light p-3 rounded border">
{`<p>Paragraf atas.</p>
<hr>
<p>Paragraf bawah.</p>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <p>Paragraf atas.</p>
                <hr />
                <p>Paragraf bawah.</p>
              </Card.Body>
            </Card>
          </section>

          {/* PRE TAG */}
          <section>
            <h2 className="mt-4">📋 Format Khusus: &lt;pre&gt;</h2>
            <p>
              <code>&lt;pre&gt;</code> menjaga spasi, indentasi, dan baris baru apa adanya.
            </p>
            <pre className="bg-light p-3 rounded border">
{`<pre>
Ini baris pertama
    Ini indentasi
Ini baris terakhir
</pre>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <pre>
Ini baris pertama
    Ini indentasi
Ini baris terakhir
                </pre>
              </Card.Body>
            </Card>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">📌 Kesimpulan</h2>
            <p>
              Paragraf HTML ditulis menggunakan <code>&lt;p&gt;</code>. Gunakan <code>&lt;br&gt;</code> untuk baris baru, <code>&lt;hr&gt;</code> untuk pemisah, dan <code>&lt;pre&gt;</code> untuk format tetap.
              Selalu gunakan atribut seperti <code>class</code> dan <code>style</code> sesuai kebutuhan.
            </p>
          </section>
        </MainCard>
      </Col>
    </Row>
  );
}
