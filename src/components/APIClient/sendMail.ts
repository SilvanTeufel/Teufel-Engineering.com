// import { SESSION_STORAGE_KEYS } from '../State_Props_Cons';

const createheader = () => {
  let headers;

  headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };

  return headers;
};

const createBody = (name: string, firma: string, email: string, text: string) => {
  let body;

  body = JSON.stringify({
    name,
    firma,
    email,
    text
  });
  return body;
};

const createOptions = (name: string, firma: string, email: string, text: string): any => {
  let options;
  options = {
    method: 'POST',
    headers: createheader(),
    body: createBody(name, firma, email, text)
  };
  return options;
};

// tslint:disable-next-line:prettier
const fetchData = (url: string, name: string, firma: string, email: string, text: string) => {
  return fetch(url, createOptions(name, firma, email, text));
};

export const sendMail = (url: string, name: string, firma: string, email: string, text: string) => {
  return fetchData(url, name, firma, email, text).then(response => {
    if (!response.ok) {
      return response.json().then(result => {
        throw new Error(result.error || result);
      });
    }
    return response.json();
  });
};
