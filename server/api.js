import { SERVER_URL, POST, DELETE, PUT } from "./constants.js";

class FetchError extends Error {
  constructor (code, status) {
    super();
    this.code = code;
    this.status = status;
  };
};

export const api = async (method, payload, endpoint = `${SERVER_URL}`) => {
  let config = {};
  let data;

  if (method) {
    config = {
      method,
      headers: {
        'Content-Type' : 'application/json',
      }
    }

    if (method === POST || method === PUT) {
      config.body = JSON.stringify(payload.body);
    }

    if (method === DELETE || method === PUT) {
      endpoint = `${endpoint}/${payload.id}`;
    }    
  }

  try {
    const response = await fetch(endpoint, config);
    if (!response.ok) {
      throw new FetchError(response.status, response.statusText);
    };

    const messages = {
      POST: 'Data has been added',
      DELETE: 'Data has been removed',
      PUT: 'Data has been update',
      default: 'Data has been received', 
    }

    console.log(messages[method] || messages.default);

    data = await response.json();
    return data;
  } catch(err) {
    
      return {
        data: !method ? [] : null,
        error: true,
        code: `${err.code}`,
        status: `${err.status}`,
        message: `Response status: ${err.code} - ${err.status}`,
      };
  };
};  