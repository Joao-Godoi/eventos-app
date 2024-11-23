import IEvent from "./models/IEvent";
import IGuest from "./models/IGuest";

import completeGuest from "./utils/guest/completeGuest";
import completeEvent from "./utils/event/completeEvent";
import generateEmptyEvent from "./utils/event/generateEmptyEvent";
import generateEmptyGuest from "./utils/guest/generateEmptyGuest";

export type { IEvent, IGuest };

export { completeGuest, completeEvent, generateEmptyEvent, generateEmptyGuest };
