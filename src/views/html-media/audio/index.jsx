import { Col, Row } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';
import video from '../../../assets/videos/html-media-audio.mp4';
import example from '../../../assets/audios/heroes-by-alex-productions.mp3';

export default function Audio() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML Audio">
          <video controls width="70%" height="30%" className="d-block mx-auto rounded shadow-sm">
            <source src={video} type="video/mp4" />
          </video>
          <div className="my-4 fs-5">
            <p className="fs-5">
              Untuk menambahkan audio ke dalam halaman web, HTML menyediakan tag <code>&lt;audio&gt;</code>. Tag ini memungkinkan pengguna
              memutar berbagai jenis file suara seperti musik, rekaman, atau efek suara langsung dari browser.
            </p>
            <ul>
              <li>
                <code>controls</code> – Menampilkan kontrol pemutar seperti tombol play, pause, dan pengatur volume.
              </li>
              <li>
                <code>&lt;source&gt;</code> – Menentukan lokasi dan format file audio yang akan diputar (misalnya: MP3, OGG, dan lainnya).
              </li>
              <li>
                <code>autoplay</code> – Secara otomatis memutar audio ketika halaman dimuat.
              </li>
              <li>
                <code>loop</code> – Memutar audio secara berulang tanpa henti.
              </li>
              <li>
                <code>muted</code> – Memulai pemutaran dengan kondisi suara dalam keadaan mati.
              </li>
            </ul>
            <h3 className="mt-4">Contoh</h3>
            <div className="border rounded shadow-sm bg-light">
              <pre className="bg-light p-3 rounded">
                <code>
                  &lt;audio controls&gt; &lt;source src="heroes-by-alex-productions.mp3" type="audio/mpeg"&gt; Your browser does not support the audio element.
                  &lt;/audio&gt;
                </code>
              </pre>
            </div>
            <div className="text-center my-4">
              <audio controls>
                <source src={example} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
