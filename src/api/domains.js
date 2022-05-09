const getDomains = async (getAccessTokenSilently, setDomains) => {
  try {
    const accessToken = await getAccessTokenSilently({
      audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
      scope: "read:current_user",
    });

    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/domains`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`,
        }),
      }
    );

    setDomains(await response.json());
  } catch (error) {
    console.log(error);
    // setState({
    //   ...state,
    //   error: error.error,
    // });
  }
};

const putDomain = async (getAccessTokenSilently, domain) => {
  try {
    const accessToken = await getAccessTokenSilently({
      audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
      scope: "read:current_user",
    });

    console.log(domain);
    console.log(JSON.stringify({ domain: domain }));

    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/domains`,
      {
        method: "PUT",
        body: JSON.stringify({ domain: domain }),
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.log(error);
    // setState({
    //   ...state,
    //   error: error.error,
    // });
  }
};

export { getDomains, putDomain };

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
