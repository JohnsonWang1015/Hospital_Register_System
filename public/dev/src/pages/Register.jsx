import { Button, InputGroup, FormControl } from "solid-bootstrap";

import { patientStore, setPatientStore } from "../stores/patientStore";
import { setPatientDataStore } from "../stores/patientDataStore";

import { socket } from "../network/websocket";
import { batch, onMount } from "solid-js";

export default function Register() {
  var index = 0;
  return (
    <div>
      <h1 class="text-center">櫃台掛號</h1>
      <br />
      <InputGroup class="mb-3">
        <InputGroup.Text id="basic-addon1">姓名</InputGroup.Text>
        <FormControl
          placeholder="病患姓名"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="username"
        />
      </InputGroup>
      <br />
      <div class="d-grid gap-2">
        <Button
          variant="primary"
          size="lg"
          onClick={(e) => {
            // batch(() => {
            socket.emit(
              "register from client",
              JSON.parse(
                JSON.stringify({
                  id: patientStore.id + 1,
                  name: document.getElementById("username").value,
                })
              ),
              (response) => {
                console.log(response);
              }
            );
            setPatientStore({
              id: patientStore.id + 1,
              name: document.getElementById("username").value,
            });
            // });
          }}
        >
          掛號
        </Button>
      </div>
      {/* {console.log(patientStore.id)} */}
      {/* {console.log(patientStore.name)} */}
    </div>
  );
}
