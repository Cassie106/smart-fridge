// Copyright 2022 Lu
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const express = require('express');
const router = express.Router();
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");
const dbContext = require("../data/databaseContext");

// const newItem = {
//     id: "3",
//     category: "fun",
//     name: "Cosmos DB",
//     description: "Complete Cosmos DB Node.js Quickstart ⚡",
//     isComplete: false
//   };

router.get('/', async function (req, res, next) {
    // res.render('index', {title: 'ESN Home'});
    console.log('hello');
    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });

    const database = client.database(databaseId);
    const container = database.container(containerId);

    // Make sure Tasks database is already setup. If not, create it.
    // await dbContext.create(client, databaseId, containerId);

    try {

        // <QueryItems>
        console.log(`Querying container: warehouse`);

        // query to return all items
        const querySpec = {
            query: "SELECT * from c"
        };

        // read all items in the Items container
        const { resources: items } = await container.items
            .query(querySpec)
            .fetchAll();
        let table = [];
        items.forEach(item => {
            let newItem = {
                itemId: item.itemId,
                gasValue: item.gasValue,
                weight: item.weight,
                inTime: item.inTime,
                isFresh: item.isFresh,
                allergy: item.allergy,
                position: item.position
            }
            table.push(newItem)
        });
        // </QueryItems>
        res.status(200).send({
            data: table
        });

    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
});

// router.post('/', function (req, res, next) {
//     // res.render('index', {title: 'ESN Home'});
//     console.log('hello');
//     res.status(200).send(msgArr);
// });




// async function main() {
//   console.log("hello"); 
//   const { endpoint, key, databaseId, containerId } = config;

//   const client = new CosmosClient({ endpoint, key });

//   const database = client.database(databaseId);
//   const container = database.container(containerId);

//   // Make sure Tasks database is already setup. If not, create it.
//   await dbContext.create(client, databaseId, containerId);

//   try {
//     // <QueryItems>
//     console.log(`Querying container: Items`);

//     // query to return all items
//     const querySpec = {
//       query: "SELECT * from c"
//     };
    
//     // read all items in the Items container
//     const { resources: items } = await container.items
//       .query(querySpec)
//       .fetchAll();

//     items.forEach(item => {
//       console.log(`${item.id} - ${item.description}`);
//     });
//     // </QueryItems>
    
//     // <CreateItem>
//     /** Create new item
//      * newItem is defined at the top of this file
//      */
//     const { resource: createdItem } = await container.items.create(newItem);
    
//     console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`);
//     // </CreateItem>
    
//     // <UpdateItem>
//     /** Update item
//      * Pull the id and partition key value from the newly created item.
//      * Update the isComplete field to true.
//      */
//     const { id, category } = createdItem;

//     createdItem.isComplete = true;

//     const { resource: updatedItem } = await container
//       .item(id, category)
//       .replace(createdItem);

//     console.log(`Updated item: ${updatedItem.id} - ${updatedItem.description}`); 
//     console.log(`Updated isComplete to ${updatedItem.isComplete}\r\n`);
//     // </UpdateItem>
    
//     // <DeleteItem>    
//     /**
//      * Delete item
//      * Pass the id and partition key value to delete the item
//      */
//     const { resource: result } = await container.item(id, category).delete();
//     console.log(`Deleted item with id: ${id}`);
//     // </DeleteItem>  
    
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// main();
module.exports = router;