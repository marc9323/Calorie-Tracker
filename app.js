// Storage Controller

// Item Controller
// const ItemCtrl = (function() {
//     // Item Constructor
//     const Item = function(id, name, calories) {
//         this.id = id;
//         this.name = name;
//         this.calories = calories;
//     };

//     // Data Structure / State
//     const data = {
//         items: [
//             { id: 0, name: 'Steak Dinner', calories: 1200 },
//             { id: 1, name: 'Cookie', calories: 400 },
//             { id: 2, name: 'Eggs', calories: 300 }
//         ],
//         currentItem: null,
//         totalCalories: 0
//     };

//     // Public methods
//     return {
//         getItems: function() {
//             return data.items;
//         },

//         addItem: function(name, calories) {
//             let ID;
//             // create id
//             if (data.items.length > 0) {
//                 // get the last items id and add one
//                 ID = data.items[data.items.length - 1].id + 1;
//             } else {
//                 ID = 0;
//             }

//             // calories to number
//             calories = parseInt(calories);

//             // create a new item
//             newItem = new Item(ID, name, calories);

//             // push to data structure / add to items array
//             console.log('push hit');
//             data.push(newItem);

//             return newItem;
//         },

//         logData: function() {
//             return data;
//         }
//     };
// })();

// // UI Controller
// const UICtrl = (function() {
//     const UISelectors = {
//         itemList: '#item-list',
//         addBtn: '.add-btn',
//         itemNameInput: '#item-name',
//         itemCaloriesInput: '#item-calories'
//     };

//     // Public methods
//     return {
//         populateItemList: function(items) {
//             let html = '';

//             items.forEach(function(item) {
//                 html += `<li class="collection-item" id="item-${item.id}">
//           <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
//           <a href="#" class="secondary-content">
//             <i class="edit-item fa fa-pencil"></i>
//           </a>
//         </li>`;
//             });

//             // Insert list items
//             document.querySelector(UISelectors.itemList).innerHTML = html;
//         },

//         getSelectors: function() {
//             return UISelectors;
//         },

//         getItemInput: function() {
//             console.log('get item input');
//             return {
//                 name: document.querySelector(UISelectors.itemNameInput).value,
//                 calories: document.querySelector(UISelectors.itemCaloriesInput)
//                     .value
//             };
//         }
//     };
// })();

// // App Controller
// const App = (function(ItemCtrl, UICtrl) {
//     // load event listeners
//     const loadEventListeners = function() {
//         console.log('load event listeners');
//         // Get UISelectors
//         const UISelectors = UICtrl.getSelectors();

//         // add item event
//         document
//             .querySelector(UISelectors.addBtn)
//             .addEventListener('click', itemAddSubmit);
//     };

//     // Item Add Submit
//     const itemAddSubmit = function(e) {
//         console.log('item add submit');
//         // Get form input from UICtrl
//         const input = UICtrl.getItemInput();

//         // check for name and calorie input
//         if (input.name !== '' && input.calories !== '') {
//             // add item
//             console.log('calling addItem');
//             const newItem = ItemCtrl.addItem(input.name, input.calories);
//             console.log(input.name, input.calories);
//         }

//         e.preventDefault();
//     };

//     // query selectors
//     const UISelectors = {
//         itemList: '#item-list'
//     };
//     // Public methods
//     return {
//         init: function() {
//             console.log('Init app...');

//             // fetch items from data structure in ItemCtrl
//             const items = ItemCtrl.getItems();

//             //populate list with items
//             UICtrl.populateItemList(items);

//             // load event listeners
//             loadEventListeners();
//         }
//     };
// })(ItemCtrl, UICtrl);

// // Init app
// App.init();

// Storage Controller

// Item Controller
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // Data Structure / State
    const data = {
        items: [
            // { id: 0, name: 'Steak Dinner', calories: 1200 },
            // { id: 1, name: 'Cookie', calories: 400 },
            // { id: 2, name: 'Eggs', calories: 300 }
        ],
        currentItem: null,
        totalCalories: 0
    };

    // Public methods
    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
            let ID;
            // Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            newItem = new Item(ID, name, calories);

            // Add to items array
            data.items.push(newItem);

            return newItem;
        },
        logData: function() {
            return data;
        }
    };
})();

// UI Controller
const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
    };

    // Public methods
    return {
        populateItemList: function(items) {
            let html = '';

            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput)
                    .value
            };
        },
        addListItem: function(item) {
            // show the list
            document.querySelector(UISelectors.itemList).style.display =
                'block';
            // create li element
            const li = document.createElement('li');
            // add class
            li.className = 'collection-item';
            // add id
            li.id = `item-${item.id}`;
            // add html
            li.innerHTML = `
           <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
           <a href="#" class="secondary-content">
             <i class="edit-item fa fa-pencil"></i>
           </a>
           `;
            // insert item
            document
                .querySelector(UISelectors.itemList)
                .insertAdjacentElement('beforeend', li);
        },
        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        getSelectors: function() {
            return UISelectors;
        }
    };
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function() {
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document
            .querySelector(UISelectors.addBtn)
            .addEventListener('click', itemAddSubmit);
    };

    // Add item submit
    const itemAddSubmit = function(e) {
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();

        // Check for name and calorie input
        if (input.name !== '' && input.calories !== '') {
            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // add item to UI list
            UICtrl.addListItem(newItem);

            // get total calories

            // clear fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    };

    // Public methods
    return {
        init: function() {
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // check if any items
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }
            // Load event listeners
            loadEventListeners();
        }
    };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
