import React from "react";
import Editor from "rich-markdown-editor";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Panel,
  Row,
  Col,
  InputGroup,
  Input,
} from "rsuite";

export default function QuestionEditor() {
  return (
    <div>
      <FormGroup>
        <ControlLabel>Question Title</ControlLabel>
        <FormControl name="name" />
        <HelpBlock tooltip>
          This will be displayed as the main title of the question
        </HelpBlock>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <Row>
          <Col md={6} sm={12}>
            <Panel bordered bodyFill>
              <Editor
                defaultValue="Hello world!"
                dark={true}
                onChange={(value: () => string) => {
                  value;
                }}
              />
            </Panel>
          </Col>
          <Col md={6} sm={12}>
            <HelpBlock tooltip>
              This will be text that describes the question in detail
            </HelpBlock>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Choices</ControlLabel>
        <InputGroup>
          <Input defaultValue="A" style={{ width: 40 }} />
          <InputGroup.Addon>:</InputGroup.Addon>
          <Input />
        </InputGroup>
        <HelpBlock tooltip>Required</HelpBlock>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Answer</ControlLabel>
        <FormControl name="Answer" />
        <br />
        <br />
      </FormGroup>
    </div>
  );
}
