import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Entity() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Entity">

          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              HTML Entity digunakan untuk menampilkan karakter khusus seperti simbol, tanda kutip, atau karakter yang memiliki arti khusus dalam HTML.
              Entity ini biasanya diawali dengan <code>&amp;</code> dan diakhiri dengan <code>;</code>, misalnya <code>&amp;lt;</code> untuk tanda kurang dari (&lt;) atau <code>&amp;amp;</code> untuk tanda ampersand (&amp;).
            </p>
          </section>

          {/* CONTOH ENTITY POPULER */}
          <section>
            <h2 className="mt-4">🔤 Contoh HTML Entities</h2>
            <pre className="bg-light p-3 rounded border mb-2">
{`Karakter Kurang Dari: &lt;   => &lt;
Karakter Lebih Dari: &gt;    => &gt;
Tanda Ampersand: &amp;     => &
Tanda Kutip Ganda: &quot;  => "
Tanda Kutip Tunggal: &apos;  => '
Simbol Copyright: &copy;  => ©
Simbol Registered: &reg;  => ®`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <ul>
                  <li>&lt; = Tanda Kurang Dari</li>
                  <li>&gt; = Tanda Lebih Dari</li>
                  <li>&amp; = Tanda Ampersand</li>
                  <li>&quot; = Kutip Ganda</li>
                  <li>&apos; = Kutip Tunggal</li>
                  <li>&copy; = Simbol Hak Cipta</li>
                  <li>&reg; = Simbol Terdaftar</li>
                </ul>
              </Card.Body>
            </Card>
          </section>

          {/* PENTINGNYA ENTITY */}
          <section>
            <h2 className="mt-4">❗ Mengapa HTML Entity Penting?</h2>
            <p>
              Jika kamu menuliskan simbol khusus secara langsung dalam HTML seperti <code>&lt;</code>, maka browser bisa salah menafsirkannya sebagai tag. Oleh karena itu, gunakan HTML Entity untuk menghindari error dan memastikan simbol ditampilkan dengan benar.
            </p>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              HTML Entity sangat penting untuk menampilkan karakter khusus tanpa konflik dengan sintaks HTML. Gunakan entity seperti <code>&amp;lt;</code>, <code>&amp;gt;</code>, dan <code>&amp;amp;</code> agar kode lebih aman dan terbaca dengan benar.
            </p>
          </section>

        </MainCard>
      </Col>
    </Row>
  );
}
