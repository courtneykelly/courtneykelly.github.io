import $ from '../libs/jquery.min';

export default function parseFilterParams() {
	initializeLocalStorage($('#city-vars'));
	initializeLocalStorage($('#neighborhood-vars'));
	initializeLocalStorage($('#occasion-vars'));
	initializeLocalStorage($('#vibe-vars'));

	// console.log(_filters.text());
	// return JSON.parse(_filters.text());
}

function initializeLocalStorage(filterVars) {
	console.log(filterVars.text());
	for (let filterName in JSON.parse(filterVars.text())) {
        setLocalStorageOf(filterName, 'false');
    }
}

function getLocalStorageOf(varName) {
    return localStorage.getItem(varName);
}

function setLocalStorageOf(varName, varValue) {
    localStorage.setItem(varName, varValue);
}