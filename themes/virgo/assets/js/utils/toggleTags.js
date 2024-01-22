import $ from '../libs/jquery.min';
import getTagDivKeysMap from './getTagDivKeysMap';
import toggleTagColor from './toggleTagColor';

divKeysMap = getTagDivKeysMap();

export default function toggleTag(tagName, divElement) {
    if (getLocalStorageOf(tagName) == 'true') {
        toggleTagColor(tagName, divElement);
    } else if (isAtFilterCapacity(tagName)) {
        clearTagTypeGroup(tagName, divElement);
        toggleTagColor(tagName, divElement);
    } else {
        toggleTagColor(tagName, divElement);
    }
}

function isAtFilterCapacity(tagName) {
    if (isNeighborhoodTag(tagName)) return isAtNeighborhoodFilterCapacity();
    if (isOccasionTag(tagName)) return isAtOccasionFilterCapacity();
    if (isVibeTag(tagName)) return isAtVibeFilterCapacity();
}

function clearTagTypeGroup(tagName, divElement) {
    if (isNeighborhoodTag(tagName)) clearNeighborhoodTags();
    if (isOccasionTag(tagName)) clearOccasionTags();
    if (isVibeTag(tagName)) clearVibeTags();
}

// Determine tag type.
function isNeighborhoodTag(tagName) {
    let neighborhoodFilterParams = getNeighborhoodFilterParams();
    if (neighborhoodFilterParams.hasOwnProperty(tagName)) {
        return true;
    }
    return false;
}
function isOccasionTag(tagName) {
    let occasionFilterParams = getOccasionFilterParams();
    if (occasionFilterParams.hasOwnProperty(tagName)) {
        return true;
    }
    return false;
}
function isVibeTag(tagName) {
    let vibeFilterParams = getVibeFilterParams();
    if (vibeFilterParams.hasOwnProperty(tagName)) {
        return true;
    }
    return false;
}

// Clear tag type groups.
function clearNeighborhoodTags() {
    let neighborhoodFilterParams = getNeighborhoodFilterParams();
    for (let neighborhoodfilter in neighborhoodFilterParams) {
        if (getLocalStorageOf(neighborhoodfilter) == 'true') {
            toggleTagColor(neighborhoodfilter, divKeysMap.get(neighborhoodfilter));
        }
    }    
}
function clearOccasionTags() {
    let occasionFilterParams = getOccasionFilterParams();
    for (let occasionFilter in occasionFilterParams) {
        if (getLocalStorageOf(occasionFilter) == 'true') {
            toggleTagColor(occasionFilter, divKeysMap.get(occasionFilter));
        }
    }
}
function clearVibeTags() {
    let vibeFilterParams = getVibeFilterParams();
    for (let vibeFilter in vibeFilterParams) {
        if (getLocalStorageOf(vibeFilter) == 'true') {
            toggleTagColor(vibeFilter, divKeysMap.get(vibeFilter));
        }
    }
}

// Check if filters are at max selection capacity (1)
let MAX_CAPACITY = 1;
function isAtNeighborhoodFilterCapacity() {
    let numActiveNeighborhoodFilters = 0;
    let neighborhoodFilterParams = getNeighborhoodFilterParams();
    for (let neighborhoodfilter in neighborhoodFilterParams) {
        if (getLocalStorageOf(neighborhoodfilter) == 'true') {
            numActiveNeighborhoodFilters += 1;
        }
    }

    if (numActiveNeighborhoodFilters < MAX_CAPACITY) {
        return false;
    }
    return true;
}
function isAtOccasionFilterCapacity() {
    let numActiveOccasionFilters = 0;
    let occasionFilterParams = getOccasionFilterParams();
    for (let occasionFilter in occasionFilterParams) {
        if (getLocalStorageOf(occasionFilter) == 'true') {
            numActiveOccasionFilters += 1;
        }
    }

    if (numActiveOccasionFilters < MAX_CAPACITY) {
        return false;
    }
    return true;
}
function isAtVibeFilterCapacity() {
    let numActiveVibeFilters = 0;
    let vibeFilterParams = getVibeFilterParams();
    for (let vibeFilter in vibeFilterParams) {
        if (getLocalStorageOf(vibeFilter) == 'true') {
            numActiveVibeFilters += 1;
        }
    }

    if (numActiveVibeFilters < MAX_CAPACITY) {
        return false;
    }
    return true;
}

// Get Filter Parameter Lists
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

// Modify Local Storage
function getLocalStorageOf(varName) {
    return localStorage.getItem(varName);
}
function setLocalStorageOf(varName, varValue) {
    localStorage.setItem(varName, varValue);
}