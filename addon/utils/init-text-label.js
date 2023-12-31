import featureCenter from './feature-center';
import factoryDynamicLabel from './dynamic-label';

export default function initTextLabel(result, layer, map) {
  if (!result) {
    return;
  }

  if (result.mode === 'draw' && result.type === 'text') {
    let layerFeature = result.feature;
    let center = featureCenter(layerFeature);
    let style = layerFeature.getProperty('style');
    let DynamicLabel = factoryDynamicLabel();
    result.feature = new DynamicLabel(center, {
      label: layerFeature.getProperty('label'),
      color: style && style.color,
      fontSize: style && style.fontSize
    });

    if (map) {
      result.feature.setMap(map);
    }

    if (layer && layer.data) {
      layer.data.remove(layerFeature);
    }
  }
}
