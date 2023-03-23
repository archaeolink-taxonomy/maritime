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
            "http://purl.org/dc/terms/creator": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/source": {
              "instancecount": 2
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
        "text": "[Schiffsfunktion] (nomt:1001)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1002",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Arbeitsumgebung] (nomt:1002)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1006",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Rumpf] (nomt:1006)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1007",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Innenkonstruktion] (nomt:1007)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1008",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Decks und Weger] (nomt:1008)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1003",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Antrieb] (nomt:1003)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1004",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Schiffstyp] (nomt:1004)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1009",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Konstruktionsmerkmale] (nomt:1009)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1010",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Besegelung] (nomt:1010)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1011",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Ruderanlage] (nomt:1011)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1012",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Rudern und paddeln] (nomt:1012)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1013",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Staken und treideln] (nomt:1013)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1014",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Handhabung] (nomt:1014)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1015",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Kriegsf\u00fchrung] (nomt:1015)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1016",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Oberfl\u00e4chenbehandlung] (nomt:1016)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1019",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "[Aufbauten] (nomt:1019)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4E634F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "hulk\u00e4hnlich (nomt:4E634F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3D5B72",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Seite) (nomt:3D5B72)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B8CE4C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Klinker (Seite) (nomt:B8CE4C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/01390D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (Boden) (nomt:01390D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BBCBE0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (erweitert) (nomt:BBCBE0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/95C02A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "koggen\u00e4hnlich (nomt:95C02A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4E64BF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (mit Vorunter) (nomt:4E64BF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0AD305",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (mit Gesamtdeck) (nomt:0AD305)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/82B0C0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Bronze) (nomt:82B0C0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A18262",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Kupfer) (nomt:A18262)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/753375",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Baum) (nomt:753375)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3E51BD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastst\u00fctze (nomt:3E51BD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/22B1CD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "prahm\u00e4hnlich (nomt:22B1CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4F19CD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "wikingerschiff\u00e4hnlich (nomt:4F19CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CFF6DF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Reling (nomt:CFF6DF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3603E6",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ausleger (nomt:3603E6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/71B0DA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kanuausleger (nomt:71B0DA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/01E22C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruder (Heck) (nomt:01E22C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/72AED5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kiel (nomt:72AED5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8ABF23",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielgang (nomt:8ABF23)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/918C08",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielplanke (nomt:918C08)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F95C88",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielschwein (nomt:F95C88)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C8E484",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimmstringer (nomt:C8E484)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4F3B14",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Knie (nomt:4F3B14)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A2C3C4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "L\u00e4ngsversteifung (nomt:A2C3C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4156FE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Naht (nomt:4156FE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D270FA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rah (nomt:D270FA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9C7A8F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gut (Laufend) (nomt:9C7A8F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6FDEE8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Riemenpforte (nomt:6FDEE8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7F0E2B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Arbeitsboot (nomt:7F0E2B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/97C594",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Balken (nomt:97C594)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E23219",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "See (nomt:E23219)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/959CF0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gestakt (nomt:959CF0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/662AD8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gestakt und gesegelt (nomt:662AD8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9A860E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Beplankung (nomt:9A860E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/03AC7B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Erweiterter Einbaum (nomt:03AC7B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/31E77B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "galeeren\u00e4hnlich (nomt:31E77B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1243AD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Binnenland (nomt:1243AD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/50A78E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Blussus (nomt:50A78E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1C9E02",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannter Schiffstyp (nomt:1C9E02)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7A68A2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Neumagen (nomt:7A68A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6B2266",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Navis oneraria (nomt:6B2266)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/07E13E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Navis caudicaria (nomt:07E13E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E86A62",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt (nomt:E86A62)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DA3C3F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Langschiff (nomt:DA3C3F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/35DAD4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Milit\u00e4rfahrzeug (nomt:35DAD4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/476A2A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannt (nomt:476A2A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9F7CCE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gepaddelt (nomt:9F7CCE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7E27B4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Portus (nomt:7E27B4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CFD0AB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Decksbalken (nomt:CFD0AB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0C22DB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Deck (nomt:0C22DB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/78C8CF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Decksplanke (nomt:78C8CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/79B1BE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert (nomt:79B1BE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A3F19E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gesegelt (nomt:A3F19E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E3C0E8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gut (Stehend) (nomt:E3C0E8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AFBCF2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vordersteven (nomt:AFBCF2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BC051E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Riemen (nomt:BC051E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C5E744",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Fischereifahrzeug (nomt:C5E744)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E7AD7A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bargholz (nomt:E7AD7A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0741A5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastbereich (nomt:0741A5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6BA6CF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimm (Rund) (nomt:6BA6CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/95D183",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Flickung (nomt:95D183)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DD168D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Anriss (nomt:DD168D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AEF1D5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Werkzeugspur (nomt:AEF1D5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/78E36E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Holznagel (nomt:78E36E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/534E87",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rute (nomt:534E87)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/01F313",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimmholz (nomt:01F313)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/22E3B2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schandeckel (nomt:22E3B2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DD6037",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "falscher Kiel (nomt:DD6037)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C18B1B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Totgang (nomt:C18B1B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F6F407",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Blackfriars (nomt:F6F407)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/81CB47",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Brigg (nomt:81CB47)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F7285A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dover (nomt:F7285A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7AC92B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mainz A (nomt:7AC92B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/407956",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mainz B (nomt:407956)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/299329",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nordic (nomt:299329)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A3F079",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "North Ferriby (nomt:A3F079)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C0F289",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Oberstimm (nomt:C0F289)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A35B7B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Pommeroeul 1 (nomt:A35B7B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/14FC5D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Utrecht 1 (nomt:14FC5D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5A3BAE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Utrecht 3 (nomt:5A3BAE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/85512C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Woerden 1 (nomt:85512C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EA28ED",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Woerden 2 (nomt:EA28ED)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BEAABB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam (nomt:BEAABB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8A94C2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam 3 (nomt:8A94C2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EECFB0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam 5 (nomt:EECFB0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9DDCA0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (nomt:9DDCA0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/85E84B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mallenbauweise (nomt:85E84B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E3362C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Funktion unbekannt (nomt:E3362C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8EF01D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannter Antrieb (nomt:8EF01D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D15DAB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Igel (nomt:D15DAB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/42300A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bug (nomt:42300A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4B5BF3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dollbord (nomt:4B5BF3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EAE76A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Planke (nomt:EAE76A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CC9873",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sprung (nomt:CC9873)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3E71D2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gang (nomt:3E71D2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/781A6E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimm (Eckig) (nomt:781A6E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F7040D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Scheuerleiste (nomt:F7040D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1CE7AB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gepaddelt und gesegelt (nomt:1CE7AB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/338D81",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Heck (nomt:338D81)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AD63B1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Frachter (nomt:AD63B1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/970E41",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt und gesegelt (nomt:970E41)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CF76BE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert, gestakt und gesegelt (nomt:CF76BE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6A3CBB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kaffe (nomt:6A3CBB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/41597C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Beplankung) (nomt:41597C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/736CB6",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stevendekoration (nomt:736CB6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9F24E8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Artillerie (nomt:9F24E8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/172BD7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rammsporn (nomt:172BD7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1BEB77",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rad (nomt:1BEB77)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B44495",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schildhalterung (nomt:B44495)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D7D714",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nut und Feder (nomt:D7D714)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/04107E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achtersteven (nomt:04107E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/065516",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert und gesegelt (nomt:065516)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/31F675",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schale (nomt:31F675)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FA4000",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt und gepaddelt (nomt:FA4000)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7F509F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Spant (nomt:7F509F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D76D74",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Halbspant (nomt:D76D74)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/18D039",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "B\u00fcnte (nomt:18D039)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E3BAB8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mittelsteven (nomt:E3BAB8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/067FCD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Auflanger (nomt:067FCD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C873D9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Querriegel (nomt:C873D9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7BABAD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorschiff (nomt:7BABAD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E1C71C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Lukendeckel (nomt:E1C71C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8D3E7D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "St\u00fctze (nomt:8D3E7D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/16ED34",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bodenplanke (nomt:16ED34)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/06DF49",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Boden (nomt:06DF49)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A5749D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Geklinkert (nomt:A5749D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AF97BA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Seitenspant (nomt:AF97BA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/69E39F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achterschiff (nomt:69E39F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B876C5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dollbaum (nomt:B876C5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AC499C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Seitensteven (nomt:AC499C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/247DBF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Lateiner) (nomt:247DBF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/369740",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schild (nomt:369740)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4026B3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Laufplanke (nomt:4026B3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/75B895",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schanzkleid (nomt:75B895)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E427D1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "gebunden (nomt:E427D1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C0C8D3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (nomt:C0C8D3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7BE436",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zimmermannszeichen (nomt:7BE436)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9F2983",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Klampe (nomt:9F2983)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BF0944",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nahtspant (nomt:BF0944)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/27CABE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Holzstift (nomt:27CABE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6B83EA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sponung (nomt:6B83EA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5244B7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Aussparung (nomt:5244B7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/89290D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Aussensteven (hinten) (nomt:89290D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/615494",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Futterholz (nomt:615494)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DBD212",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stevenschuh/Anlauf (nomt:DBD212)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CCEBB1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bugholz (nomt:CCEBB1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EF438D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bilgerinne (nomt:EF438D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/622C3E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "n\u00fcstergatt (nomt:622C3E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/576903",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Blockade (nomt:576903)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1DF903",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "K\u00fcste (nomt:1DF903)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/988120",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Papyrusboot (nomt:988120)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/36E638",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bugsporn (nomt:36E638)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9AF80B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Spiegel (nomt:9AF80B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C747D7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Wrange (nomt:C747D7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9E1A00",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schott (nomt:9E1A00)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/08123C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Wegerung (nomt:08123C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BA2F0A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stringer (nomt:BA2F0A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2543C0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannte Konstruktion (nomt:2543C0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/92A980",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Niet (nomt:92A980)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BDA98D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Beschlag (nomt:BDA98D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F2A43F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gen\u00e4ht (nomt:F2A43F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6264CD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schnur (nomt:6264CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F4937E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Sprit) (nomt:F4937E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1C02BA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderpinne (nomt:1C02BA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/287711",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderverblendung (nomt:287711)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FE4152",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Steuerruder (nomt:FE4152)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6EDC6E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dolle (nomt:6EDC6E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A46FC5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorsegel (nomt:A46FC5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4647AA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Masttopp (nomt:4647AA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C44B0A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Toppsegel (nomt:C44B0A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/67971F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Vormast) (nomt:67971F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E3A2EB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bug Sprit (nomt:E3A2EB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F4B395",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Besanmast) (nomt:F4B395)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/241F5C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Jungfer-Block (nomt:241F5C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E98761",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rack (nomt:E98761)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C2BB4F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Treidelpfosten (nomt:C2BB4F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/137F48",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Rah) (nomt:137F48)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4046CE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (nomt:4046CE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6955E7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Hauptmast) (nomt:6955E7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C5510C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel Beplankt (nomt:C5510C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/657FC7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastspur (nomt:657FC7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7213DA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastfisch (nomt:7213DA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E8B19E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bohrung (nomt:E8B19E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4C4634",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastbalken (nomt:4C4634)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6C9F8B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastducht (nomt:6C9F8B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6D56F8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastspant (nomt:6D56F8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DFC9A3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sch\u00e4ftung (nomt:DFC9A3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1B5D3C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Duchtst\u00fctze (nomt:1B5D3C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C64348",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderducht (Sitz) (nomt:C64348)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8BF813",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Paddel (nomt:8BF813)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C84B3B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Keipe (nomt:C84B3B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B6DB9B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stakstange (nomt:B6DB9B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E6E992",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Poller (nomt:E6E992)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B173C4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Block (nomt:B173C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BAC933",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Winde (nomt:BAC933)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/980A93",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schalenbauweise (nomt:980A93)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/61FA94",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Anker (nomt:61FA94)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E1F036",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kalfat (nomt:E1F036)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6097B3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dekoration (nomt:6097B3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9272A2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kabine (nomt:9272A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E865A5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderbalken (nomt:E865A5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/33BF0F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderbalken St\u00fctze (nomt:33BF0F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E4C877",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Tau (nomt:E4C877)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1051B8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Plankenbeschlag (nomt:1051B8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/74E140",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Skelettbauweise (nomt:74E140)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/045F07",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Waffen (nomt:045F07)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CD6133",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (Bronze) (nomt:CD6133)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FD5EF1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (Eisen) (nomt:FD5EF1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/71575D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Boden zuerst (nomt:71575D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EDCB2D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Boden) (nomt:EDCB2D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/88987C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorderkastell (nomt:88987C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8D2DDA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achterkastell (nomt:8D2DDA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5C8CF5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Obersporn (nomt:5C8CF5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5FA6B8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderfassung (nomt:5FA6B8)",
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
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4E634F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4E634F (nomt:activity_4E634F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3D5B72",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3D5B72 (nomt:activity_3D5B72)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B8CE4C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B8CE4C (nomt:activity_B8CE4C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_01390D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_01390D (nomt:activity_01390D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BBCBE0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BBCBE0 (nomt:activity_BBCBE0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_95C02A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_95C02A (nomt:activity_95C02A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4E64BF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4E64BF (nomt:activity_4E64BF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0AD305",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0AD305 (nomt:activity_0AD305)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_82B0C0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_82B0C0 (nomt:activity_82B0C0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A18262",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A18262 (nomt:activity_A18262)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_753375",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_753375 (nomt:activity_753375)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3E51BD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3E51BD (nomt:activity_3E51BD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_22B1CD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_22B1CD (nomt:activity_22B1CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4F19CD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4F19CD (nomt:activity_4F19CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CFF6DF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CFF6DF (nomt:activity_CFF6DF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3603E6",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3603E6 (nomt:activity_3603E6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_71B0DA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_71B0DA (nomt:activity_71B0DA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_01E22C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_01E22C (nomt:activity_01E22C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_72AED5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_72AED5 (nomt:activity_72AED5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8ABF23",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8ABF23 (nomt:activity_8ABF23)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_918C08",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_918C08 (nomt:activity_918C08)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F95C88",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F95C88 (nomt:activity_F95C88)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C8E484",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C8E484 (nomt:activity_C8E484)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4F3B14",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4F3B14 (nomt:activity_4F3B14)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A2C3C4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A2C3C4 (nomt:activity_A2C3C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4156FE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4156FE (nomt:activity_4156FE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D270FA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D270FA (nomt:activity_D270FA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9C7A8F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9C7A8F (nomt:activity_9C7A8F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6FDEE8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6FDEE8 (nomt:activity_6FDEE8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7F0E2B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7F0E2B (nomt:activity_7F0E2B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_97C594",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_97C594 (nomt:activity_97C594)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E23219",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E23219 (nomt:activity_E23219)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_959CF0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_959CF0 (nomt:activity_959CF0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_662AD8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_662AD8 (nomt:activity_662AD8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9A860E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9A860E (nomt:activity_9A860E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_03AC7B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_03AC7B (nomt:activity_03AC7B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_31E77B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_31E77B (nomt:activity_31E77B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1243AD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1243AD (nomt:activity_1243AD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_50A78E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_50A78E (nomt:activity_50A78E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1C9E02",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1C9E02 (nomt:activity_1C9E02)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7A68A2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7A68A2 (nomt:activity_7A68A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6B2266",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6B2266 (nomt:activity_6B2266)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_07E13E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_07E13E (nomt:activity_07E13E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E86A62",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E86A62 (nomt:activity_E86A62)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DA3C3F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DA3C3F (nomt:activity_DA3C3F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_35DAD4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_35DAD4 (nomt:activity_35DAD4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_476A2A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_476A2A (nomt:activity_476A2A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9F7CCE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9F7CCE (nomt:activity_9F7CCE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7E27B4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7E27B4 (nomt:activity_7E27B4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CFD0AB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CFD0AB (nomt:activity_CFD0AB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0C22DB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0C22DB (nomt:activity_0C22DB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_78C8CF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_78C8CF (nomt:activity_78C8CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_79B1BE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_79B1BE (nomt:activity_79B1BE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A3F19E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A3F19E (nomt:activity_A3F19E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E3C0E8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E3C0E8 (nomt:activity_E3C0E8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AFBCF2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AFBCF2 (nomt:activity_AFBCF2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BC051E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BC051E (nomt:activity_BC051E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C5E744",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C5E744 (nomt:activity_C5E744)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E7AD7A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E7AD7A (nomt:activity_E7AD7A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0741A5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0741A5 (nomt:activity_0741A5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6BA6CF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6BA6CF (nomt:activity_6BA6CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_95D183",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_95D183 (nomt:activity_95D183)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DD168D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DD168D (nomt:activity_DD168D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AEF1D5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AEF1D5 (nomt:activity_AEF1D5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_78E36E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_78E36E (nomt:activity_78E36E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_534E87",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_534E87 (nomt:activity_534E87)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_01F313",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_01F313 (nomt:activity_01F313)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_22E3B2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_22E3B2 (nomt:activity_22E3B2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DD6037",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DD6037 (nomt:activity_DD6037)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C18B1B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C18B1B (nomt:activity_C18B1B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F6F407",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F6F407 (nomt:activity_F6F407)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_81CB47",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_81CB47 (nomt:activity_81CB47)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F7285A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F7285A (nomt:activity_F7285A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7AC92B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7AC92B (nomt:activity_7AC92B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_407956",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_407956 (nomt:activity_407956)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_299329",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_299329 (nomt:activity_299329)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A3F079",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A3F079 (nomt:activity_A3F079)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C0F289",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C0F289 (nomt:activity_C0F289)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A35B7B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A35B7B (nomt:activity_A35B7B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_14FC5D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_14FC5D (nomt:activity_14FC5D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5A3BAE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5A3BAE (nomt:activity_5A3BAE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_85512C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_85512C (nomt:activity_85512C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EA28ED",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EA28ED (nomt:activity_EA28ED)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BEAABB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BEAABB (nomt:activity_BEAABB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8A94C2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8A94C2 (nomt:activity_8A94C2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EECFB0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EECFB0 (nomt:activity_EECFB0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9DDCA0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9DDCA0 (nomt:activity_9DDCA0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_85E84B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_85E84B (nomt:activity_85E84B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E3362C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E3362C (nomt:activity_E3362C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8EF01D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8EF01D (nomt:activity_8EF01D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D15DAB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D15DAB (nomt:activity_D15DAB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_42300A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_42300A (nomt:activity_42300A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4B5BF3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4B5BF3 (nomt:activity_4B5BF3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EAE76A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EAE76A (nomt:activity_EAE76A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CC9873",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CC9873 (nomt:activity_CC9873)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3E71D2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3E71D2 (nomt:activity_3E71D2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_781A6E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_781A6E (nomt:activity_781A6E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F7040D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F7040D (nomt:activity_F7040D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1CE7AB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1CE7AB (nomt:activity_1CE7AB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_338D81",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_338D81 (nomt:activity_338D81)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AD63B1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AD63B1 (nomt:activity_AD63B1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_970E41",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_970E41 (nomt:activity_970E41)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CF76BE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CF76BE (nomt:activity_CF76BE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6A3CBB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6A3CBB (nomt:activity_6A3CBB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_41597C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_41597C (nomt:activity_41597C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_736CB6",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_736CB6 (nomt:activity_736CB6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9F24E8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9F24E8 (nomt:activity_9F24E8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_172BD7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_172BD7 (nomt:activity_172BD7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1BEB77",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1BEB77 (nomt:activity_1BEB77)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B44495",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B44495 (nomt:activity_B44495)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D7D714",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D7D714 (nomt:activity_D7D714)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_04107E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_04107E (nomt:activity_04107E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_065516",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_065516 (nomt:activity_065516)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_31F675",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_31F675 (nomt:activity_31F675)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FA4000",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FA4000 (nomt:activity_FA4000)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7F509F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7F509F (nomt:activity_7F509F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D76D74",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D76D74 (nomt:activity_D76D74)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_18D039",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_18D039 (nomt:activity_18D039)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E3BAB8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E3BAB8 (nomt:activity_E3BAB8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_067FCD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_067FCD (nomt:activity_067FCD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C873D9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C873D9 (nomt:activity_C873D9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7BABAD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7BABAD (nomt:activity_7BABAD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E1C71C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E1C71C (nomt:activity_E1C71C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8D3E7D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8D3E7D (nomt:activity_8D3E7D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_16ED34",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_16ED34 (nomt:activity_16ED34)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_06DF49",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_06DF49 (nomt:activity_06DF49)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A5749D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A5749D (nomt:activity_A5749D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AF97BA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AF97BA (nomt:activity_AF97BA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_69E39F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_69E39F (nomt:activity_69E39F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B876C5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B876C5 (nomt:activity_B876C5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AC499C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AC499C (nomt:activity_AC499C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_247DBF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_247DBF (nomt:activity_247DBF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_369740",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_369740 (nomt:activity_369740)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4026B3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4026B3 (nomt:activity_4026B3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_75B895",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_75B895 (nomt:activity_75B895)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E427D1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E427D1 (nomt:activity_E427D1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C0C8D3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C0C8D3 (nomt:activity_C0C8D3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7BE436",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7BE436 (nomt:activity_7BE436)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9F2983",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9F2983 (nomt:activity_9F2983)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BF0944",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BF0944 (nomt:activity_BF0944)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_27CABE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_27CABE (nomt:activity_27CABE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6B83EA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6B83EA (nomt:activity_6B83EA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5244B7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5244B7 (nomt:activity_5244B7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_89290D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_89290D (nomt:activity_89290D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_615494",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_615494 (nomt:activity_615494)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DBD212",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DBD212 (nomt:activity_DBD212)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CCEBB1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CCEBB1 (nomt:activity_CCEBB1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EF438D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EF438D (nomt:activity_EF438D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_622C3E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_622C3E (nomt:activity_622C3E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_576903",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_576903 (nomt:activity_576903)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1DF903",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1DF903 (nomt:activity_1DF903)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_988120",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_988120 (nomt:activity_988120)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_36E638",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_36E638 (nomt:activity_36E638)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9AF80B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9AF80B (nomt:activity_9AF80B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C747D7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C747D7 (nomt:activity_C747D7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9E1A00",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9E1A00 (nomt:activity_9E1A00)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_08123C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_08123C (nomt:activity_08123C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BA2F0A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BA2F0A (nomt:activity_BA2F0A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2543C0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2543C0 (nomt:activity_2543C0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_92A980",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_92A980 (nomt:activity_92A980)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BDA98D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BDA98D (nomt:activity_BDA98D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F2A43F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F2A43F (nomt:activity_F2A43F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6264CD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6264CD (nomt:activity_6264CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F4937E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F4937E (nomt:activity_F4937E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1C02BA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1C02BA (nomt:activity_1C02BA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_287711",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_287711 (nomt:activity_287711)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FE4152",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FE4152 (nomt:activity_FE4152)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6EDC6E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6EDC6E (nomt:activity_6EDC6E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A46FC5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A46FC5 (nomt:activity_A46FC5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4647AA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4647AA (nomt:activity_4647AA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C44B0A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C44B0A (nomt:activity_C44B0A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_67971F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_67971F (nomt:activity_67971F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E3A2EB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E3A2EB (nomt:activity_E3A2EB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F4B395",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F4B395 (nomt:activity_F4B395)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_241F5C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_241F5C (nomt:activity_241F5C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E98761",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E98761 (nomt:activity_E98761)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C2BB4F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C2BB4F (nomt:activity_C2BB4F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_137F48",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_137F48 (nomt:activity_137F48)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4046CE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4046CE (nomt:activity_4046CE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6955E7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6955E7 (nomt:activity_6955E7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C5510C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C5510C (nomt:activity_C5510C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_657FC7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_657FC7 (nomt:activity_657FC7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7213DA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7213DA (nomt:activity_7213DA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E8B19E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E8B19E (nomt:activity_E8B19E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4C4634",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4C4634 (nomt:activity_4C4634)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6C9F8B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6C9F8B (nomt:activity_6C9F8B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6D56F8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6D56F8 (nomt:activity_6D56F8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DFC9A3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DFC9A3 (nomt:activity_DFC9A3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1B5D3C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1B5D3C (nomt:activity_1B5D3C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C64348",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C64348 (nomt:activity_C64348)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8BF813",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8BF813 (nomt:activity_8BF813)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C84B3B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C84B3B (nomt:activity_C84B3B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B6DB9B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B6DB9B (nomt:activity_B6DB9B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E6E992",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E6E992 (nomt:activity_E6E992)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B173C4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B173C4 (nomt:activity_B173C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BAC933",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BAC933 (nomt:activity_BAC933)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_980A93",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_980A93 (nomt:activity_980A93)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_61FA94",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_61FA94 (nomt:activity_61FA94)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E1F036",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E1F036 (nomt:activity_E1F036)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6097B3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6097B3 (nomt:activity_6097B3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9272A2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9272A2 (nomt:activity_9272A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E865A5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E865A5 (nomt:activity_E865A5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_33BF0F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_33BF0F (nomt:activity_33BF0F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E4C877",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E4C877 (nomt:activity_E4C877)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1051B8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1051B8 (nomt:activity_1051B8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_74E140",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_74E140 (nomt:activity_74E140)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_045F07",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_045F07 (nomt:activity_045F07)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CD6133",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CD6133 (nomt:activity_CD6133)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FD5EF1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FD5EF1 (nomt:activity_FD5EF1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_71575D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_71575D (nomt:activity_71575D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EDCB2D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EDCB2D (nomt:activity_EDCB2D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_88987C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_88987C (nomt:activity_88987C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8D2DDA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8D2DDA (nomt:activity_8D2DDA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5C8CF5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5C8CF5 (nomt:activity_5C8CF5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5FA6B8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5FA6B8 (nomt:activity_5FA6B8)",
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