import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';
import exampleImage from '../../../assets/images/imgeg.jpg'; 

export default function Attributes() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="Belajar HTML: Tag, Element, dan Atribut">
          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              Dalam HTML, tiga komponen dasar yang wajib dipahami pemula adalah:
              <strong> Tag, Element, dan Atribut</strong>. Memahami ketiganya akan
              membantu Anda membangun struktur halaman web dengan benar dan efisien.
            </p>
          </section>

          {/* TAG */}
          <section>
            <h2 className="mt-4">🔖 1. Apa Itu Tag?</h2>
            <p>
              <strong>Tag</strong> adalah bagian pembuka dan penutup dari perintah HTML. Tag memberitahu browser
              apa yang harus dilakukan terhadap konten di dalamnya.
            </p>
            <p><strong>Contoh:</strong></p>
            <pre><code>{`<p>Ini adalah paragraf.</p>`}</code></pre>
            <p>
              Di atas, <code>&lt;p&gt;</code> adalah <strong>tag pembuka</strong>,
              sedangkan <code>&lt;/p&gt;</code> adalah <strong>tag penutup</strong>.
            </p>
          </section>

          {/* ELEMEN */}
          <section>
            <h2 className="mt-4">🧱 2. Apa Itu Elemen?</h2>
            <p>
              <strong>Elemen</strong> adalah gabungan dari tag pembuka, konten, dan tag penutup.
              Elemen adalah struktur fungsional yang digunakan browser untuk menampilkan sesuatu.
            </p>
            <p><strong>Contoh Elemen Paragraf:</strong></p>
            <pre><code>{`<p>Saya sedang belajar HTML.</p>`}</code></pre>
            <p>Elemen ini akan menampilkan teks dalam format paragraf.</p>
          </section>

          {/* ATRIBUT */}
          <section>
            <h2 className="mt-4">⚙️ 3. Apa Itu Atribut?</h2>
            <p>
              <strong>Atribut</strong> adalah informasi tambahan yang diberikan pada tag pembuka
              untuk memberikan instruksi lebih lanjut kepada browser. Atribut terdiri dari <code>nama</code> dan <code>nilai</code>.
            </p>

            <p><strong>Contoh:</strong></p>
            <pre><code>{`<a href="https://google.com" target="_blank">Kunjungi Google</a>`}</code></pre>
            <p>
              Atribut <code>href</code> menyimpan tautan tujuan, sedangkan <code>target="_blank"</code>
              membuat link terbuka di tab baru.
            </p>

            <h5 className="mt-3">Beberapa atribut umum:</h5>
            <ul>
              <li><code>href</code> — untuk tautan (digunakan di &lt;a&gt;)</li>
              <li><code>src</code> — untuk sumber gambar/video</li>
              <li><code>alt</code> — teks alternatif untuk gambar</li>
              <li><code>class</code> — mengatur CSS</li>
              <li><code>id</code> — penanda unik untuk elemen</li>
              <li><code>style</code> — menambahkan CSS langsung</li>
            </ul>
          </section>

          {/* VISUALISASI */}
          <section>
            <h2 className="mt-4">🧪 4. Visualisasi Kode</h2>

            {/* PARAGRAF */}
            <Card className="mb-3">
              <Card.Body>
                <p><strong>Contoh Paragraf</strong></p>
                <pre><code>{`<p>Ini paragraf pertama saya!</p>`}</code></pre>
                <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f9f9f9' }}>
                  Ini paragraf pertama saya!
                </div>
              </Card.Body>
            </Card>

            {/* GAMBAR */}
            <Card className="mb-3">
              <Card.Body>
                <p><strong>Contoh Gambar dengan Atribut</strong></p>
                <pre><code>{`<img src="images/imgeg.jpg" alt="Contoh Gambar" style="border: 1px solid gray;">`}</code></pre>
                <img
                  src={exampleImage}
                  alt="Contoh Gambar"
                  style={{ border: '1px solid gray', maxWidth: '100%', height: 'auto' }}
                />
              </Card.Body>
            </Card>

            {/* TAUTAN */}
            <Card className="mb-3">
              <Card.Body>
                <p><strong>Contoh Tautan</strong></p>
                <pre><code>{`<a href="https://edupaham.vercel.app/" target="_blank">Belajar HTML di EduPaham</a>`}</code></pre>
                <a href="https://edupaham.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Belajar HTML di EduPaham
                </a>
              </Card.Body>
            </Card>
          </section>

          {/* PENUTUP */}
          <section>
            <h2 className="mt-4">📌 Kesimpulan</h2>
            <p>
              HTML terdiri dari tag sebagai pembungkus, elemen sebagai struktur konten, dan atribut sebagai pengatur tambahan.
              Dengan memahami ketiganya, kamu bisa mulai membangun halaman web dengan baik dan benar.
            </p>
          </section>
        </MainCard>
      </Col>
    </Row>
  );
}
