import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Badge, Button, Card, Accordion } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';
//import notes from '../../data/notes';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get('/api/notes'); // destructure
    //console.log(data);
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title='Welcome PR'>
      <Link to='createnote'>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
          Create New Note
        </Button>
      </Link>
      {notes &&
        notes.map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }} key={note._id}>
              <Card.Header style={{ display: 'flex' }}>
                <span
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                    fontSize: 18
                  }}
                >
                  {note.title}
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant='danger'
                    className='mx-2'
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Card.Body>
                <h4>
                  <Badge bg='success'>Category - {note.category}</Badge>
                </h4>

                <blockquote className='blockquote mb-0'>
                  <p>{note.content}</p>
                  <footer className='blockquote-footer'>
                    Created On -date
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyNotes;
