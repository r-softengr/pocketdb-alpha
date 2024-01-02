import PocketBase from "pocketbase";
const usePocketBase = () => {
  const pocketBase = new PocketBase("http://127.0.0.1:8090");
  return pocketBase;
};
export default usePocketBase;
