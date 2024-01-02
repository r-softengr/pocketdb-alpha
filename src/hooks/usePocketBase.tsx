import PocketBase from "pocketbase";
const usePocketBase = () => {
  const pocketBase = new PocketBase(import.meta.env.VITE_POCKETDBBASE);

  return pocketBase;
};
export default usePocketBase;
