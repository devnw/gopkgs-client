const getToken = async (getAccessToken, id) => {
    const accessToken = await getAccessToken({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: 'read:current_user',
    })

    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/token?id=${id}`,
        {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${accessToken}`,
            }),
        }
    )

    return await response.json()
}

export { getToken }
