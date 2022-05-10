const postModules = async (getAccessToken, domainID, modules) => {
  const accessToken = await getAccessToken({
    audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
    scope: "read:current_user",
  });

  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER_URL}/modules`,
    {
      method: "POST",
      body: JSON.stringify({ id: domainID, modules: modules }),
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );

  return await response.json();
};

const delModule = async (getAccessToken, domainID, mod) => {
  const accessToken = await getAccessToken({
    audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
    scope: "read:current_user",
  });

  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER_URL}/modules?id=${domainID}&mod=${mod}`,
    {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );

  return await response;
};

export { postModules, delModule };
