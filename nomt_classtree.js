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
        "id": "http://data.archaeology.link/data/maritimethesaurus/5472B2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "hulk\u00e4hnlich (nomt:5472B2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6491C3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Seite) (nomt:6491C3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6C1C1D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Klinker (Seite) (nomt:6C1C1D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C0B0E1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (Boden) (nomt:C0B0E1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BAED73",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (erweitert) (nomt:BAED73)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/63A6E4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "koggen\u00e4hnlich (nomt:63A6E4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E0BC8C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (mit Vorunter) (nomt:E0BC8C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/427FCF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (mit Gesamtdeck) (nomt:427FCF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BC332F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Bronze) (nomt:BC332F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8FCA50",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Kupfer) (nomt:8FCA50)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7393C9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (Baum) (nomt:7393C9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B0D70E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastst\u00fctze (nomt:B0D70E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8E26B8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "prahm\u00e4hnlich (nomt:8E26B8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/54E32C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "wikingerschiff\u00e4hnlich (nomt:54E32C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5EF232",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Reling (nomt:5EF232)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/379A2E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ausleger (nomt:379A2E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3C3311",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kanuausleger (nomt:3C3311)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5F47CB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruder (Heck) (nomt:5F47CB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/20F045",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kiel (nomt:20F045)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/29CBC9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielgang (nomt:29CBC9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F426DE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielplanke (nomt:F426DE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/20AB84",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kielschwein (nomt:20AB84)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0D16A2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimmstringer (nomt:0D16A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/434F04",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Knie (nomt:434F04)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3FBE29",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "L\u00e4ngsversteifung (nomt:3FBE29)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6471C5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Naht (nomt:6471C5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1149D5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rah (nomt:1149D5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8C0C1B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gut (Laufend) (nomt:8C0C1B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A3C7CB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Riemenpforte (nomt:A3C7CB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D7F183",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Arbeitsboot (nomt:D7F183)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7ED321",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Balken (nomt:7ED321)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2EA1AB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "See (nomt:2EA1AB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0A8516",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gestakt (nomt:0A8516)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/346DF1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gestakt und gesegelt (nomt:346DF1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F71E8E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Beplankung (nomt:F71E8E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EAD7A9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Erweiterter Einbaum (nomt:EAD7A9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AB5CBB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "galeeren\u00e4hnlich (nomt:AB5CBB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E0984E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Binnenland (nomt:E0984E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F48592",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Blussus (nomt:F48592)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/883E8D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannter Schiffstyp (nomt:883E8D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AC906A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Neumagen (nomt:AC906A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C42DC4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Navis oneraria (nomt:C42DC4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3323FF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Navis caudicaria (nomt:3323FF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/705DB7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt (nomt:705DB7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DC89EB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Langschiff (nomt:DC89EB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8B55C4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Milit\u00e4rfahrzeug (nomt:8B55C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D800BA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannt (nomt:D800BA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BC75BB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gepaddelt (nomt:BC75BB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B0F013",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Portus (nomt:B0F013)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0BE8C2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Decksbalken (nomt:0BE8C2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/61AB9E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Deck (nomt:61AB9E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/817F57",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Decksplanke (nomt:817F57)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7B12A2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert (nomt:7B12A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B3B8F9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gesegelt (nomt:B3B8F9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/074F8A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gut (Stehend) (nomt:074F8A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B0535D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vordersteven (nomt:B0535D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DCA950",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Riemen (nomt:DCA950)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8D23B1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Fischereifahrzeug (nomt:8D23B1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B0565D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bargholz (nomt:B0565D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AF5C8D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastbereich (nomt:AF5C8D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5E0D28",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimm (Rund) (nomt:5E0D28)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A6A046",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Flickung (nomt:A6A046)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5B0B41",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Anriss (nomt:5B0B41)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AFF00C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Werkzeugspur (nomt:AFF00C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B8ECB5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Holznagel (nomt:B8ECB5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/85C3C2",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rute (nomt:85C3C2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/09BEBF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimmholz (nomt:09BEBF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DC8396",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schandeckel (nomt:DC8396)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B00683",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "falscher Kiel (nomt:B00683)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0B9A28",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Totgang (nomt:0B9A28)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A21BCC",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Blackfriars (nomt:A21BCC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/239F9C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Brigg (nomt:239F9C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/26941E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dover (nomt:26941E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/40D1A3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mainz A (nomt:40D1A3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/ABFB76",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mainz B (nomt:ABFB76)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FD7D75",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nordic (nomt:FD7D75)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4EC602",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "North Ferriby (nomt:4EC602)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/ED5180",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Oberstimm (nomt:ED5180)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C8BE01",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Pommeroeul 1 (nomt:C8BE01)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/6A2A87",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Utrecht 1 (nomt:6A2A87)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0234D3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Utrecht 3 (nomt:0234D3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/679A09",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Woerden 1 (nomt:679A09)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B02E91",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Woerden 2 (nomt:B02E91)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D6F501",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam (nomt:D6F501)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/96911B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam 3 (nomt:96911B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/51C929",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zwammerdam 5 (nomt:51C929)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D88694",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Einbaum (nomt:D88694)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FF8A47",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mallenbauweise (nomt:FF8A47)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2FF7C7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Funktion unbekannt (nomt:2FF7C7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A14DDA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannter Antrieb (nomt:A14DDA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/67C5EA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Typ Igel (nomt:67C5EA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/87FFFB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bug (nomt:87FFFB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D1CB84",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dollbord (nomt:D1CB84)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C71032",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Planke (nomt:C71032)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BCE269",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sprung (nomt:BCE269)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/47191C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gang (nomt:47191C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/977C4D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kimm (Eckig) (nomt:977C4D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A9FE4D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Scheuerleiste (nomt:A9FE4D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1E27F0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gepaddelt und gesegelt (nomt:1E27F0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DB6446",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Heck (nomt:DB6446)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C5A0B6",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Frachter (nomt:C5A0B6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E5EF06",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt und gesegelt (nomt:E5EF06)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C7A87C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert, gestakt und gesegelt (nomt:C7A87C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7F16E0",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kaffe (nomt:7F16E0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2C6BDB",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Beplankung) (nomt:2C6BDB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D10A1D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stevendekoration (nomt:D10A1D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/15087C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Artillerie (nomt:15087C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A3EBFA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rammsporn (nomt:A3EBFA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1975C4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rad (nomt:1975C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D060C4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schildhalterung (nomt:D060C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D3FF82",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nut und Feder (nomt:D3FF82)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/938B4F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achtersteven (nomt:938B4F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/947F7A",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gerudert und gesegelt (nomt:947F7A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0093DC",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schale (nomt:0093DC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5ED27C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Getreidelt und gepaddelt (nomt:5ED27C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/06BE5F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Spant (nomt:06BE5F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C4B24F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Halbspant (nomt:C4B24F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B5BA3D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "B\u00fcnte (nomt:B5BA3D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8CA594",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mittelsteven (nomt:8CA594)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F0F917",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Auflanger (nomt:F0F917)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FE767B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Querriegel (nomt:FE767B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/80B562",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorschiff (nomt:80B562)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EF0C63",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Lukendeckel (nomt:EF0C63)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AF72E8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "St\u00fctze (nomt:AF72E8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/09DF17",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bodenplanke (nomt:09DF17)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3A3C90",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Boden (nomt:3A3C90)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1F8C94",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Geklinkert (nomt:1F8C94)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5F88DE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Seitenspant (nomt:5F88DE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4277CC",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achterschiff (nomt:4277CC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/8AFF10",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dollbaum (nomt:8AFF10)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/130F84",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Seitensteven (nomt:130F84)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/441BAE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Lateiner) (nomt:441BAE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/DB88D4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schild (nomt:DB88D4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/10E2CF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Laufplanke (nomt:10E2CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B61EB9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schanzkleid (nomt:B61EB9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A29AEA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "gebunden (nomt:A29AEA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/54D771",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (nomt:54D771)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AB357C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Zimmermannszeichen (nomt:AB357C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/403A13",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Klampe (nomt:403A13)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/431A1E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nahtspant (nomt:431A1E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EB6A4F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Holzstift (nomt:EB6A4F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3DE001",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sponung (nomt:3DE001)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5601F3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Aussparung (nomt:5601F3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A7A73E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Aussensteven (hinten) (nomt:A7A73E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A00109",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Futterholz (nomt:A00109)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/AC3D96",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stevenschuh/Anlauf (nomt:AC3D96)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/E9E384",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bugholz (nomt:E9E384)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2215C5",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bilgerinne (nomt:2215C5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D81709",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "n\u00fcstergatt (nomt:D81709)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C4AA6D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Blockade (nomt:C4AA6D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7D2D8B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "K\u00fcste (nomt:7D2D8B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B2CF95",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Papyrusboot (nomt:B2CF95)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/45B061",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bugsporn (nomt:45B061)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CDC760",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Spiegel (nomt:CDC760)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/5EEC61",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Wrange (nomt:5EEC61)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A1B3F9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schott (nomt:A1B3F9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D03311",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Wegerung (nomt:D03311)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EB04DC",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stringer (nomt:EB04DC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/619AD3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Unbekannte Konstruktion (nomt:619AD3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C11F67",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Niet (nomt:C11F67)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/03297B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Beschlag (nomt:03297B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CFCC18",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Gen\u00e4ht (nomt:CFCC18)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A46547",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schnur (nomt:A46547)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/0E4547",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Sprit) (nomt:0E4547)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FBE946",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderpinne (nomt:FBE946)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/02A954",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderverblendung (nomt:02A954)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2D4862",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Steuerruder (nomt:2D4862)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D8EF0C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dolle (nomt:D8EF0C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/71CB9C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorsegel (nomt:71CB9C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1F4820",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Masttopp (nomt:1F4820)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/648E0B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Toppsegel (nomt:648E0B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/69600C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Vormast) (nomt:69600C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/411EC9",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bug Sprit (nomt:411EC9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/655F73",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Besanmast) (nomt:655F73)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/178A10",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Jungfer-Block (nomt:178A10)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EDB704",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Rack (nomt:EDB704)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2AC165",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Treidelpfosten (nomt:2AC165)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F4405C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Segel (Rah) (nomt:F4405C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1D1955",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Nagel (nomt:1D1955)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FE0706",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mast (Hauptmast) (nomt:FE0706)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1C41AC",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel Beplankt (nomt:1C41AC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2B8C74",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastspur (nomt:2B8C74)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1C43CA",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastfisch (nomt:1C43CA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4744EE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bohrung (nomt:4744EE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2143CF",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastbalken (nomt:2143CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D12C93",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastducht (nomt:D12C93)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1C9D25",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Mastspant (nomt:1C9D25)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/49AA0C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Sch\u00e4ftung (nomt:49AA0C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9A4CAE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Duchtst\u00fctze (nomt:9A4CAE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/A1A0DE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderducht (Sitz) (nomt:A1A0DE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/75D305",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Paddel (nomt:75D305)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4B0A52",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Keipe (nomt:4B0A52)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/4FF277",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Stakstange (nomt:4FF277)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/98614C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Poller (nomt:98614C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/FB341B",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Block (nomt:FB341B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/C399D6",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Winde (nomt:C399D6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/690B73",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Schalenbauweise (nomt:690B73)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/7EA68E",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Anker (nomt:7EA68E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/88C1CD",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kalfat (nomt:88C1CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/1EB740",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Dekoration (nomt:1EB740)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9DF75C",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kabine (nomt:9DF75C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/807A0F",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderbalken (nomt:807A0F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/737BE7",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderbalken St\u00fctze (nomt:737BE7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/F9BB92",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Tau (nomt:F9BB92)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/D59DA1",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Plankenbeschlag (nomt:D59DA1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BD12D8",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Skelettbauweise (nomt:BD12D8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/9416B4",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Waffen (nomt:9416B4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/CEA053",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (Bronze) (nomt:CEA053)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/2A2031",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Bolzen (Eisen) (nomt:2A2031)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/610FD3",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Boden zuerst (nomt:610FD3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/EAC98D",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Kraweel (Boden) (nomt:EAC98D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/B6D026",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Vorderkastell (nomt:B6D026)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/644D77",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Achterkastell (nomt:644D77)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/BE91AE",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Obersporn (nomt:BE91AE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/3A4334",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "Ruderfassung (nomt:3A4334)",
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
              "instancecount": 2
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
              "instancecount": 2
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
        "instancecount": 22
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
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5472B2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5472B2 (nomt:activity_5472B2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6491C3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6491C3 (nomt:activity_6491C3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6C1C1D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6C1C1D (nomt:activity_6C1C1D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C0B0E1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C0B0E1 (nomt:activity_C0B0E1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BAED73",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BAED73 (nomt:activity_BAED73)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_63A6E4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_63A6E4 (nomt:activity_63A6E4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E0BC8C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E0BC8C (nomt:activity_E0BC8C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_427FCF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_427FCF (nomt:activity_427FCF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BC332F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BC332F (nomt:activity_BC332F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8FCA50",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8FCA50 (nomt:activity_8FCA50)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7393C9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7393C9 (nomt:activity_7393C9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B0D70E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B0D70E (nomt:activity_B0D70E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8E26B8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8E26B8 (nomt:activity_8E26B8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_54E32C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_54E32C (nomt:activity_54E32C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5EF232",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5EF232 (nomt:activity_5EF232)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_379A2E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_379A2E (nomt:activity_379A2E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3C3311",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3C3311 (nomt:activity_3C3311)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5F47CB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5F47CB (nomt:activity_5F47CB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_20F045",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_20F045 (nomt:activity_20F045)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_29CBC9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_29CBC9 (nomt:activity_29CBC9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F426DE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F426DE (nomt:activity_F426DE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_20AB84",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_20AB84 (nomt:activity_20AB84)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0D16A2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0D16A2 (nomt:activity_0D16A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_434F04",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_434F04 (nomt:activity_434F04)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3FBE29",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3FBE29 (nomt:activity_3FBE29)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6471C5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6471C5 (nomt:activity_6471C5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1149D5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1149D5 (nomt:activity_1149D5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8C0C1B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8C0C1B (nomt:activity_8C0C1B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A3C7CB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A3C7CB (nomt:activity_A3C7CB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D7F183",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D7F183 (nomt:activity_D7F183)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7ED321",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7ED321 (nomt:activity_7ED321)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2EA1AB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2EA1AB (nomt:activity_2EA1AB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0A8516",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0A8516 (nomt:activity_0A8516)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_346DF1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_346DF1 (nomt:activity_346DF1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F71E8E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F71E8E (nomt:activity_F71E8E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EAD7A9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EAD7A9 (nomt:activity_EAD7A9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AB5CBB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AB5CBB (nomt:activity_AB5CBB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E0984E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E0984E (nomt:activity_E0984E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F48592",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F48592 (nomt:activity_F48592)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_883E8D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_883E8D (nomt:activity_883E8D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AC906A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AC906A (nomt:activity_AC906A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C42DC4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C42DC4 (nomt:activity_C42DC4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3323FF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3323FF (nomt:activity_3323FF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_705DB7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_705DB7 (nomt:activity_705DB7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DC89EB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DC89EB (nomt:activity_DC89EB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8B55C4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8B55C4 (nomt:activity_8B55C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D800BA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D800BA (nomt:activity_D800BA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BC75BB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BC75BB (nomt:activity_BC75BB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B0F013",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B0F013 (nomt:activity_B0F013)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0BE8C2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0BE8C2 (nomt:activity_0BE8C2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_61AB9E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_61AB9E (nomt:activity_61AB9E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_817F57",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_817F57 (nomt:activity_817F57)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7B12A2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7B12A2 (nomt:activity_7B12A2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B3B8F9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B3B8F9 (nomt:activity_B3B8F9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_074F8A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_074F8A (nomt:activity_074F8A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B0535D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B0535D (nomt:activity_B0535D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DCA950",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DCA950 (nomt:activity_DCA950)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8D23B1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8D23B1 (nomt:activity_8D23B1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B0565D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B0565D (nomt:activity_B0565D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AF5C8D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AF5C8D (nomt:activity_AF5C8D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5E0D28",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5E0D28 (nomt:activity_5E0D28)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A6A046",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A6A046 (nomt:activity_A6A046)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5B0B41",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5B0B41 (nomt:activity_5B0B41)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AFF00C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AFF00C (nomt:activity_AFF00C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B8ECB5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B8ECB5 (nomt:activity_B8ECB5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_85C3C2",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_85C3C2 (nomt:activity_85C3C2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_09BEBF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_09BEBF (nomt:activity_09BEBF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DC8396",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DC8396 (nomt:activity_DC8396)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B00683",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B00683 (nomt:activity_B00683)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0B9A28",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0B9A28 (nomt:activity_0B9A28)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A21BCC",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A21BCC (nomt:activity_A21BCC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_239F9C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_239F9C (nomt:activity_239F9C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_26941E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_26941E (nomt:activity_26941E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_40D1A3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_40D1A3 (nomt:activity_40D1A3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_ABFB76",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_ABFB76 (nomt:activity_ABFB76)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FD7D75",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FD7D75 (nomt:activity_FD7D75)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4EC602",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4EC602 (nomt:activity_4EC602)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_ED5180",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_ED5180 (nomt:activity_ED5180)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C8BE01",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C8BE01 (nomt:activity_C8BE01)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_6A2A87",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_6A2A87 (nomt:activity_6A2A87)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0234D3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0234D3 (nomt:activity_0234D3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_679A09",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_679A09 (nomt:activity_679A09)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B02E91",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B02E91 (nomt:activity_B02E91)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D6F501",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D6F501 (nomt:activity_D6F501)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_96911B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_96911B (nomt:activity_96911B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_51C929",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_51C929 (nomt:activity_51C929)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D88694",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D88694 (nomt:activity_D88694)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FF8A47",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FF8A47 (nomt:activity_FF8A47)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2FF7C7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2FF7C7 (nomt:activity_2FF7C7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A14DDA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A14DDA (nomt:activity_A14DDA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_67C5EA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_67C5EA (nomt:activity_67C5EA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_87FFFB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_87FFFB (nomt:activity_87FFFB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D1CB84",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D1CB84 (nomt:activity_D1CB84)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C71032",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C71032 (nomt:activity_C71032)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BCE269",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BCE269 (nomt:activity_BCE269)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_47191C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_47191C (nomt:activity_47191C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_977C4D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_977C4D (nomt:activity_977C4D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A9FE4D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A9FE4D (nomt:activity_A9FE4D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1E27F0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1E27F0 (nomt:activity_1E27F0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DB6446",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DB6446 (nomt:activity_DB6446)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C5A0B6",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C5A0B6 (nomt:activity_C5A0B6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E5EF06",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E5EF06 (nomt:activity_E5EF06)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C7A87C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C7A87C (nomt:activity_C7A87C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7F16E0",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7F16E0 (nomt:activity_7F16E0)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2C6BDB",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2C6BDB (nomt:activity_2C6BDB)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D10A1D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D10A1D (nomt:activity_D10A1D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_15087C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_15087C (nomt:activity_15087C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A3EBFA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A3EBFA (nomt:activity_A3EBFA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1975C4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1975C4 (nomt:activity_1975C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D060C4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D060C4 (nomt:activity_D060C4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D3FF82",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D3FF82 (nomt:activity_D3FF82)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_938B4F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_938B4F (nomt:activity_938B4F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_947F7A",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_947F7A (nomt:activity_947F7A)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0093DC",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0093DC (nomt:activity_0093DC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5ED27C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5ED27C (nomt:activity_5ED27C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_06BE5F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_06BE5F (nomt:activity_06BE5F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C4B24F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C4B24F (nomt:activity_C4B24F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B5BA3D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B5BA3D (nomt:activity_B5BA3D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8CA594",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8CA594 (nomt:activity_8CA594)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F0F917",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F0F917 (nomt:activity_F0F917)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FE767B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FE767B (nomt:activity_FE767B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_80B562",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_80B562 (nomt:activity_80B562)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EF0C63",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EF0C63 (nomt:activity_EF0C63)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AF72E8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AF72E8 (nomt:activity_AF72E8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_09DF17",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_09DF17 (nomt:activity_09DF17)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3A3C90",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3A3C90 (nomt:activity_3A3C90)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1F8C94",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1F8C94 (nomt:activity_1F8C94)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5F88DE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5F88DE (nomt:activity_5F88DE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4277CC",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4277CC (nomt:activity_4277CC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_8AFF10",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_8AFF10 (nomt:activity_8AFF10)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_130F84",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_130F84 (nomt:activity_130F84)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_441BAE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_441BAE (nomt:activity_441BAE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_DB88D4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_DB88D4 (nomt:activity_DB88D4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_10E2CF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_10E2CF (nomt:activity_10E2CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B61EB9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B61EB9 (nomt:activity_B61EB9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A29AEA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A29AEA (nomt:activity_A29AEA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_54D771",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_54D771 (nomt:activity_54D771)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AB357C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AB357C (nomt:activity_AB357C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_403A13",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_403A13 (nomt:activity_403A13)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_431A1E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_431A1E (nomt:activity_431A1E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EB6A4F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EB6A4F (nomt:activity_EB6A4F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3DE001",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3DE001 (nomt:activity_3DE001)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5601F3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5601F3 (nomt:activity_5601F3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A7A73E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A7A73E (nomt:activity_A7A73E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A00109",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A00109 (nomt:activity_A00109)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_AC3D96",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_AC3D96 (nomt:activity_AC3D96)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_E9E384",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_E9E384 (nomt:activity_E9E384)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2215C5",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2215C5 (nomt:activity_2215C5)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D81709",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D81709 (nomt:activity_D81709)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C4AA6D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C4AA6D (nomt:activity_C4AA6D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7D2D8B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7D2D8B (nomt:activity_7D2D8B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B2CF95",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B2CF95 (nomt:activity_B2CF95)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_45B061",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_45B061 (nomt:activity_45B061)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CDC760",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CDC760 (nomt:activity_CDC760)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_5EEC61",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_5EEC61 (nomt:activity_5EEC61)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A1B3F9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A1B3F9 (nomt:activity_A1B3F9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D03311",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D03311 (nomt:activity_D03311)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EB04DC",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EB04DC (nomt:activity_EB04DC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_619AD3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_619AD3 (nomt:activity_619AD3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C11F67",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C11F67 (nomt:activity_C11F67)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_03297B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_03297B (nomt:activity_03297B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CFCC18",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CFCC18 (nomt:activity_CFCC18)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A46547",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A46547 (nomt:activity_A46547)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_0E4547",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_0E4547 (nomt:activity_0E4547)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FBE946",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FBE946 (nomt:activity_FBE946)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_02A954",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_02A954 (nomt:activity_02A954)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2D4862",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2D4862 (nomt:activity_2D4862)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D8EF0C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D8EF0C (nomt:activity_D8EF0C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_71CB9C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_71CB9C (nomt:activity_71CB9C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1F4820",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1F4820 (nomt:activity_1F4820)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_648E0B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_648E0B (nomt:activity_648E0B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_69600C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_69600C (nomt:activity_69600C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_411EC9",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_411EC9 (nomt:activity_411EC9)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_655F73",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_655F73 (nomt:activity_655F73)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_178A10",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_178A10 (nomt:activity_178A10)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EDB704",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EDB704 (nomt:activity_EDB704)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2AC165",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2AC165 (nomt:activity_2AC165)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F4405C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F4405C (nomt:activity_F4405C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1D1955",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1D1955 (nomt:activity_1D1955)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FE0706",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FE0706 (nomt:activity_FE0706)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1C41AC",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1C41AC (nomt:activity_1C41AC)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2B8C74",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2B8C74 (nomt:activity_2B8C74)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1C43CA",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1C43CA (nomt:activity_1C43CA)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4744EE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4744EE (nomt:activity_4744EE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2143CF",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2143CF (nomt:activity_2143CF)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D12C93",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D12C93 (nomt:activity_D12C93)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1C9D25",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1C9D25 (nomt:activity_1C9D25)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_49AA0C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_49AA0C (nomt:activity_49AA0C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9A4CAE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9A4CAE (nomt:activity_9A4CAE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_A1A0DE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_A1A0DE (nomt:activity_A1A0DE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_75D305",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_75D305 (nomt:activity_75D305)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4B0A52",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4B0A52 (nomt:activity_4B0A52)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_4FF277",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_4FF277 (nomt:activity_4FF277)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_98614C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_98614C (nomt:activity_98614C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_FB341B",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_FB341B (nomt:activity_FB341B)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_C399D6",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_C399D6 (nomt:activity_C399D6)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_690B73",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_690B73 (nomt:activity_690B73)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_7EA68E",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_7EA68E (nomt:activity_7EA68E)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_88C1CD",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_88C1CD (nomt:activity_88C1CD)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_1EB740",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_1EB740 (nomt:activity_1EB740)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9DF75C",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9DF75C (nomt:activity_9DF75C)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_807A0F",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_807A0F (nomt:activity_807A0F)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_737BE7",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_737BE7 (nomt:activity_737BE7)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_F9BB92",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_F9BB92 (nomt:activity_F9BB92)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_D59DA1",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_D59DA1 (nomt:activity_D59DA1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BD12D8",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BD12D8 (nomt:activity_BD12D8)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_9416B4",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_9416B4 (nomt:activity_9416B4)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_CEA053",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_CEA053 (nomt:activity_CEA053)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_2A2031",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_2A2031 (nomt:activity_2A2031)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_610FD3",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_610FD3 (nomt:activity_610FD3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_EAC98D",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_EAC98D (nomt:activity_EAC98D)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_B6D026",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_B6D026 (nomt:activity_B6D026)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_644D77",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_644D77 (nomt:activity_644D77)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_BE91AE",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_BE91AE (nomt:activity_BE91AE)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/maritimethesaurus/activity_3A4334",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_3A4334 (nomt:activity_3A4334)",
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
              "http://www.w3.org/2004/02/skos/core#Concept": 1
            }
          }
        },
        "instancecount": 4
      }
    ]
  }
}