import { Form, FormGroup, Label, Input } from "reactstrap";

function App() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Movie Name</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      {/* <ForwardCounter />
<BackwardCounter /> */}
    </Form>
  );
}

export default App;
