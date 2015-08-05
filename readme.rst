component-leaflet-map
=====================

A custom element for instantiating Leaflet maps and feeding them data. When finished, usage will look something like this::

    <leaflet-map lat="47" lng="-122" zoom=5>
      <tile-layer layer="stamen-toner"></tile-layer>
      <map-marker lat="23" lng="-80" id="findMe">Popup text!</map-marker>
      <geo-json src="url.geojson">
        <geo-data>OR GEOJSON DATA GOES HERE</geo-data>
        <geo-palette property="FEATURE_PROPERTY">
          <color-mapping max=128 color="red"></color-mapping>
          <color-mapping min=129 max=255 color="blue"></color-mapping>
        </geo-palette>
        <geo-style>
    { "stroke": false, "fillOpacity": 0.6 }
        </geo-style>
        <geo-popup>
    I'm templated, with values from {{FEATURE_PROPERTY}} injected automatically!
        </geo-popup>
      </geo-json>
    </leaflet-map>

GeoJSON represents the most significant portion of ``<leaflet-map>`` development, with the ability to automatically color and bind popups to the vector layer. The templating for popups is extremely primitive and only supports direct string value substitution (no loops, no expressions, no formatters), but this covers most of the required cases and provides predictable results for users. More advanced users will probably want to go through the ``map`` and ``leaflet`` properties exposed on the element anyway.

Any elements with an ID will be made available after instantiation on the element's ``lookup`` property. For example, in the code above, we could manipulate the map marker via ``document.querySelector("leaflet-map").lookup.findMe``. Tile layers and GeoJSON layers are also available for manipulation this way.

Currently, custom elements are upgraded asynchronously, which means that their contents may be momentarily visible in the DOM, especially if you have a lot of GeoJSON or configuration embedded. However, once the element has been upgraded, it will add a ``ready`` attribute for styling. The following CSS rule can be used to prevent a flash of unstyled content (FOUC)::

    leaflet-map:not([ready]) { display: none }

``<leaflet-map>`` is built on top of our `component template <https://github.com/seattletimes/component-template>`_.

Elements
========

The Leaflet map is configured and initialized with a domain-specific language built out of custom tags, on the working assumption that it's easier to write HTML than it is to write JavaScript. The following tags are supported for setting up the map. Once it's initialized, you can access the map itself through the ``map`` property on the ``<leaflet-map>`` element, and you can also get access to Leaflet itself through the ``leaflet`` property.

The ``<leaflet-map>`` element itself exposes several configuration properties via attributes, including:

* ``lat`` and ``lng`` - center the map on the specified coordinate
* ``zoom``
* ``fixed`` - disables zoom and pan functionality

<tile-layer>
------------

Tile layers can be initialized in two ways. You can set them up manually, by providing the ``url`` and ``subdomains`` attributes, or you can set ``layer`` to one of the following values in order to use a preset basemap. Many of the ``esri`` layers come in two parts: one for the background, and one for the labels, which makes it easier to create maps without distracting text details when adding data.

* ``lite`` - Stamen Toner Lite
* ``background`` - Stamen Toner Background
* ``toner`` - Stamen Toner
* ``watercolor`` - Stamen Watercolor
* ``terrain`` - Stamen Terrain
* ``esriStreets``
* ``esriTopographic``
* ``esriOceans``
* ``esriOceansLabels``
* ``esriNationalGeographic``
* ``esriDarkGray``
* ``esriDarkGrayLabels``
* ``esriGray``
* ``esriGrayLabels``
* ``esriImagery``
* ``esriImageryLabels``
* ``esriImageryTransportation``
* ``esriShadedRelief``
* ``esriShadedReliefLabels``
* ``esriTerrain``
* ``esriTerrainLabels``
* ``cartoPositron``
* ``cartoPositronBlank`` - No labels
* ``cartoDarkMatter``
* ``cartoDarkMatterBlank`` - No labels

``<tile-layer>`` also supports the ``opacity`` attribute, in order to overlay basemaps on top of each other.

<map-marker>
------------

Set the position of the map marker using the ``lat`` and ``lng`` attributes. Any classes on the ``<map-marker>`` element will be set on the resulting Leaflet DivIcon marker. Content inside a ``<map-marker>`` is bound to its popup. This makes these elements combine powerfully with EJS template loops, like so::

    <% data.forEach(function(item) { %>
      <map-marker lat="<%= item.lat %>" lng="<%= item.lng %>">
        <h1><%= item.title %></h1>
        <p><%= item.description %>
      </map-marker>
    <% }); %>

<geo-json>
----------

The most complicated element, ``<geo-json>`` uses several sub-elements to load and annotate GeoJSON files. You can provide the GeoJSON directly, using a ``<geo-data>`` element (this is the template's default) or load it via AJAX by specifying a ``src`` attribute on the ``<geo-json>``.

The ``<geo-style>`` element should contain strict JSON (e.g. all decimals should have leading zeros, property names should be double quoted, etc.) matching Leaflet's `path style options <http://leafletjs.com/reference.html#path>`_. These styles will be overridden/supplemented by any coloring specified in the ``<geo-palette>`` element, which is keyed via the ``property`` attribute to the properties hash on each GeoJSON feature.

``<geo-popup>`` allows you to bind HTML to the GeoJSON layer with some very simple templating, substituting in any property from the feature. Loops, conditionals, and formatting are not supported yet, so make sure your GeoJSON contains properly-formatted data to be used in the popup.

<map-options>
-------------

In addition to the options exposed as ``<leaflet-map>`` attributes, you can also set the configuration object for the map directly, by providing JSON matching the `Leaflet map options hash <http://leafletjs.com/reference.html#path>`_.

Behind the scenes
=================

The element breaks down its startup process into two parts, both of which take place during the custom element's ``createdCallback``.

1. Configuration parsing
2. Layer factories

In the first step, the element and its contents are processed by the modules in the ``parsers`` directory. Tags inside the element are processed as a domain-specific language for various map features (they are not full-fledged custom elements). The parser modules are called with the config object as ``this`` and passed any elements inside the ``<leaflet-map>`` that match the selectors defined in ``config-parser.js``, so that they can add their results to the configuration.

The map and the configuration object are then passed to the factory module, which calls individual layer factories to consume the configuration and attach their layers to the map. Factories are also passed a reference to the custom element, so that they can perform any higher-level manipulation (such as attaching references to its ``lookup`` property when a layer has an ID attribute).

At the end of startup, the ``<leaflet-map>`` element will also have two properties available for consumption by external scripts: ``map`` contains the Leaflet instance inside the element, and ``leaflet`` contains the actual library, in case additional layers or utility functions need to be called.