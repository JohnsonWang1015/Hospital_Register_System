import { Button } from "solid-bootstrap";
import { Switch, Match } from "solid-js";

import { socket } from "../network/websocket";
import {
  patientDataStore,
  setPatientDataStore,
} from "../stores/patientDataStore";
import { patientStore } from "../stores/patientStore";

export default function PatientDataTable(props) {
  var item = props.item;
  var delIndex = -1;

  function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  return (
    <tr class="text-center">
      <Switch fallback={<div>載入中...</div>}>
        <Match when={patientDataStore.info.length !== 0}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <Button
              variant="danger"
              onClick={(e) => {
                var newDataArray = [...patientDataStore.info];
                var deleteArray = newDataArray.splice(props.index(), 1);
                setPatientDataStore("info", cloneObject(newDataArray));
                {
                  console.log(JSON.parse(JSON.stringify(newDataArray)));
                }

                var confirm = [...patientDataStore.confirm];
                confirm.splice(delIndex + 1, 0, deleteArray[0]);
                setPatientDataStore("confirm", confirm);

                socket.emit("delete from client", {
                  index: delIndex + 1,
                  delData: JSON.parse(JSON.stringify(patientDataStore.confirm)),
                });
              }}
            >
              完成
            </Button>
          </td>
        </Match>
        <Match when={patientDataStore.info.length === 0}>
          <td></td>
          <td></td>
          <td></td>
        </Match>
      </Switch>
    </tr>
  );
}
