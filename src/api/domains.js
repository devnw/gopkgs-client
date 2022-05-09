const getDomains = async (getAccessTokenSilently, setDomains) => {
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

  return await response.json();
};

const putDomain = async (getAccessTokenSilently, domain) => {
  const accessToken = await getAccessTokenSilently({
    audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
    scope: "read:current_user",
  });

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
};

const delDomain = async (getAccessTokenSilently, id) => {
  const accessToken = await getAccessTokenSilently({
    audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
    scope: "read:current_user",
  });

  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER_URL}/domains?id=${id}`,
    {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );

  return await response.json();
};

export { getDomains, putDomain, delDomain };
