import  { POST, DELETE, PUT, GET, arrayOfMethods } from "./constants.js";
import  { SERVER_URL_TODOS, SERVER_URL_PICTURES_FIRST, SERVER_URL_PICTURES_SECOND } from "./constants.js";

class extendError extends Error {
  constructor (message, code = null, status = null, delails = null) {
    super(message);
    this.code = code;
    this.status = status;
    this.delails = delails;
    this.name = 'extendError';
    this.message = `Response status: ${this.code} - ${this.status}`;
  };
};

export const api = async (endpoint, method = GET, payload) => {
  let config = {};

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
    if (!arrayOfMethods.includes(method)) throw new Error('method is required'); 
    const response = await fetch(endpoint, config);

    if (!response.ok) {
      throw new extendError (null, response.status, response.statusText);
    };

    const messages = {
      POST: 'Data has been added',
      DELETE: 'Data has been removed',
      PUT: 'Data has been update',
      GET: 'Data has been received', 
    }

    console.log(messages[method] || messages.default);

    const data = await response.json(); 
    return data;
  } catch(err) {
      err instanceof extendError ? err : new extendError(err.message, null, null);
      return {
        error: true,
        data: method === GET ? [] : null,
        code: err.code,
        status: err.status,
        message: err.message,
      };
  }; 
};  