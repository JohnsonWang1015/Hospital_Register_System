import { createStore } from "solid-js/store";

import { socket } from "../network/websocket";
import { patientStore } from "./patientStore";

export const [patientDataStore, setPatientDataStore] = createStore({
  origin: [],
  info: [],
  confirm: [],
});
