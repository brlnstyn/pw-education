import { Col, Row } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';
import video from '../../../assets/videos/html-media-image.mp4';
import example from '../../../assets/images/img-example.jpg'

export default function Image() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Image">
          <video controls width="70%" height="30%" className="d-block mx-auto rounded shadow-sm">
            <source src={video} type="video/mp4" />
          </video>

          <div className="my-4 fs-5">
            <p className="fs-5">
              Untuk menampilkan gambar di HTML, gunakan tag <code>&lt;img&gt;</code>. Tag ini bersifat <em>self-closing</em> (tidak
              memerlukan penutup), dan memiliki dua atribut penting:
            </p>
            <ul>
              <li>
                <code>src</code> – Menentukan lokasi atau path gambar yang ingin ditampilkan.
              </li>
              <li>
                <code>alt</code> – Menyediakan teks alternatif jika gambar gagal dimuat atau untuk pembaca layar.
              </li>
            </ul>
            <p className="fs-5">
              Gambar sebenarnya tidak dimasupkkan langsung ke dalam halaman web, melainkan hanya ditautkan. Tag <code>&lt;img&gt;</code> akan
              membuat ruang penampung untuk gambar tersebut berdasarkan sumber yang diberikan. Perlu diingat, tag <code>&lt;img&gt;</code>{' '}
              adalah elemen kosong yang hanya memiliki atribut, tanpa konten atau tag penutup.
            </p>
            <h3 className="mt-4">Contoh</h3>
            <div className="border rounded shadow-sm bg-light">
              <pre className="bg-light p-3 rounded">&lt;img src="img_baymax.jpg" alt="Baymax from Big Hero 6"&gt;</pre>
            </div>
            <div className="text-center my-4">
              <img src={example} alt="Contoh Gambar" className="img-fluid rounded shadow" />
            </div>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
