// Global list of items
const items = [
    {
        id: 1,
        name: "Rare Pokémon Card",
        category: "Pokémon",
        rarity: "rare",
        basePrice: 100,
        owner: "player",   // Possible values: "player", "npc", "pawn"
        location: "school", // Possible values: "school", "garage", "playground", etc.
        availableForTrade: true,
        inPawn: false,
        eventMultiplier: 1.0,
        itemSummary: "A rare Pokémon card."
    },
    {
        id: 2,
        name: "Charizard - Holo - 1st Ed.",
        category: "Pokémon",
        rarity: "rare",
        basePrice: 100,
        owner: "player",   // Possible values: "player", "npc", "pawn"
        location: "school", // Possible values: "school", "garage", "playground", etc.
        availableForTrade: true,
        inPawn: false,
        eventMultiplier: 1.0,
        itemSummary: "THE Pokémon card."
    },
    {
        id: 3,
        name: "Common Tech Deck",
        category: "Tech Deck",
        rarity: "common",
        basePrice: 20,
        owner: "npc",      // This is owned by an NPC
        location: "playground",
        availableForTrade: true,
        inPawn: false,
        eventMultiplier: 1.0,
        itemSummary: "A Tech Deck."
    },
    {
        id: 4,
        name: "Common Tech Deck",
        category: "Tech Deck",
        rarity: "common",
        basePrice: 20,
        owner: "npc",      // This is owned by an NPC
        location: "playground",
        availableForTrade: true,
        inPawn: false,
        eventMultiplier: 1.0,
        itemSummary: "A Tech Deck."
    }
];

// Function to trade an item between two owners
function tradeItem(itemId, newOwner) {
    const item = items.find(i => i.id === itemId);
    if (item && item.availableForTrade) {
        item.owner = newOwner;
        console.log(`${item.name} is now owned by ${newOwner}`);
    } else {
        console.log("Item is not available for trade.");
    }
}

// Function to move an item to a new location
function moveItemToLocation(itemId, newLocation) {
    const item = items.find(i => i.id === itemId);
    if (item) {
        item.location = newLocation;
        console.log(`${item.name} has been moved to ${newLocation}`);
    }
}

// Function to apply a market event multiplier to a category of items
function applyMarketEvent(category, priceMultiplier) {
    items.forEach(item => {
        if (item.category === category) {
            item.eventMultiplier = priceMultiplier;
            console.log(`${item.name} now has a price multiplier of ${priceMultiplier}`);
        }
    });
}

// Function to pawn an item (50% of its base price)
function pawnItem(itemId) {
    const item = items.find(i => i.id === itemId);
    if (item) {
        item.inPawn = true;
        item.owner = "pawn";
        item.availableForTrade = false;
        console.log(`${item.name} is now in pawn.`);
    }
}

// Function to check if an item is available for the player
function isItemAvailableForPlayer(itemId, playerLocation) {
    const item = items.find(i => i.id === itemId);
    if (item && item.availableForTrade && item.location === playerLocation) {
        return true;
    }
    return false;
}

// Function to display item summary
function displayItemInfo(itemId) {
    const item = items.find(i => i.id === itemId);
    if (item) {
        console.log(`${item.name}: ${item.itemSummary}`);
    } else {
        console.log("Item not found.");
    }
}

// Example usage
tradeItem(1, "npc");  // Trade item with ID 1 to an NPC
moveItemToLocation(2, "school");  // Move item with ID 2 to the school
applyMarketEvent("Pokémon", 1.5);  // Apply a price surge to all Pokémon cards
pawnItem(1);  // Pawn the item with ID 1
console.log(isItemAvailableForPlayer(2, "school"));  // Check if item 2 is available at school