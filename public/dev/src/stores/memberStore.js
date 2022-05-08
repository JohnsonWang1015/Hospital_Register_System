import { createStore } from "solid-js/store";

let members = [
  { id: 1, name: "john", email: "john@gmail.com", status: "active" },
  { id: 2, name: "amy", email: "amy@gmail.com", status: "active" },
  { id: 3, name: "janey", email: "janey@gmail.com", status: "in-active" },
];

export const [memberStore, setMemberStore] = createStore({
  members: members,
});
