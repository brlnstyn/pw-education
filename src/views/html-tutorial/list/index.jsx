import { useState } from 'react';
import { Col, Row, Card, Button, Form } from 'react-bootstrap';
import MainCard from '../../../components/Card/MainCard';

export default function List() {
  const [checked, setChecked] = useState([false, false, false]);
  const [items, setItems] = useState(['HTML', 'CSS']);
  const [newItem, setNewItem] = useState('');

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <Row>
      <Col sm={12}>
        <MainCard title="HTML List">

          {/* PENDAHULUAN */}
          <section>
            <h2 className="mt-3">📘 Pendahuluan</h2>
            <p>
              HTML menyediakan tiga jenis list dasar:
              <code> &lt;ul&gt; </code> (unordered), 
              <code> &lt;ol&gt; </code> (ordered), dan 
              <code> &lt;dl&gt; </code> (description list).
            </p>
          </section>

          {/* UNORDERED LIST */}
          <section>
            <h2 className="mt-4">• 1. Unordered List (&lt;ul&gt;)</h2>
            <p>Digunakan untuk daftar tanpa urutan.</p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<ul>
  <li>Kopi</li>
  <li>Teh</li>
  <li>Susu</li>
</ul>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <ul>
                  <li>Kopi</li>
                  <li>Teh</li>
                  <li>Susu</li>
                </ul>
              </Card.Body>
            </Card>
          </section>

          {/* ORDERED LIST */}
          <section>
            <h2 className="mt-4">• 2. Ordered List (&lt;ol&gt;)</h2>
            <p>Digunakan untuk daftar yang berurutan (bernomor).</p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<ol type="1">
  <li>Langkah Pertama</li>
  <li>Langkah Kedua</li>
</ol>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <ol type="1">
                  <li>Langkah Pertama</li>
                  <li>Langkah Kedua</li>
                </ol>
              </Card.Body>
            </Card>
          </section>

          {/* DESCRIPTION LIST */}
          <section>
            <h2 className="mt-4">• 3. Description List (&lt;dl&gt;)</h2>
            <p>Digunakan untuk daftar istilah dan penjelasannya.</p>
            <pre className="bg-light p-3 rounded border mb-2">
{`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}
            </pre>
            <Card className="mb-3">
              <Card.Body>
                <dl>
                  <dt><strong>HTML</strong></dt>
                  <dd>HyperText Markup Language</dd>
                  <dt><strong>CSS</strong></dt>
                  <dd>Cascading Style Sheets</dd>
                </dl>
              </Card.Body>
            </Card>
          </section>

          {/* INTERAKTIF: CHECKLIST */}
          <section>
            <h2 className="mt-4">📝 Checklist Interaktif</h2>
            <Card className="mb-3">
              <Card.Body>
                <ul>
                  {['Kopi', 'Teh', 'Susu'].map((item, i) => (
                    <li key={i}>
                      <input
                        type="checkbox"
                        checked={checked[i]}
                        onChange={() => toggleCheck(i)}
                        className="me-2"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </section>

          {/* INTERAKTIF: LIST DENGAN HYPERLINK */}
          <section>
            <h2 className="mt-4">🔗 Daftar dengan Hyperlink</h2>
            <Card className="mb-3">
              <Card.Body>
                <ul>
                  <li><a href="https://edupaham.vercel.app/html/introduction" target="_blank" rel="noopener noreferrer">Pengenalan HTML</a></li>
                  <li><a href="https://edupaham.vercel.app/html/formatting" target="_blank" rel="noopener noreferrer">Text Formatting</a></li>
                  <li><a href="https://edupaham.vercel.app/html/table" target="_blank" rel="noopener noreferrer">Tabel HTML</a></li>
                </ul>
              </Card.Body>
            </Card>
          </section>

          {/* INTERAKTIF: LIST GENERATOR */}
          <section>
            <h2 className="mt-4">⚙️ Generator Daftar Interaktif</h2>
            <Form className="mb-3 d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Masukkan item baru"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <Button onClick={handleAddItem}>Tambah</Button>
            </Form>
            <Card className="mb-3">
              <Card.Body>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </section>

          {/* KESIMPULAN */}
          <section>
            <h2 className="mt-4">✅ Kesimpulan</h2>
            <p>
              Gunakan <code>&lt;ul&gt;</code> untuk daftar tanpa urutan, 
              <code>&lt;ol&gt;</code> untuk daftar berurutan, dan 
              <code>&lt;dl&gt;</code> untuk daftar istilah & definisi.
              Versi interaktif membantu pembelajaran lebih menyenangkan!
            </p>
          </section>

        </MainCard>
      </Col>
    </Row>
  );
}
