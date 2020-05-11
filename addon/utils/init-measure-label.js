import mapLabelFactory from './map-label';
import featureCenter from './feature-center';
import getMeasurement from './get-measurement';

export default function initMeasureLabel(result, map) {
  if (!result) {
    return;
  }

  if (result.mode === 'measure' && !result.label) {
    let center = featureCenter(result.feature);
    let measurement = getMeasurement(
      result.type,
      result.feature,
      result.distanceUnitId
    );
    const MapLabel = mapLabelFactory();

    result.label = new MapLabel(center);
    result.label.label = `${measurement.value} ${measurement.unit.display}`;

    if (map) {
      result.label.setMap(map);
    }
  }
}
