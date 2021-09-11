import { EventEmitter } from "events";

export class UpdateAddressEvent {}

class UpdateAddressEventEmitter extends EventEmitter {
  private updateAddressEventName: string = "updateAddressEvent";

  constructor() {
    super();
  }

  publishUpdateAddressEvent(event: UpdateAddressEvent) {
    super.emit(this.updateAddressEventName, event);
  }

  listenOnUpdateAddressEvent(callback: (event: UpdateAddressEvent) => void) {
    super.on(this.updateAddressEventName, (event) => {
      callback(event);
    });
  }
}

export default new UpdateAddressEventEmitter();
