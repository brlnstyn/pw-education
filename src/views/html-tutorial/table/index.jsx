import { Col, Row, Card } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function Table() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Table">

          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              Tabel HTML digunakan untuk menyusun data dalam bentuk baris dan kolom.
              Tag penting yang digunakan meliputi: <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, dan <code>&lt;td&gt;</code>.
              Anda juga dapat menyisipkan gambar di dalam sel tabel menggunakan tag <code>&lt;img&gt;</code>.
            </p>
          </section>

          {/* DASAR TABEL */}
          <section>
            <h2 className="mt-4">🔧 Struktur Dasar Tabel</h2>
            <pre className="bg-light p-3 rounded border mb-2">
{`<table>
  <tr>
    <th>No</th><th>Nama</th><th>Poin</th>
  </tr>
  <tr>
    <td>1</td><td>Anggi</td><td>85</td>
  </tr>
  <tr>
    <td>2</td><td>Budi</td><td>90</td>
  </tr>
</table>`}
            </pre>
            <Card className="mb-4">
              <Card.Body>
                <table className="table table-bordered table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Poin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Anggi</td>
                      <td>85</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Budi</td>
                      <td>90</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </section>

          {/* GAMBAR DI TABEL */}
          <section>
            <h2 className="mt-4">🖼️ Menyisipkan Gambar ke Dalam Tabel</h2>
            <p>
              Anda bisa menyisipkan gambar di dalam sel tabel dengan menggunakan tag <code>&lt;img&gt;</code> di dalam <code>&lt;td&gt;</code>.
            </p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<tr>
  <td><img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Profil" /></td>
  <td>Karina</td>
  <td>92</td>
</tr>`}
            </pre>
            <Card className="mb-4">
              <Card.Body>
                <table className="table table-bordered align-middle text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th>Foto</th>
                      <th>Nama</th>
                      <th>Poin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                          alt="Profil"
                          width="50"
                          height="50"
                          style={{ borderRadius: '8px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>Karina</td>
                      <td>92</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </section>

          {/* COLSPAN & ROWSPAN */}
          <section>
            <h2 className="mt-4">🎨 Baris Gabung & Perataan</h2>
            <p>
              Gunakan <code>colspan</code> atau <code>rowspan</code> untuk menggabungkan kolom atau baris.
              Ini berguna saat menampilkan data yang lebih kompleks seperti tabel keuangan atau laporan kelas.
            </p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<tr>
  <td rowspan="2">Total</td>
  <td>85</td>
</tr>
<tr>
  <td>90</td>
</tr>`}
            </pre>
            <Card className="mb-4">
              <Card.Body>
                <table className="table table-bordered text-center">
                  <tbody>
                    <tr>
                      <td rowSpan={2} className="align-middle">Total</td>
                      <td>85</td>
                    </tr>
                    <tr>
                      <td>90</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Tabel HTML sangat berguna untuk menampilkan data secara terstruktur. Gunakan kombinasi <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, dan <code>&lt;img&gt;</code> untuk kebutuhan sederhana maupun kompleks.
              Tambahkan CSS atau class Bootstrap seperti <code>.table</code>, <code>.table-dark</code>, dan <code>.table-bordered</code> untuk tampilan modern dan responsif.
            </p>
          </section>

        </MainCard>
      </Col>
    </Row>
  );
}
