import { createStore } from "solid-js/store";

export const [patientStore, setPatientStore] = createStore({
  id: 0,
  name: "張三豐",
});
