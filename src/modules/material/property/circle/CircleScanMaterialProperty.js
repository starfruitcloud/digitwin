/**
 * @Author : Caven Chen
 */

import { Cesium } from '../../../../namespace'
import MaterialProperty from '../../MaterialProperty'

class CircleScanMaterialProperty extends MaterialProperty {
  constructor(options = {}) {
    super(options)
  }

  getType(time) {
    return Cesium.Material.CircleScanType
  }

  getValue(time, result) {
    if (!result) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrUndefined(this._color, time)
    result.speed = Cesium.Property.getValueOrUndefined(this._speed, time)
    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof CircleScanMaterialProperty &&
        Cesium.Property.equals(this._color, other._color) &&
        Cesium.Property.equals(this._speed, other._speed))
    )
  }
}

Object.defineProperties(CircleScanMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed'),
})

export default CircleScanMaterialProperty
