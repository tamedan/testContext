import React from "react";
import { Classifier, CLASSIFIER_FIELDS } from "./classifier.js";
import {
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel,
  Row
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSpinner,
  faBug,
  faUserSecret,
  faUser
} from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.addFieldInputChange = this.addFieldInputChange.bind(this);
    this.state = {
      classifier: new Classifier(),
      fieldInput: ""
    };
  }

  addFieldInputChange(e, field) {
    e.persist();
    this.setState({
      [field]: e.target.value
    });
  }
  addField() {
    let classifier = this.state.classifier;
    classifier.fields.push({ name: this.state.fieldInput });
    this.setState({
      classifier,
      fieldInput: ""
    });
  }
  show() {
    const Cl = new Classifier();
    console.log(this.state);
    console.log(this.state.classifier instanceof Classifier);
  }
  render() {
    return (
      <div className={"container"}>
        {this.show()}
        <Row>
          <FormGroup>
            <Col md={3}>
              <ControlLabel>Поле классификатора:</ControlLabel>
            </Col>
            <Col md={4}>
              <FormControl
                type="text"
                value={this.state.fieldInput}
                placeholder="имя поля латинскими буквами"
                ref={CLASSIFIER_FIELDS.fullName}
                onChange={e =>
                  this.addFieldInputChange(e, CLASSIFIER_FIELDS.fullName)
                }
              />
            </Col>
            <Col md={5}>
              <Button
                onClick={() => this.addField()}
                style={{ width: "40px", height: "40px", padding: 0 }}
                disabled={this.state.fieldInput.length === 0}
              >
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faSpinner} className={"fa-6x"} />
                <FontAwesomeIcon icon={faBug} className={"fa-6x"} />
                <FontAwesomeIcon icon={faUserSecret} className={"fa-2x"} />
                <FontAwesomeIcon icon={faUser} className={"fa-2x"} />
              </Button>
            </Col>
          </FormGroup>
        </Row>
      </div>
    );
  }
}

export default Menu;
