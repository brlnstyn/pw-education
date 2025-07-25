import { Col, Row } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';
import video from '../../../assets/videos/html-media-video.mp4';
import example from '../../../assets/videos/example.mp4';

export default function Video() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Video">
          <video controls width="70%" height="30%" className="d-block mx-auto rounded shadow-sm">
            <source src={video} type="video/mp4" />
          </video>
          <div className="my-4 fs-5">
            <p className="fs-5">
              Untuk menampilkan video di halaman web, HTML menggunakan tag <code>&lt;video&gt;</code>. Tag ini memungkinkan pengguna memutar
              video langsung dari browser tanpa perlu plugin tambahan.
            </p>
            <ul>
              <li>
                <code>controls</code> – Menampilkan tombol play, pause, volume, dan fullscreen.
              </li>
              <li>
                <code>&lt;source&gt;</code> – Menentukan file video dan formatnya (seperti mp4, webm, atau ogg).
              </li>
              <li>
                <code>autoplay</code> – Menentukan file video dan formatnya (seperti mp4, webm, atau ogg).
              </li>
              <li>
                <code>loop</code> – Video diputar berulang terus-menerus.
              </li>
              <li>
                <code>muted</code> – Memulai video dalam keadaan tanpa suara.
              </li>
              <li>
                <code>poster</code> – Gambar yang ditampilkan sebelum video diputar.
              </li>
            </ul>
            <h3 className="mt-4">Contoh</h3>
            <div className="border rounded shadow-sm bg-light">
              <pre className="bg-light p-3 rounded">
                <code>
                  &lt;video controls&gt; &lt;source src="movie.mp4" type="video/mp4"&gt; Your browser does not support this video tag.
                  &lt;/video&gt;
                </code>
              </pre>
            </div>
            <div className="text-center my-4">
              <video width="50%" height="240" controls>
                <source src={example} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
