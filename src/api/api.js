const getDomains = async (auth) => {
  const response = await fetch("https://api.gopkgs.org:2096/domains", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });

  return await response.json();
};

export default getDomains;

// const getDomains = async (auth) => {
//   const response = await fetch("https://api.gopkgs.org:2096/domains", {
//     method: "GET",
//     body: myBody, // string or object
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${auth}`,
//     },
//   });

//   return await response.json();
// };

// export default getDomains;
