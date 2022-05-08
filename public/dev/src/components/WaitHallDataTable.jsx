import { patientDataStore } from "../stores/patientDataStore";

export default function WaitHallDataTable(props) {
  var item = props.item;
  return (
    <tr class="text-center">
      <td>{patientDataStore.info.length}</td>
      <td>{props.index() + 1}</td>
    </tr>
  );
}
