/**
 * @Author : Caven Chen
 */

import { Cesium } from '../../../../namespace'
import MaterialProperty from '../../MaterialProperty'

class CircleSpiralMaterialProperty extends MaterialProperty {
  constructor(options = {}) {
    super(options)
  }

  getType(time) {
    return Cesium.Material.CircleSpiralType
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
      (other instanceof CircleSpiralMaterialProperty &&
        Cesium.Property.equals(this._color, other._color) &&
        Cesium.Property.equals(this._speed, other._speed))
    )
  }
}

Object.defineProperties(CircleSpiralMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed'),
})

export default CircleSpiralMaterialProperty
