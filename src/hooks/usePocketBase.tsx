import PocketBase from "pocketbase";
const usePocketBase = () => {
  const pocketBase = new PocketBase(import.meta.env.POCKETDB_BASE);

  return pocketBase;
};
export default usePocketBase;
