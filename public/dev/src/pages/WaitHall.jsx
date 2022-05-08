import { Table } from "solid-bootstrap";
import { createSignal, For, Switch, Match } from "solid-js";

import {
  patientDataStore,
  setPatientDataStore,
} from "../stores/patientDataStore";

import { socket } from "../network/websocket";
import { onMount } from "solid-js";

import WaitHallDataTable from "../components/WaitHallDataTable";

export default function WaitHall() {
  function isEmpty(obj) {
    if (obj.length != 0) {
      return obj[0];
    } else {
      return [];
    }
  }

  const [patientData, setPatientData] = createSignal(
    cloneObject(isEmpty(patientDataStore.info))
  );

  function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  socket.on("delete from server", (data) => {});

  return (
    <div>
      <h1 class="text-center">候診大廳</h1>
      <br />
      <div>
        <div>共 {patientDataStore.origin.length} 人掛號</div>
        <div>已看診 {patientDataStore.confirm.length} 人</div>
      </div>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr class="text-center">
            <td>等待人數</td>
            <td>目前號碼</td>
          </tr>
        </thead>
        <tbody>
          {/* <For
            each={patientDataStore.info}
            fallback={<div class="text-center">載入中...</div>}
          >
            {(item, index) => (
              <WaitHallDataTable item={item} index={index}></WaitHallDataTable>
            )}
          </For> */}
          <tr class="text-center">
            <Switch fallback={<div class="text-center">載入中...</div>}>
              <Match when={patientDataStore.info.length === 0}>
                <td>{patientDataStore.info.length}</td>
                <td>0</td>
              </Match>
              <Match when={patientDataStore.info.length !== 0}>
                <td>{patientDataStore.info.length}</td>
                <td>{patientData().id}</td>
              </Match>
            </Switch>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
