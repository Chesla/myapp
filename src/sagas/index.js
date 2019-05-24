import { bankSaga } from "./bank";

export default function* mainSaga() {
  yield* bankSaga();
};