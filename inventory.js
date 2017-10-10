const HomeInventoryDatabase = JSON.parse(localStorage.getItem("homeInventory"));
const inventoryEl = document.getElementsByClassName("inventory")[0];


// Loop over keys in the database
for (let key in HomeInventoryDatabase) {
    // Get a reference to the array of objects
    const currentType = HomeInventoryDatabase[key];
    
    // Loop over the array of objects
    for (var i = 0; i < currentType.length; i++) {
        // Current item in the array
        var item = currentType[i];


        // Build a string to insert into the DOM
        inventoryEl.innerHTML += `
        <section class="${item.type}">
            <h2 class="${item.type}_name">${item.name}</h2>
            <div class="${item.type}_location">Location: ${item.location}</div>
            <div class="${item.type}_description">${item.description}</div>
        </section>
        `
    }
}
