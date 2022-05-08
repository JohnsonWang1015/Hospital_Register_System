import { Switch, Match } from "solid-js";
import { Button } from "solid-bootstrap";

export default function TableMemberRow(props) {
  const item = props.item;
  const index = props.index;
  const mode = "show";
  return (
    <tr class="text-center">
      <td>{index()}</td>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <Switch fallback={<div>狀態不明</div>}>
          <Match when={item.status === "active"}>
            <i class="bi bi-lightbulb" style="color: yellow;"></i>
          </Match>
          <Match when={item.status === "in-active"}>
            <i class="bi bi-lightbulb-off" style="color: gray;"></i>
          </Match>
        </Switch>
      </td>
      <td>
        <div className="mx-2">
          <Button variant="primary" size="lg">
            <i class="bi bi-pencil-square" style="color: white;"></i>
          </Button>
          &nbsp;
          <Button variant="primary" size="lg">
            <i class="bi bi-trash" style="color: white;"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}
