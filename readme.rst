component-leaflet-map
=====================

A custom element for instantiating Leaflet maps and feeding them data. When finished, usage will look something like this::

    <leaflet-map lat="47" lng="-122" zoom=5>
      <tile-layer layer="stamen-toner"></tile-layer>
      <map-marker lat="23" lng="-80">Popup text!</map-marker>
      <geo-json src="url.geojson">
        <geo-data>OR GEOJSON DATA GOES HERE</geo-data>
        <geo-palette on="FEATURE_PROPERTY">
          <color-mapping max=128 color="red"></color-mapping>
          <color-mapping min=129 max=255 color="blue"></color-mapping>
        </geo-palette>
        <geo-style>
{ "stroke": false, "fillOpacity": .6 }
        </geo-style>
        <geo-popup>
I'm templated, with values from {{FEATURE_PROPERTY}} injected automatically!
        </geo-popup>
      </geo-json>
    </leaflet-map>

GeoJSON represents the most significant portion of ``<leaflet-map>`` development, with the ability to automatically color and bind popups to the vector layer. The templating for popups is extremely primitive and only supports direct string value substitution (no loops, no expressions, no formatters), but this covers most of the required cases and provides predictable results for users. More advanced users will probably want to go through the ``map`` and ``leaflet`` properties exposed on the element anyway.

``<leaflet-map>`` is built on top of our `component template <https://github.com/seattletimes/component-template>`__.

How does it work?
-----------------

The element breaks down its startup process into two parts, both of which take place during the custom element's ``createdCallback``.

1. Configuration parsing
2. Layer factories

In the first step, the element and its contents are processed by the modules in the ``parsers`` directory. Tags inside the element are processed as a domain-specific language for various map features (they are not full-fledged custom elements). The parser modules are called with the config object as ``this`` and passed any elements inside the ``<leaflet-map>`` that match the selectors defined in ``config-parser.js``, so that they can add their results to the configuration.

The map and the configuration object are then passed to the factory module, which calls individual layer factories to consume the configuration and attach their layers to the map. Factories are also passed a reference to the custom element, but it's not expected that they'll use it.

At the end of startup, the ``<leaflet-map>`` element will also have two properties available for consumption by external scripts: ``map`` contains the Leaflet instance inside the element, and ``leaflet`` contains the actual library, in case additional layers or utility functions need to be called.