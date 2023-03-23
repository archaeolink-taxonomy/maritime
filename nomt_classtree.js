var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/ImportPythonScript",
        "parent": "http://www.w3.org/ns/prov#SoftwareAgent",
        "type": "instance",
        "text": "ImportPythonScript (nomt:ImportPythonScript)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#SoftwareAgent",
        "parent": "#",
        "type": "class",
        "text": "SoftwareAgent (prov:SoftwareAgent) [1]",
        "data": {
          "to": {
            "http://purl.org/dc/terms/bibliographicCitation": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/source": {
              "instancecount": 3
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#seeAlso": {
              "instancecount": 2
            }
          },
          "from": {
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 0,
              "http://www.w3.org/ns/prov#Activity": 231
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 231,
              "http://www.w3.org/2000/01/rdf-schema#Class": 215
            }
          }
        },
        "instancecount": 10
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/cs01",
        "parent": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "type": "instance",
        "text": "NAVISone Maritime Thesaurus (nomt:cs01)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "parent": "#",
        "type": "class",
        "text": "ConceptScheme (skos:ConceptScheme) [1]",
        "data": {
          "to": {
            "http://creativecommons.org/ns#attributionName": {
              "instancecount": 1
            },
            "http://creativecommons.org/ns#attributionURL": {
              "instancecount": 1
            },
            "http://creativecommons.org/ns#license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/created": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/creator": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/date": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/identifier": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/modified": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/publisher": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/title": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#hasTopConcept": {
              "instancecount": 16,
              "http://www.w3.org/2004/02/skos/core#Concept": 16
            }
          },
          "from": {
            "http://www.w3.org/2004/02/skos/core#inScheme": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 231,
              "http://www.w3.org/2000/01/rdf-schema#Class": 215
            },
            "http://www.w3.org/2004/02/skos/core#topConceptOf": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 16
            }
          }
        },
        "instancecount": 30
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1001",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schiffsfunktion (nomt:1001)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1002",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Arbeitsumgebung (nomt:1002)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1006",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Skrog (nomt:1006)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1007",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Indvendig konstruktion (nomt:1007)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1008",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "D\u00e6k og kl\u00e6dning (nomt:1008)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1003",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Antrieb (nomt:1003)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1004",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schiffstyp (nomt:1004)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1009",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Konstruktionsm\u00e6ssige tr\u00e6k (nomt:1009)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1010",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sejl og rig (nomt:1010)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1011",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Roranl\u00e6g (nomt:1011)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1012",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Roning og padling (nomt:1012)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1013",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stagning og dragning (nomt:1013)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1014",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Opankring og fort\u00f8jring (nomt:1014)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1015",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Krigsudstyr (nomt:1015)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1016",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Overfladebehandling (nomt:1016)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1019",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Overbygning (nomt:1019)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2518",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "hulk\u00e4hnlich (nomt:2518)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2655",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Seite) (nomt:2655)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2656",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Klinker (Seite) (nomt:2656)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2658",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (Boden) (nomt:2658)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2659",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (erweitert) (nomt:2659)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2519",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "koggen\u00e4hnlich (nomt:2519)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2660",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (mit Vorunter) (nomt:2660)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2661",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (mit Gesamtdeck) (nomt:2661)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2665",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Bronze) (nomt:2665)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2666",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Kupfer) (nomt:2666)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2668",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Baum) (nomt:2668)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2586",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastst\u00fctze (nomt:2586)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2516",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "prahm\u00e4hnlich (nomt:2516)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2508",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "wikingerschiff\u00e4hnlich (nomt:2508)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2642",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Reling (nomt:2642)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2623",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ausleger (nomt:2623)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2624",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kanuausleger (nomt:2624)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2614",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruder (Heck) (nomt:2614)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2527",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kiel (nomt:2527)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2528",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielgang (nomt:2528)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2529",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielplanke (nomt:2529)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2552",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielschwein (nomt:2552)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2565",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimmstringer (nomt:2565)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2553",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Knie (nomt:2553)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2559",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "L\u00e4ngsversteifung (nomt:2559)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2579",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Naht (nomt:2579)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2589",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rah (nomt:2589)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2604",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gut (Laufend) (nomt:2604)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2620",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Riemenpforte (nomt:2620)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2490",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Arbeitsboot (nomt:2490)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2551",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Balken (nomt:2551)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2494",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "See (nomt:2494)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2499",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gestakt (nomt:2499)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2496",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gestakt und gesegelt (nomt:2496)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2545",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Beplankung (nomt:2545)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2514",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Erweiterter Einbaum (nomt:2514)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2517",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "galeeren\u00e4hnlich (nomt:2517)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2493",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Binnenland (nomt:2493)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2509",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Blussus (nomt:2509)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2510",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannter Schiffstyp (nomt:2510)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2511",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Neumagen (nomt:2511)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2512",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Navis oneraria (nomt:2512)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2513",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Navis caudicaria (nomt:2513)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2500",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt (nomt:2500)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2515",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Langschiff (nomt:2515)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2488",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Milit\u00e4rfahrzeug (nomt:2488)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2495",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannt (nomt:2495)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2498",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gepaddelt (nomt:2498)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2520",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Portus (nomt:2520)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2568",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Decksbalken (nomt:2568)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2569",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Deck (nomt:2569)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2570",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Decksplanke (nomt:2570)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2497",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert (nomt:2497)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2501",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gesegelt (nomt:2501)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2603",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gut (Stehend) (nomt:2603)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2537",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vordersteven (nomt:2537)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2619",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Riemen (nomt:2619)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2489",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Fischereifahrzeug (nomt:2489)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2523",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bargholz (nomt:2523)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2593",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastbereich (nomt:2593)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2524",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimm (Rund) (nomt:2524)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2685",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Flickung (nomt:2685)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2686",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Anriss (nomt:2686)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2687",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Werkzeugspur (nomt:2687)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2688",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Holznagel (nomt:2688)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2689",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rute (nomt:2689)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2690",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimmholz (nomt:2690)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2691",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schandeckel (nomt:2691)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2692",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "falscher Kiel (nomt:2692)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2697",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Totgang (nomt:2697)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2700",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Blackfriars (nomt:2700)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2701",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Brigg (nomt:2701)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2702",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dover (nomt:2702)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2703",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mainz A (nomt:2703)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2704",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mainz B (nomt:2704)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2705",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nordic (nomt:2705)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2706",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "North Ferriby (nomt:2706)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2707",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Oberstimm (nomt:2707)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2708",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Pommeroeul 1 (nomt:2708)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2709",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Utrecht 1 (nomt:2709)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2710",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Utrecht 3 (nomt:2710)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2711",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Woerden 1 (nomt:2711)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2712",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Woerden 2 (nomt:2712)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2713",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam (nomt:2713)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2714",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam 3 (nomt:2714)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2715",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam 5 (nomt:2715)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2657",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (nomt:2657)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2663",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mallenbauweise (nomt:2663)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2491",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Funktion unbekannt (nomt:2491)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2504",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannter Antrieb (nomt:2504)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2522",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Igel (nomt:2522)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2525",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bug (nomt:2525)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2526",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dollbord (nomt:2526)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2530",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Planke (nomt:2530)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2531",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sprung (nomt:2531)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2535",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gang (nomt:2535)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2538",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimm (Eckig) (nomt:2538)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2539",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Scheuerleiste (nomt:2539)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2505",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gepaddelt und gesegelt (nomt:2505)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2533",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Heck (nomt:2533)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2492",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Frachter (nomt:2492)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2506",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt und gesegelt (nomt:2506)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2507",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert, gestakt und gesegelt (nomt:2507)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2536",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kaffe (nomt:2536)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2654",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Beplankung) (nomt:2654)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2546",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stevendekoration (nomt:2546)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2634",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Artillerie (nomt:2634)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2632",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rammsporn (nomt:2632)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2631",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rad (nomt:2631)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2633",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schildhalterung (nomt:2633)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2573",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nut und Feder (nomt:2573)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2534",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achtersteven (nomt:2534)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2502",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert und gesegelt (nomt:2502)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2532",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schale (nomt:2532)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2503",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt und gepaddelt (nomt:2503)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2558",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Spant (nomt:2558)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2561",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Halbspant (nomt:2561)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2567",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "B\u00fcnte (nomt:2567)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2540",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mittelsteven (nomt:2540)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2564",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Auflanger (nomt:2564)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2566",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Querriegel (nomt:2566)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2542",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorschiff (nomt:2542)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2571",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Lukendeckel (nomt:2571)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2556",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "St\u00fctze (nomt:2556)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2544",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bodenplanke (nomt:2544)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2541",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Boden (nomt:2541)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2574",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Geklinkert (nomt:2574)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2563",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Seitenspant (nomt:2563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2543",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achterschiff (nomt:2543)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2562",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dollbaum (nomt:2562)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2560",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Seitensteven (nomt:2560)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2596",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Lateiner) (nomt:2596)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2635",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schild (nomt:2635)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2572",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Laufplanke (nomt:2572)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2547",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schanzkleid (nomt:2547)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2680",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "gebunden (nomt:2680)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2677",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (nomt:2677)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2678",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zimmermannszeichen (nomt:2678)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2679",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Klampe (nomt:2679)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2681",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nahtspant (nomt:2681)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2682",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Holzstift (nomt:2682)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2683",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sponung (nomt:2683)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2684",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Aussparung (nomt:2684)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2693",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Aussensteven (hinten) (nomt:2693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2694",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Futterholz (nomt:2694)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2695",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stevenschuh/Anlauf (nomt:2695)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2696",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bugholz (nomt:2696)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2698",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bilgerinne (nomt:2698)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2699",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "n\u00fcstergatt (nomt:2699)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2716",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Blockade (nomt:2716)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2717",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "K\u00fcste (nomt:2717)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2521",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Papyrusboot (nomt:2521)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2548",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bugsporn (nomt:2548)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2549",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Spiegel (nomt:2549)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2550",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Wrange (nomt:2550)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2554",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schott (nomt:2554)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2555",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Wegerung (nomt:2555)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2557",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stringer (nomt:2557)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2585",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannte Konstruktion (nomt:2585)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2577",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Niet (nomt:2577)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2580",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Beschlag (nomt:2580)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2581",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gen\u00e4ht (nomt:2581)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2582",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schnur (nomt:2582)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2594",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Sprit) (nomt:2594)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2615",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderpinne (nomt:2615)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2609",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderverblendung (nomt:2609)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2611",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Steuerruder (nomt:2611)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2617",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dolle (nomt:2617)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2605",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorsegel (nomt:2605)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2606",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Masttopp (nomt:2606)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2607",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Toppsegel (nomt:2607)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2598",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Vormast) (nomt:2598)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2599",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bug Sprit (nomt:2599)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2600",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Besanmast) (nomt:2600)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2601",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Jungfer-Block (nomt:2601)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2602",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rack (nomt:2602)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2597",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Treidelpfosten (nomt:2597)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2595",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Rah) (nomt:2595)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2576",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (nomt:2576)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2587",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Hauptmast) (nomt:2587)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2575",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel Beplankt (nomt:2575)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2590",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastspur (nomt:2590)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2608",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastfisch (nomt:2608)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2583",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bohrung (nomt:2583)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2588",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastbalken (nomt:2588)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2591",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastducht (nomt:2591)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2592",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastspant (nomt:2592)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2578",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sch\u00e4ftung (nomt:2578)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2616",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Duchtst\u00fctze (nomt:2616)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2618",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderducht (Sitz) (nomt:2618)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2621",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Paddel (nomt:2621)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2622",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Keipe (nomt:2622)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2625",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stakstange (nomt:2625)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2630",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Poller (nomt:2630)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2626",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Block (nomt:2626)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2628",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Winde (nomt:2628)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2673",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schalenbauweise (nomt:2673)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2629",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Anker (nomt:2629)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2638",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kalfat (nomt:2638)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2640",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dekoration (nomt:2640)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2641",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kabine (nomt:2641)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2612",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderbalken (nomt:2612)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2610",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderbalken St\u00fctze (nomt:2610)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2627",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Tau (nomt:2627)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2639",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Plankenbeschlag (nomt:2639)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2674",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Skelettbauweise (nomt:2674)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2637",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Waffen (nomt:2637)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2650",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (Bronze) (nomt:2650)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2651",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (Eisen) (nomt:2651)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2652",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Boden zuerst (nomt:2652)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2653",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Boden) (nomt:2653)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2643",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorderkastell (nomt:2643)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2644",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achterkastell (nomt:2644)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2636",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Obersporn (nomt:2636)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2613",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderfassung (nomt:2613)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Concept",
        "parent": "#",
        "type": "class",
        "text": "Concept (skos:Concept) [231]",
        "data": {
          "to": {
            "http://archaeology.link/ontology#identifier_db": {
              "instancecount": 1
            },
            "http://archaeology.link/ontology#origin_description": {
              "instancecount": 1
            },
            "http://creativecommons.org/ns#attributionName": {
              "instancecount": 1
            },
            "http://creativecommons.org/ns#attributionURL": {
              "instancecount": 1
            },
            "http://creativecommons.org/ns#license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/created": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/identifier": {
              "instancecount": 1,
              "http://www.w3.org/2004/02/skos/core#Concept": 1,
              "http://www.w3.org/2000/01/rdf-schema#Class": 1
            },
            "http://purl.org/dc/terms/issued": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/modified": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/publisher": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 10
            },
            "http://www.w3.org/2004/02/skos/core#broader": {
              "instancecount": 1,
              "http://www.w3.org/2004/02/skos/core#Concept": 1
            },
            "http://www.w3.org/2004/02/skos/core#inScheme": {
              "instancecount": 1,
              "http://www.w3.org/2004/02/skos/core#ConceptScheme": 1
            },
            "http://www.w3.org/2004/02/skos/core#note": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#prefLabel": {
              "instancecount": 10
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 1,
              "http://www.w3.org/ns/prov#SoftwareAgent": 1
            },
            "http://www.w3.org/ns/prov#wasDerivedFrom": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 1,
              "http://www.w3.org/ns/prov#Activity": 1
            }
          },
          "from": {
            "http://purl.org/dc/terms/identifier": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 1,
              "http://www.w3.org/2000/01/rdf-schema#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 1
            },
            "http://www.w3.org/2004/02/skos/core#narrower": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 1
            }
          }
        },
        "instancecount": 38
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1001",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1001 (nomt:activity_1001)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1002",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1002 (nomt:activity_1002)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1006",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1006 (nomt:activity_1006)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1007",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1007 (nomt:activity_1007)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1008",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1008 (nomt:activity_1008)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1003",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1003 (nomt:activity_1003)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1004",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1004 (nomt:activity_1004)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1009",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1009 (nomt:activity_1009)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1010",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1010 (nomt:activity_1010)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1011",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1011 (nomt:activity_1011)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1012",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1012 (nomt:activity_1012)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1013",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1013 (nomt:activity_1013)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1014",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1014 (nomt:activity_1014)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1015",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1015 (nomt:activity_1015)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1016",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1016 (nomt:activity_1016)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1019",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1019 (nomt:activity_1019)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2518",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2518 (nomt:activity_2518)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2655",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2655 (nomt:activity_2655)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2656",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2656 (nomt:activity_2656)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2658",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2658 (nomt:activity_2658)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2659",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2659 (nomt:activity_2659)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2519",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2519 (nomt:activity_2519)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2660",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2660 (nomt:activity_2660)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2661",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2661 (nomt:activity_2661)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2665",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2665 (nomt:activity_2665)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2666",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2666 (nomt:activity_2666)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2668",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2668 (nomt:activity_2668)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2586",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2586 (nomt:activity_2586)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2516",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2516 (nomt:activity_2516)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2508",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2508 (nomt:activity_2508)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2642",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2642 (nomt:activity_2642)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2623",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2623 (nomt:activity_2623)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2624",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2624 (nomt:activity_2624)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2614",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2614 (nomt:activity_2614)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2527",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2527 (nomt:activity_2527)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2528",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2528 (nomt:activity_2528)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2529",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2529 (nomt:activity_2529)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2552",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2552 (nomt:activity_2552)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2565",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2565 (nomt:activity_2565)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2553",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2553 (nomt:activity_2553)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2559",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2559 (nomt:activity_2559)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2579",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2579 (nomt:activity_2579)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2589",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2589 (nomt:activity_2589)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2604",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2604 (nomt:activity_2604)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2620",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2620 (nomt:activity_2620)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2490",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2490 (nomt:activity_2490)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2551",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2551 (nomt:activity_2551)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2494",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2494 (nomt:activity_2494)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2499",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2499 (nomt:activity_2499)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2496",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2496 (nomt:activity_2496)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2545",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2545 (nomt:activity_2545)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2514",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2514 (nomt:activity_2514)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2517",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2517 (nomt:activity_2517)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2493",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2493 (nomt:activity_2493)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2509",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2509 (nomt:activity_2509)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2510",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2510 (nomt:activity_2510)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2511",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2511 (nomt:activity_2511)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2512",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2512 (nomt:activity_2512)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2513",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2513 (nomt:activity_2513)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2500",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2500 (nomt:activity_2500)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2515",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2515 (nomt:activity_2515)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2488",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2488 (nomt:activity_2488)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2495",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2495 (nomt:activity_2495)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2498",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2498 (nomt:activity_2498)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2520",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2520 (nomt:activity_2520)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2568",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2568 (nomt:activity_2568)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2569",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2569 (nomt:activity_2569)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2570",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2570 (nomt:activity_2570)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2497",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2497 (nomt:activity_2497)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2501",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2501 (nomt:activity_2501)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2603",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2603 (nomt:activity_2603)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2537",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2537 (nomt:activity_2537)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2619",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2619 (nomt:activity_2619)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2489",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2489 (nomt:activity_2489)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2523",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2523 (nomt:activity_2523)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2593",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2593 (nomt:activity_2593)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2524",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2524 (nomt:activity_2524)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2685",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2685 (nomt:activity_2685)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2686",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2686 (nomt:activity_2686)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2687",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2687 (nomt:activity_2687)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2688",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2688 (nomt:activity_2688)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2689",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2689 (nomt:activity_2689)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2690",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2690 (nomt:activity_2690)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2691",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2691 (nomt:activity_2691)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2692",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2692 (nomt:activity_2692)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2697",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2697 (nomt:activity_2697)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2700",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2700 (nomt:activity_2700)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2701",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2701 (nomt:activity_2701)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2702",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2702 (nomt:activity_2702)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2703",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2703 (nomt:activity_2703)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2704",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2704 (nomt:activity_2704)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2705",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2705 (nomt:activity_2705)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2706",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2706 (nomt:activity_2706)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2707",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2707 (nomt:activity_2707)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2708",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2708 (nomt:activity_2708)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2709",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2709 (nomt:activity_2709)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2710",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2710 (nomt:activity_2710)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2711",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2711 (nomt:activity_2711)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2712",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2712 (nomt:activity_2712)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2713",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2713 (nomt:activity_2713)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2714",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2714 (nomt:activity_2714)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2715",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2715 (nomt:activity_2715)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2657",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2657 (nomt:activity_2657)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2663",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2663 (nomt:activity_2663)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2491",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2491 (nomt:activity_2491)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2504",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2504 (nomt:activity_2504)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2522",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2522 (nomt:activity_2522)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2525",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2525 (nomt:activity_2525)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2526",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2526 (nomt:activity_2526)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2530",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2530 (nomt:activity_2530)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2531",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2531 (nomt:activity_2531)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2535",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2535 (nomt:activity_2535)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2538",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2538 (nomt:activity_2538)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2539",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2539 (nomt:activity_2539)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2505",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2505 (nomt:activity_2505)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2533",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2533 (nomt:activity_2533)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2492",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2492 (nomt:activity_2492)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2506",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2506 (nomt:activity_2506)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2507",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2507 (nomt:activity_2507)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2536",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2536 (nomt:activity_2536)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2654",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2654 (nomt:activity_2654)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2546",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2546 (nomt:activity_2546)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2634",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2634 (nomt:activity_2634)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2632",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2632 (nomt:activity_2632)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2631",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2631 (nomt:activity_2631)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2633",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2633 (nomt:activity_2633)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2573",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2573 (nomt:activity_2573)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2534",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2534 (nomt:activity_2534)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2502",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2502 (nomt:activity_2502)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2532",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2532 (nomt:activity_2532)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2503",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2503 (nomt:activity_2503)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2558",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2558 (nomt:activity_2558)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2561",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2561 (nomt:activity_2561)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2567",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2567 (nomt:activity_2567)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2540",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2540 (nomt:activity_2540)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2564",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2564 (nomt:activity_2564)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2566",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2566 (nomt:activity_2566)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2542",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2542 (nomt:activity_2542)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2571",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2571 (nomt:activity_2571)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2556",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2556 (nomt:activity_2556)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2544",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2544 (nomt:activity_2544)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2541",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2541 (nomt:activity_2541)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2574",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2574 (nomt:activity_2574)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2563",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2563 (nomt:activity_2563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2543",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2543 (nomt:activity_2543)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2562",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2562 (nomt:activity_2562)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2560",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2560 (nomt:activity_2560)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2596",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2596 (nomt:activity_2596)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2635",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2635 (nomt:activity_2635)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2572",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2572 (nomt:activity_2572)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2547",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2547 (nomt:activity_2547)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2680",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2680 (nomt:activity_2680)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2677",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2677 (nomt:activity_2677)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2678",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2678 (nomt:activity_2678)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2679",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2679 (nomt:activity_2679)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2681",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2681 (nomt:activity_2681)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2682",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2682 (nomt:activity_2682)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2683",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2683 (nomt:activity_2683)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2684",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2684 (nomt:activity_2684)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2693",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2693 (nomt:activity_2693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2694",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2694 (nomt:activity_2694)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2695",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2695 (nomt:activity_2695)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2696",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2696 (nomt:activity_2696)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2698",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2698 (nomt:activity_2698)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2699",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2699 (nomt:activity_2699)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2716",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2716 (nomt:activity_2716)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2717",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2717 (nomt:activity_2717)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2521",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2521 (nomt:activity_2521)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2548",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2548 (nomt:activity_2548)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2549",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2549 (nomt:activity_2549)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2550",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2550 (nomt:activity_2550)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2554",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2554 (nomt:activity_2554)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2555",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2555 (nomt:activity_2555)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2557",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2557 (nomt:activity_2557)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2585",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2585 (nomt:activity_2585)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2577",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2577 (nomt:activity_2577)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2580",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2580 (nomt:activity_2580)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2581",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2581 (nomt:activity_2581)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2582",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2582 (nomt:activity_2582)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2594",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2594 (nomt:activity_2594)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2615",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2615 (nomt:activity_2615)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2609",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2609 (nomt:activity_2609)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2611",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2611 (nomt:activity_2611)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2617",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2617 (nomt:activity_2617)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2605",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2605 (nomt:activity_2605)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2606",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2606 (nomt:activity_2606)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2607",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2607 (nomt:activity_2607)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2598",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2598 (nomt:activity_2598)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2599",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2599 (nomt:activity_2599)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2600",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2600 (nomt:activity_2600)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2601",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2601 (nomt:activity_2601)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2602",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2602 (nomt:activity_2602)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2597",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2597 (nomt:activity_2597)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2595",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2595 (nomt:activity_2595)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2576",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2576 (nomt:activity_2576)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2587",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2587 (nomt:activity_2587)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2575",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2575 (nomt:activity_2575)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2590",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2590 (nomt:activity_2590)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2608",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2608 (nomt:activity_2608)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2583",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2583 (nomt:activity_2583)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2588",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2588 (nomt:activity_2588)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2591",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2591 (nomt:activity_2591)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2592",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2592 (nomt:activity_2592)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2578",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2578 (nomt:activity_2578)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2616",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2616 (nomt:activity_2616)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2618",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2618 (nomt:activity_2618)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2621",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2621 (nomt:activity_2621)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2622",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2622 (nomt:activity_2622)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2625",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2625 (nomt:activity_2625)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2630",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2630 (nomt:activity_2630)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2626",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2626 (nomt:activity_2626)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2628",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2628 (nomt:activity_2628)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2673",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2673 (nomt:activity_2673)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2629",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2629 (nomt:activity_2629)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2638",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2638 (nomt:activity_2638)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2640",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2640 (nomt:activity_2640)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2641",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2641 (nomt:activity_2641)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2612",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2612 (nomt:activity_2612)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2610",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2610 (nomt:activity_2610)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2627",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2627 (nomt:activity_2627)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2639",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2639 (nomt:activity_2639)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2674",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2674 (nomt:activity_2674)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2637",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2637 (nomt:activity_2637)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2650",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2650 (nomt:activity_2650)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2651",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2651 (nomt:activity_2651)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2652",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2652 (nomt:activity_2652)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2653",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2653 (nomt:activity_2653)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2643",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2643 (nomt:activity_2643)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2644",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2644 (nomt:activity_2644)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2636",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2636 (nomt:activity_2636)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2613",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2613 (nomt:activity_2613)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [231]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1,
              "http://www.w3.org/ns/prov#SoftwareAgent": 1
            }
          },
          "from": {
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Concept": 1,
              "http://www.w3.org/2000/01/rdf-schema#Class": 1
            }
          }
        },
        "instancecount": 4
      }
    ]
  }
}