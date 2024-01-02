/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5gpa4otdceb4yku",
    "created": "2024-01-02 16:40:04.032Z",
    "updated": "2024-01-02 16:40:04.032Z",
    "name": "entries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x19csmpu",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5gpa4otdceb4yku");

  return dao.deleteCollection(collection);
})
