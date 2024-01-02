import PocketBase from "pocketbase";
const usePocketBase = () => {
  const pocketBase = new PocketBase(process.env.POCKETDB_BASE);

  return pocketBase;
};
export default usePocketBase;
