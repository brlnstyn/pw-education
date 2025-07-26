import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Formatting() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML: Headings, Comments & Text Formatting">

          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              Dalam HTML, kita dapat mengatur **struktur dokumen** menggunakan heading, menyisipkan **komentar** yang tidak terlihat di browser,
              serta menerapkan **pemformatan teks** untuk memberikan penekanan, gaya, atau informasi tambahan pada isi halaman.
              Fitur-fitur ini membuat konten lebih mudah dibaca, bermakna, dan profesional.
            </p>
          </section>

          {/* HEADINGS */}
          <section>
            <h2 className="mt-4">🔠 1. HTML Headings</h2>
            <p>
              HTML menyediakan 6 level heading, dari <code>&lt;h1&gt;</code> (paling besar/penting) hingga <code>&lt;h6&gt;</code> (paling kecil).
              Heading membantu pengguna dan mesin pencari memahami struktur dan hierarki konten.
            </p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<h3>Sub-sub Judul</h3>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <h1>Judul Utama</h1>
                <h2>Sub Judul</h2>
                <h3>Sub-sub Judul</h3>
              </Card.Body>
            </Card>
          </section>

          {/* COMMENTS */}
          <section>
            <h2 className="mt-4">💬 2. HTML Comments</h2>
            <p>
              Komentar HTML adalah bagian kode yang tidak akan tampil di browser. Fungsinya untuk memberi catatan,
              penjelasan kode, atau menyembunyikan bagian tertentu saat pengembangan.
            </p>
            <pre className="bg-light p-3 rounded border">
{`<!-- Ini adalah komentar HTML -->`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <em>(Komentar tidak tampil di browser)</em>
              </Card.Body>
            </Card>
          </section>

          {/* TEXT FORMATTING */}
          <section>
            <h2 className="mt-4">🖋️ 3. Text Formatting</h2>
            <p>
              HTML menyediakan tag-tag pemformatan teks untuk membuat kata lebih menonjol, ditekankan, atau bermakna khusus.
              Misalnya: **teks tebal**, *miring*, <u>garis bawah</u>, coretan, dan lainnya.
            </p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<p>
  <b>Tebal</b> <i>Miring</i> <u>Garis bawah</u>
  <mark>Highlight</mark> <del>Coret</del>
  H<sub>2</sub>O, E=mc<sup>2</sup>
</p>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <p>
                  <b>Tebal</b> <i>Miring</i> <u>Garis bawah</u>{' '}
                  <mark>Highlight</mark> <del>Coret</del>{' '}
                  H<sub>2</sub>O &nbsp; E=mc<sup>2</sup>
                </p>
              </Card.Body>
            </Card>
          </section>

          {/* HTML ENTITIES */}
          <section>
            <h2 className="mt-4">📜 4. HTML Entities</h2>
            <p>
              HTML Entities digunakan untuk menampilkan simbol khusus yang bentrok dengan tag HTML.
              Misalnya tanda <code>&lt;</code>, <code>&gt;</code>, dan <code>&amp;</code>.
            </p>
            <pre className="bg-light p-3 rounded border">
{`&lt; untuk <
&gt; untuk >
&amp; untuk &`}</pre>
            <Card className="mb-3">
              <Card.Body>
                <p>
                  &lt;div&gt; adalah tag HTML<br />
                  3 &gt; 2 adalah benar<br />
                  Gunakan &amp; untuk menyambung kata
                </p>
              </Card.Body>
            </Card>
          </section>

          {/* PRE */}
          <section>
            <h2 className="mt-4">📚 5. Tag &lt;pre&gt; (Preformatted Text)</h2>
            <p>
              Tag <code>&lt;pre&gt;</code> digunakan untuk menampilkan teks yang mempertahankan
              semua spasi, baris, dan indentasi—berguna untuk puisi, kode, atau contoh output.
            </p>
            <pre className="bg-light p-3 rounded border">
{`<pre>
Line 1
    Baris dengan indentasi
Line 3
</pre>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <pre>
Line 1
    Baris dengan indentasi
Line 3
                </pre>
              </Card.Body>
            </Card>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Elemen heading, komentar, dan pemformatan teks merupakan fondasi penting dalam penulisan HTML.
              Mereka membantu menyusun konten secara logis, memberi catatan internal, dan membuat isi lebih informatif serta mudah dibaca.
            </p>
          </section>
        </MainCard>
      </Col>
    </Row>
  );
}
