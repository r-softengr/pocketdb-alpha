import { useState, useEffect } from "react";
import { RecordModel } from "pocketbase";
import moment from "moment";
import usePocketBase from "./hooks/usePocketBase";

function App() {
  const [postData, setPostData] = useState<string>("");
  const [posts, setPosts] = useState<RecordModel[]>();
  const pb = usePocketBase();
  const handleSubmit = async () => {
    const data = {
      content: postData,
    };
    await pb.collection("entries").create(data);
  };

  useEffect(() => {
    console.log(
      "import.meta.env.VITE_POCKETDBBASE: ",
      import.meta.env.VITE_POCKETDBBASE
    );
    const fetchEntries = async () => {
      const response = await pb.collection("entries").getFullList({
        sort: "-created",
      });
      setPosts(response);
    };

    fetchEntries();
  }, []);

  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "Just now",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "1 hour ago", //this is the setting that you need to change
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "1 month ago", //change this for month
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });

  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      <div className="flex w-1/2 h-full items-center flex-col justify-start rounded-md border bg-white shadow-sm p-10 gap-2">
        {/* <!-- POST --> */}
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="peer rounded-md border p-2 outline-none ring-0"
              value={postData}
              onChange={(e) => setPostData(e.target.value)}
              type="text"
              name="post"
              id="post"
              placeholder="Enter your feedback"
            />
          </div>
        </form>
        {/* <!-- CARDS --> */}
        <div className="w-full grid grid-cols-1 gap-2 grid-flow-dense border-t p-10 first:text-red-600 overflow-x-auto">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="border rounded-sm flex flex-col w-full p-2 shadow-md"
            >
              <div className="w-full text-right text-xs">
                {moment(post.created).fromNow(true)}
              </div>
              <span className="text-sm m-5">{`"${post["content"]}"`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
