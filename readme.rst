component-leaflet-map
=====================

A custom element for instantiating Leaflet maps and feeding them data. When finished, usage will look something like this::

    <leaflet-map lat="47" lng="-122" zoom=5>
      <tile-layer layer="stamen-toner"></tile-layer>
      <map-marker lat="23" lng="-80">Popup text!</map-marker>
      <geo-json src="area.geo.json" style='{ "color": "blue", "weight": 0 }'></geo-json>
    </leaflet-map>