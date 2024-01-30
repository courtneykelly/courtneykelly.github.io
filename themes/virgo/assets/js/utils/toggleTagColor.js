import $ from '../libs/jquery.min';
import applyFilters from 'js/utils/applyFilters';

export default function toggleTagColor(tagName, divElement) {
    if (getLocalStorageOf(tagName) === 'false') {
        setButtonToActive(tagName, divElement);
    } else {
        setButtonToInactive(tagName, divElement);
    }
    applyFilters();
}

function setButtonToActive(tagName, divElement) {
    console.log("setting: " + tagName + " to true.")
    $(divElement).css({
        color: "#ffffff",
        backgroundColor: "#f45c1c"});
    setLocalStorageOf(tagName, 'true');
}

function setButtonToInactive(tagName, divElement) {
    console.log("setting: " + tagName + " to false.")
    $(divElement).css({
        color: "#f45c1c",
        backgroundColor: "#ffffff"});
    setLocalStorageOf(tagName, 'false');

}

function getLocalStorageOf(varName) {
    return localStorage.getItem(varName);
}

function setLocalStorageOf(varName, varValue) {
    localStorage.setItem(varName, varValue);
}