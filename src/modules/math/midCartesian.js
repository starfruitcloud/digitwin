/**
 * @Author : ershing
 */

import { Cesium } from '../../namespace'

export default function midCartesian(start, end) {
  return Cesium.Cartesian3.midpoint(start, end, new Cesium.Cartesian3())
}
