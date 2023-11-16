import { useState, useEffect } from "react";

export default function PageResource() {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      await fetch("https://api.github.com/users/atheo810/repos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDataApi(data);
        });
    };
    getApi().catch(console.error);
  }, []);
  return (
    <div className="text-white">
      tampil
      <ul>
        {dataApi.map((data) => (
          <li key={data.id} className="p-4 hover:underline">
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
