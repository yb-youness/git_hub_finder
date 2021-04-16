export const ClientId = () => {
  let clientId;

  if (process.env.NODE_ENV !== "production") {
    // Point to Your env varible
    clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  } else {
    // Point To The server
    clientId = process.GITHUB_CLIENT_ID;
  }
  return clientId;
};

export const ClientSecret = () => {
  let clientSec;

  if (process.env.NODE_ENV !== "production") {
    // Point to Your env varible
    clientSec = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    // Point To The server
    clientSec = process.GITHUB_CLIENT_SECRET;
  }
  return clientSec;
};
