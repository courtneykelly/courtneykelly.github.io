import $ from '../libs/jquery.min';

export default function hideGeneratedLists() {
    let supportedNeighborhoods = ["east village", "lower east side", "chelsea", "west village", "williamsburg", "noho", "nolita", "soho", "south brooklyn"]
    let supportedOccasions = ["date night", "Trendy" ]
    let supportedVibes = ["See And Be Seen"]

    // Generate Neighborhood Keys
    // Total Neighborhoods: 4
    let neighborhoodKeys = new Set();
    // Keys with 1 Neighborhood:
    for (let supportedNeighborhood1 of supportedNeighborhoods) {
        let neighborhoodKey1 = supportedNeighborhood1.split(" ").sort().join("-");
        neighborhoodKeys.add(neighborhoodKey1);

        // Keys with 2 Neighborhoods:
        for (let supportedNeighborhood2 of supportedNeighborhoods) {
            let neighborhoodArray2 = Array.from(new Set([supportedNeighborhood1, supportedNeighborhood2]));
            if (neighborhoodArray2.length == 2) {
                let neighborhoodKey2 = neighborhoodKey1.split("-").concat(supportedNeighborhood2.split(" "));
                neighborhoodKey2 = neighborhoodKey2.sort().join("-")
                neighborhoodKeys.add(neighborhoodKey2);

                // Keys with 3 Neighborhoods:
                for (let supportedNeighborhood3 of supportedNeighborhoods) {
                    let neighborhoodArray3 = Array.from(new Set([supportedNeighborhood1, supportedNeighborhood2, supportedNeighborhood3]));
                    if (neighborhoodArray3.length == 3) {
                        let neighborhoodKey3 = neighborhoodKey2.split("-").concat(supportedNeighborhood3.split(" "));
                        neighborhoodKey3 = neighborhoodKey3.sort().join("-");
                        neighborhoodKeys.add(neighborhoodKey3);

                        // Keys with 4 Neighborhoods:
                        for (let supportedNeighborhood4 of supportedNeighborhoods) {
                            let neighborhoodArray4 = Array.from(new Set([supportedNeighborhood1, supportedNeighborhood2, supportedNeighborhood3, supportedNeighborhood4]));
                            if (neighborhoodArray4.length == 4) {
                                let neighborhoodKey4 = neighborhoodKey3.split("-").concat(supportedNeighborhood4.split(" "));
                                neighborhoodKey4 = neighborhoodKey4.sort().join("-");
                                neighborhoodKeys.add(neighborhoodKey4);

                                // Keys with 5 Neighborhoods...
                                for (let supportedNeighborhood5 of supportedNeighborhoods) {
                                    let neighborhoodArray5 = Array.from(new Set([supportedNeighborhood1, supportedNeighborhood2, supportedNeighborhood3, supportedNeighborhood4, supportedNeighborhood5]));
                                    if (neighborhoodArray5.length == 5) {
                                        let neighborhoodKey5 = neighborhoodKey4.split("-").concat(supportedNeighborhood5.split(" "));
                                        neighborhoodKey5 = neighborhoodKey5.sort().join("-");
                                        neighborhoodKeys.add(neighborhoodKey5);

                                        // Keys with 6 Neighborhoods...
                                        
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Generate Occasion Keys
    // Total Occasions: 2
    let occasionKeys = new Set();
    // Keys with 1 Occasion:
    for (let supportedOccasion1 of supportedOccasions) {
        let occasionKey1 = supportedOccasion1.split(" ").sort().join("-");
        occasionKeys.add(occasionKey1);

        // Keys with 2 Occasions:
        for (let supportedOccasion2 of supportedOccasions) {
            let occasionArray2 = Array.from(new Set([supportedOccasion1, supportedOccasion2]));
            if (occasionArray2.length == 2) {
                let occasionKey2 = occasionKey1.split("-").concat(supportedOccasion2.split(" "));
                occasionKey2 = occasionKey2.sort().join("-");
                occasionKeys.add(occasionKey2);

                // Keys with 3 Occasions...
            }
        }
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