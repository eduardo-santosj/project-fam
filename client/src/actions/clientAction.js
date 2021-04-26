// Handler
import { clientHandler } from "../handlers/clientHandler";

// Helpers
import { apiHelpers } from "../helpers/apiHelpers";

export const clientActions = {
  getClient,
  createClient
};

function getClient(callback) {
  clientHandler.getClient()
    .then(
      client => {
        success(client)
        callback(client)
      },
      error => {
        apiHelpers.handleError(
          error,
          getClient(true),
          failure(error),
          true
        );
      }
    ).catch(error => {
      failure(error)
    });
  function success(client) { return client }
  function failure(error) { return error }
}

function createClient(params, callbackSuccess, callbackError) {
  clientHandler.createClient(params)
    .then(
      client => {
        success(client)
        callbackSuccess(client)
      },
      error => {
        failure(error)
        callbackError(error)
      }
    ).catch(error => {
      failure(error)
      callbackError(error)
    });
  function success(client) { return client }
  function failure(error) { return error }
}