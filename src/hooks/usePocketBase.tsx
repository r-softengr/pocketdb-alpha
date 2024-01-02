import PocketBase from "pocketbase";
const usePocketBase = () => {
  const pocketBase = new PocketBase("https://alpha-pocketdb.pockethost.io/");

  return pocketBase;
};
export default usePocketBase;
