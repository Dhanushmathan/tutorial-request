import { useEffect, useState } from "react";
import RequestCard from "./components/RequestCard";

const App = () => {
  const [requestData, setRequestData] = useState([]);

  async function fetchRequest() {
    const requestAPIData = await fetch(
      "https://tutorial-request-app-aqa7.onrender.com/requests", { method: 'GET' }
    );
    const data = await requestAPIData.json();
    setRequestData(data);
  }

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-xl">
              Requested tutorials around the world
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              People have requested the following tutorials.
            </p>
          </div>
        </div>
        <div>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 font-semibold text-white rounded" onClick={fetchRequest} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" className="inline-block mr-1 hover:animate-spin"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"></path></svg>
            Refresh
          </button>
        </div>
      </div>
      {/* List all request here */}
      <section className="my-5 space-y-4">
        {requestData.length === 0 && (
          <div className=" px-10 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/520/922/non_2x/no-result-document-file-data-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
              alt=""
              className="w-40 mx-auto"
            />
            <h4 className="font-semibold text-lg">No data available!</h4>
            <p>Be the first person to feed your request!</p>
          </div>
        )}

        {requestData.map((list) => (
          <RequestCard
            key={list._id}
            technology={list.technology}
            title={list.title}
            desc={list.desc}
            created_at={list.created_at}
          />
        ))}
      </section>
    </div>
  );
};

export default App;