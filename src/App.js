import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countbox from "./components/Countbox";
import counterStore from "./stores/counterStore";

function App() {
  //state 가져오기
  const { count, increaseBy, decreaseBy, reset } = counterStore();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="count-container">
              <div>
                <Countbox count={count} />
              </div>
              <div className="buttons">
                <Button variant="info" onClick={() => increaseBy(1)}>
                  +1
                </Button>
                <Button variant="info" onClick={() => increaseBy(10)}>
                  +10
                </Button>
                <Button variant="info" onClick={() => decreaseBy(1)}>
                  -1
                </Button>
                <Button variant="info" onClick={() => decreaseBy(10)}>
                  -10
                </Button>
                <Button variant="info" onClick={reset}>
                  리셋
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
