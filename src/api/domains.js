const getDomains = async (getAccessToken, setDomains) => {
    const accessToken = await getAccessToken({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: 'read:current_user',
    })

    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/domains`,
        {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
        }
    )

    return await response.json()
}

const putDomain = async (getAccessToken, domain) => {
    const accessToken = await getAccessToken({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: 'read:current_user',
    })

    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/domains`,
        {
            method: 'PUT',
            body: JSON.stringify({ domain: domain }),
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
        }
    )

    return await response.json()
}

const delDomain = async (getAccessToken, id) => {
    const accessToken = await getAccessToken({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: 'read:current_user',
    })

    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/domains?id=${id}`,
        {
            method: 'DELETE',
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
        }
    )

    return await response
}

export { getDomains, putDomain, delDomain }
