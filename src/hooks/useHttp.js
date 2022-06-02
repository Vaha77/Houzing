const { REACT_APP_BASE_URL } = process.env;

export const useHttp = () => {
  const request = async ({
    url = "",
    method = "GET",
    body = null,
    headers = {},
  }) => {
    let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      body,
      headers,
    }).then((res) => res.json());

    console.log(res, "gen ses");
  };

  return { request };
};
