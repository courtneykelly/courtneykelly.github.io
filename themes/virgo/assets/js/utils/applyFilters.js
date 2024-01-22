import $ from '../libs/jquery.min';
import hideGeneratedLists from './hideGeneratedLists';

export default function applyFilters() {
    // City filters
    // let cityfilters = [];
    // for (let cityfilter in getCityFilterParams()) {
    //     if (getLocalStorageOf(cityfilter) == 'true') {
    //         cityfilters.push(cityfilter);
    //     }
    // }

    // Neighborhood filters
    let neighborhoodfilters = [];
    let neighborhoodFilterParams = getNeighborhoodFilterParams();
    for (let neighborhoodfilter in neighborhoodFilterParams) {
        if (getLocalStorageOf(neighborhoodfilter) == 'true') {
            setLocalStorageOf("activeNeighborhood", neighborhoodfilter);
            let neighborhoodFilterArray = neighborhoodfilter.split(" ");
            neighborhoodfilters = neighborhoodfilters.concat(neighborhoodFilterArray);
        }
    }

    let occasionfilters = [];
    for (let occasionfilter in getOccasionFilterParams()) {
        if (getLocalStorageOf(occasionfilter) == 'true') {
            setLocalStorageOf("activeOccasion", occasionfilter);
            let occasionFilterArray = occasionfilter.split(" ");
            occasionfilters = occasionfilters.concat(occasionFilterArray);
        }
    }

    let vibefilters = [];
    for (let vibefilter in getVibeFilterParams()) {
        if (getLocalStorageOf(vibefilter) == 'true') {
            setLocalStorageOf("activeVibe", vibefilter);
            let vibeFilterArray = vibefilter.split(" ");
            vibefilters = vibefilters.concat(vibeFilterArray);
        }
    }

    // Generate div key and display hidden list.
    let neighborhoodKey = "";
    if (neighborhoodfilters.length == 0) {
        setLocalStorageOf("activeNeighborhood", "NoNeighborhood");
        neighborhoodKey = "NoNeighborhood";
    } else {
        neighborhoodKey = neighborhoodfilters.sort().join("-");
    }

    let occasionKey = "";
    if (occasionfilters.length == 0) {
        setLocalStorageOf("activeOccasion", "NoOccasion");
        occasionKey = "NoOccasion";
    } else {
        occasionKey = occasionfilters.sort().join("-");
    }

    let vibeKey = "";
    if (vibefilters.length == 0) {
        setLocalStorageOf("activeVibe", "NoVibe");
        vibeKey = "NoVibe";
    } else {
        vibeKey = vibefilters.sort().join("-");
    }

    let activeList = getLocalStorageOf("activeList");
    console.log("Hiding active list: ", activeList);
    $(activeList).hide();

    let divKey = "#" + neighborhoodKey + "-" + occasionKey + "-" + vibeKey;
    console.log("Displaying hidden list: ", divKey);
    setLocalStorageOf("activeList", divKey);
    $(divKey).show();                
}

function getLocalStorageOf(varName) {
    return localStorage.getItem(varName);
}

function setLocalStorageOf(varName, varValue) {
    localStorage.setItem(varName, varValue);
}

// function getCityFilterParams() {
// 	let _filters = $('#city-vars');
// 	return JSON.parse(_filters.text())
// }

function getNeighborhoodFilterParams() {
	let _filters = $('#neighborhood-vars');
	return JSON.parse(_filters.text())
}

function getOccasionFilterParams() {
	let _filters = $('#occasion-vars');
	return JSON.parse(_filters.text())
}

function getVibeFilterParams() {
	let _filters = $('#vibe-vars');
	return JSON.parse(_filters.text())
}