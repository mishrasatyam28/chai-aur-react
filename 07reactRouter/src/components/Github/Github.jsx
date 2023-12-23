import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mishrasatyam28")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="flex items-center text-center m-4 bg-green-600 text-black p-4 text-3xl gap-x-5">
      <img
        className="rounded-full"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
      Github followers :{data.followers}
      <br />
      Github followings :{data.following}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mishrasatyam28");
  return response.json();
};
