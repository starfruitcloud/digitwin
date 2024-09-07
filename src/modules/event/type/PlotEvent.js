/**
 * @Author : ershing
 */

import { PlotEventType } from '../EventType'
import Event from '../Event'

class PlotEvent extends Event {
  constructor() {
    super(PlotEventType)
    this._registerEvent()
  }
}

export default PlotEvent
