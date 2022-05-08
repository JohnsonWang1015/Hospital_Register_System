import { memberStore, setMemberStore } from "../stores/memberStore";

import { Table } from "solid-bootstrap";
import { For } from "solid-js";

import TableMemberRow from "./TableMemberRow";

export default function ShowMembersTable() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr class="text-center">
            <th>#</th>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <For each={memberStore.members} fallback={<div>載入中...</div>}>
            {(item, index) => (
              <TableMemberRow item={item} index={index}></TableMemberRow>
            )}
          </For>
        </tbody>
      </Table>
    </div>
  );
}
