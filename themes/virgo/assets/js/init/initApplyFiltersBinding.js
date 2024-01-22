import $ from '../libs/jquery.min';
import parseFilterParams from 'js/utils/parseFilterParams';
import hideGeneratedLists from 'js/utils/hideGeneratedLists';
import applyFilters from 'js/utils/applyFilters';
import toggleTag from 'js/utils/toggleTags';
import getTagDivKeysMap from 'js/utils/getTagDivKeysMap';

export default function initApplyFiltersBinding() {
    hideGeneratedLists();
    console.log("init apply filters.");
    displayActiveList();
    $('#apply-filters-btn').click(applyFilters);
}

divKeysMap = getTagDivKeysMap();
function displayActiveList() {
    let activeNeighborhood = getLocalStorageOf("activeNeighborhood");
    let activeOccasion = getLocalStorageOf("activeOccasion");
    let activeVibe = getLocalStorageOf("activeVibe");
    let divKey = getLocalStorageOf("activeList");

    console.log("active neighborhood: ", activeNeighborhood);
    console.log("active occasion: ", activeOccasion);
    console.log("active vibe: ", activeVibe);
    console.log("active list: ", divKey);

    toggleTag(activeNeighborhood, divKeysMap.get(activeNeighborhood));
    toggleTag(activeOccasion, divKeysMap.get(activeOccasion));
    toggleTag(activeVibe, divKeysMap.get(activeVibe));
    $(divKey).show();
}

function getLocalStorageOf(varName) {
    return localStorage.getItem(varName);
}