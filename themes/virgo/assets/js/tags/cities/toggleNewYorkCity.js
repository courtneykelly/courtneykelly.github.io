import toggleTagColor from '../../utils/toggleTagColor';

export default function toggleNewYorkCityButton() {
    $('#new-york-city-btn.tag').css({
        color: "#ffffff",
        backgroundColor: "#f45c1c"});
    localStorage.setItem('new york city', 'true');
}