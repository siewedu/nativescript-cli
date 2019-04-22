import { KinveyError } from './kinvey';

export class ServerError extends KinveyError {
  constructor(message = 'An error occurred on the server.', debug) {
    super(message, debug);
    this.name = 'ServerError';
  }
}
