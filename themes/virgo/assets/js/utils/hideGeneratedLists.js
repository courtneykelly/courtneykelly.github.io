import $ from '../libs/jquery.min';

var hiddenLists;
export default function hideGeneratedLists() {
    let supportedNeighborhoods = [
        "manhattan-district1",
        "manhattan-district2",
        "manhattan-district3",
        "manhattan-district4",
        "manhattan-district5",
        "manhattan-district7",
        "manhattan-district8",
        "brooklyn-district2",
        "brooklyn-district6",
    ]
    let supportedOccasions = [
        "date night",
        "birthday dinner",
        "work dinner",
        "fast casual quick lunch",
        "coffee bakery",
        "impress visitors",
        "special occasion",
        "big group",
        "parents in town",
        "small group",
        "walk-in last minute",
        // "dessert",
        "brunch",
        "bar seating solo dining",
        "day drink patio pounders",
        "wine bar",
        "cocktail bar",
        "oysters happy hour",
        // "omakase",
        "tasting menu",
        "people watching",
        "pizza"
    ]
    let supportedVibes = [
        "trendy see and be seen",
        // "unassuming",
        "divey casual",
        "institution",
        "boujee pretend youre rich",
        // "pretentious",
        // "drop dimes",
        "cheap cheerful",
        "tried true",
        "phone eats first",
        "family style",
        "fun different",
        "ugly delicious",
        "rainy day food for the soul",
        "high energy",
        "low-key",
        "friendly staff welcoming",
        // "quick table turnover",
        // "close quarters" ,
        // "dj is cooking with gas",
        "diner",
        "warm cozy",
        // "open airy",
        "its giving romance",
        "patio action garden seating",
        // "rooftop sauce",
        "aprés ski",
        // "tropical beach club",
        "european",
        // "clean modern",
    ]

    // Generate Neighborhood Keys
    // Total Neighborhoods: 4
    let neighborhoodKeys = new Set();
    // Keys with 1 Neighborhood:
    for (let supportedNeighborhood1 of supportedNeighborhoods) {
        let neighborhoodKey1 = supportedNeighborhood1.split(" ").sort().join("-");
        neighborhoodKeys.add(neighborhoodKey1);

        // Keys with 2 Neighborhoods:
    }

    // Generate Occasion Keys
    // Total Occasions: 2
    let occasionKeys = new Set();
    // Keys with 1 Occasion:
    for (let supportedOccasion1 of supportedOccasions) {
        let occasionKey1 = supportedOccasion1.split(" ").sort().join("-");
        occasionKeys.add(occasionKey1);

        // Keys with 2 Occasions:
    }

    // Generate Vibe Keys
    // Total Vibes: 1
    let vibeKeys = new Set();
    // Keys with 1 Vibe:
    for (let supportedVibe1 of supportedVibes) {
        let vibeKey1 = supportedVibe1.split(" ").sort().join("-");
        vibeKeys.add(vibeKey1);

        // Keys with 2 Vibes...
    }

    // Add Empty Keys
    neighborhoodKeys.add("NoNeighborhood");
    occasionKeys.add("NoOccasion");
    vibeKeys.add("NoVibe");

    for (let neighborhoodKey of neighborhoodKeys) {
        for (let occasionKey of occasionKeys) {
            for (let vibeKey of vibeKeys) {
                let divKey = '#' + neighborhoodKey + "-" + occasionKey + "-" + vibeKey;
                $(divKey).hide();
            }
        }
    }
}