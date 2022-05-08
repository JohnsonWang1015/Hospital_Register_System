import { Table } from "solid-bootstrap";
import { createSignal, onMount, Switch, Match } from "solid-js";
import { socket } from "../network/websocket";

import {
  patientDataStore,
  setPatientDataStore,
} from "../stores/patientDataStore";

import PatientDataTable from "../components/PatientDataTable";
import { patientStore } from "../stores/patientStore";

export default function Doctor() {
  function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  var dataArray = [...patientDataStore.info];
  socket.on("register from server", (args) => {
    dataArray.splice(patientStore.id - 1, 0, cloneObject(args));
    // callback("got it from client");
    setPatientDataStore("origin", dataArray);
    setPatientDataStore("info", dataArray);
  });

  const [patientData, setPatientData] = createSignal(
    cloneObject(patientDataStore.origin)
  );

  return (
    <div>
      <h1 class="text-center">醫生看診</h1>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr class="text-center">
            <td>順序</td>
            <td>姓名</td>
            <td>狀態</td>
          </tr>
        </thead>
        <tbody>
          <Switch fallback={<div class="text-center">載入中...</div>}>
            <Match when={patientDataStore.info.length !== 0}>
              <For
                each={patientDataStore.info}
                fallback={<div class="text-center">載入中...</div>}
              >
                {(item, index) => (
                  <PatientDataTable
                    item={item}
                    index={index}
                  ></PatientDataTable>
                )}
              </For>
            </Match>
            <Match when={patientDataStore.info.length === 0}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </Match>
          </Switch>
        </tbody>
      </Table>
      {/* {console.log(cloneObject(patientDataStore.origin))} */}
      {console.log(cloneObject(patientDataStore.info))}
    </div>
  );
}
