import $ from '../libs/jquery.min';
import toggleEastVillageButton from 'js/tags/neighborhoods/toggleEastVillage';
import toggleChelseaButton from 'js/tags/neighborhoods/toggleChelsea';
import toggleLowerEastSideButton from 'js/tags/neighborhoods/toggleLowerEastSide';
import toggleNewYorkCityButton from 'js/tags/cities/toggleNewYorkCity';
import toggleDateNightButton from 'js/tags/occasions/toggleDateNight';
import toggleTrendyButton from 'js/tags/vibes/toggleTrendy';
import toggleGreenpointButton from 'js/tags/neighborhoods/toggleGreenpoint';
import toggleWestVillagButton from 'js/tags/neighborhoods/toggleWestVillage';
import toggleNohoButton from 'js/tags/neighborhoods/toggleNoho';
import toggleNolitaButton from 'js/tags/neighborhoods/toggleNolita';
import toggleHellsKitchenButton from 'js/tags/neighborhoods/toggleHellsKitchen';
import toggleKoreatownButton from 'js/tags/neighborhoods/toggleKoreatown';
import toggleMidtownButton from 'js/tags/neighborhoods/toggleMidtown';
import toggleSohoButton from 'js/tags/neighborhoods/toggleSoho';
import toggleSouthBrooklynButton from 'js/tags/neighborhoods/toggleSouthBrooklyn';
import toggleTribecaButton from 'js/tags/neighborhoods/toggleTribeca';
import toggleUnionSquareButton from 'js/tags/neighborhoods/toggleUnionSquare';
import toggleUpperEastSideButton from 'js/tags/neighborhoods/toggleUpperEastSide';
import toggleUpperWestSideButton from 'js/tags/neighborhoods/toggleUpperWestSide';
import toggleWilliamsburgButton from 'js/tags/neighborhoods/toggleWilliamsburg';
import toggleBakeryButton from 'js/tags/occasions/toggleBakery';
import toggleBarSeatingButton from 'js/tags/occasions/toggleBarSeating';
import toggleBigGroupButton from 'js/tags/occasions/toggleBigGroup';
import toggleBirthdayDinnerButton from 'js/tags/occasions/toggleBirthdayDinner';
import toggleBrunchButton from 'js/tags/occasions/toggleBrunch';
import toggleCocktailBarButton from 'js/tags/occasions/toggleCocktailBar';
import toggleDayDrinkButton from 'js/tags/occasions/toggleDayDrink';
import toggleDessertButton from 'js/tags/occasions/toggleDessert';
import toggleFastCasualButton from 'js/tags/occasions/toggleFastCasual';
import toggleImpressVisitorsButton from 'js/tags/occasions/toggleImpressVisitors';
import toggleOmakaseButton from 'js/tags/occasions/toggleOmakase';
import toggleOystersButton from 'js/tags/occasions/toggleOysters';
import toggleParentsInTownButton from 'js/tags/occasions/toggleParentsInTown';
import toggleSmallGroupButton from 'js/tags/occasions/toggleSmallGroup';
import toggleSpecialOccasionButton from 'js/tags/occasions/toggleSpecialOccasion';
import toggleTastingMenuButton from 'js/tags/occasions/toggleTastingMenu';
import toggleWalkInButton from 'js/tags/occasions/toggleWalkIn';
import toggleWineBarButton from 'js/tags/occasions/toggleWineBar';
import toggleWorkDinnerButton from 'js/tags/occasions/toggleWorkDinner';
import toggleUnassumingButton from 'js/tags/vibes/toggleUnassuming';
import toggleCleanModernButton from 'js/tags/vibes/toggleCleanModern';
import toggleEuropeanButton from 'js/tags/vibes/toggleEuropean';
import toggleTropicalButton from 'js/tags/vibes/toggleTropical';
import toggleApresSkiButton from 'js/tags/vibes/toggleApresSki';
import toggleRooftopSauceButton from 'js/tags/vibes/toggleRooftopSauce';
import togglePatioActionButton from 'js/tags/vibes/togglePatioAction';
import toggleRomanceButton from 'js/tags/vibes/toggleRomance';
import toggleOpenAiryButton from 'js/tags/vibes/toggleOpenAiry';
import toggleWarmCozyButton from 'js/tags/vibes/toggleWarmCozy';
import toggleDinerButton from 'js/tags/vibes/toggleDiner';
import toggleDjCookingButton from 'js/tags/vibes/toggleDjCooking';
import toggleCloseQuartersButton from 'js/tags/vibes/toggleCloseQuarters';
import toggleQuickTableTurnoverButton from 'js/tags/vibes/toggleQuickTableTurnover';
import toggleFriendlyStaffButton from 'js/tags/vibes/toggleFriendlyStaff';
import toggleLowKeyButton from 'js/tags/vibes/toggleLowKey';
import toggleHighEnergyButton from 'js/tags/vibes/toggleHighEnergy';
import toggleRainyDayButton from 'js/tags/vibes/toggleRainyDay';
import toggleUglyDelicousButton from 'js/tags/vibes/toggleUglyDelicious';
import toggleFunDifferentButton from 'js/tags/vibes/toggleFunDifferent';
import toggleFamilyStyleButton from 'js/tags/vibes/toggleFamilyStyle';
import togglePhoneEatsFirstButton from 'js/tags/vibes/togglePhoneEatsFirst';
import toggleTriedTrueButton from 'js/tags/vibes/toggleTriedTrue';
import toggleCheapCheerfulButton from 'js/tags/vibes/toggleCheapCheerful';
import toggleDropDimesButton from 'js/tags/vibes/toggleDropDimes';
import togglePretentiousButton from 'js/tags/vibes/togglePretentious';
import toggleBoujeeButton from 'js/tags/vibes/toggleBoujee';
import toggleInstitutionButton from 'js/tags/vibes/toggleInstitution';
import toggleDiveyButton from 'js/tags/vibes/toggleDivey';
import parseFilterParams from 'js/utils/parseFilterParams';
import toggleManhattanDistrict1 from 'js/tags/neighborhoods/toggleManhattanDistrict1';
import toggleManhattanDistrict2 from 'js/tags/neighborhoods/toggleManhattanDistrict2';
import toggleManhattanDistrict3 from 'js/tags/neighborhoods/toggleManhattanDistrict3';
import toggleManhattanDistrict4 from 'js/tags/neighborhoods/toggleManhattanDistrict4';
import toggleManhattanDistrict5 from 'js/tags/neighborhoods/toggleManhattanDistrict5';
import toggleManhattanDistrict7 from 'js/tags/neighborhoods/toggleManhattanDistrict7';
import toggleManhattanDistrict8 from 'js/tags/neighborhoods/toggleManhattanDistrict8';
import toggleBrooklynDistrict2 from 'js/tags/neighborhoods/toggleBrooklynDistrict2';
import toggleBrooklynDistrict6 from 'js/tags/neighborhoods/toggleBrooklynDistrict6';
import togglePeopleWatchingButton from 'js/tags/occasions/togglePeopleWatching';
import togglePizzaButton from 'js/tags/occasions/togglePizza';


export default function initTagBinding() {
    toggleNewYorkCityButton;

    // neighborhoods
    $('#manhattan-district1-btn').click(toggleManhattanDistrict1);
    $('#manhattan-district2-btn').click(toggleManhattanDistrict2);
    $('#manhattan-district3-btn').click(toggleManhattanDistrict3);
    $('#manhattan-district4-btn').click(toggleManhattanDistrict4);
    $('#manhattan-district5-btn').click(toggleManhattanDistrict5);
    $('#manhattan-district7-btn').click(toggleManhattanDistrict7);
    $('#manhattan-district8-btn').click(toggleManhattanDistrict8);
    $('#brooklyn-district2-btn').click(toggleBrooklynDistrict2);
    $('#brooklyn-district6-btn').click(toggleBrooklynDistrict6);

    $('#east-village-btn').click(toggleEastVillageButton);
    $('#chelsea-btn').click(toggleChelseaButton);
    $('#lower-east-side-btn').click(toggleLowerEastSideButton);
    $('#greenpoint-btn').click(toggleGreenpointButton);
    $('#west-village-btn').click(toggleWestVillagButton);
    $('#noho-btn').click(toggleNohoButton);
    $('#nolita-btn').click(toggleNolitaButton);
    $('#hells-kitchen-btn').click(toggleHellsKitchenButton);
    $('#koreatown-btn').click(toggleKoreatownButton);
    $('#midtown-btn').click(toggleMidtownButton);
    $('#soho-btn').click(toggleSohoButton);
    $('#south-brooklyn-btn').click(toggleSouthBrooklynButton);
    $('#tribeca-btn').click(toggleTribecaButton);
    $('#union-square-btn').click(toggleUnionSquareButton);
    $('#upper-east-side-btn').click(toggleUpperEastSideButton);
    $('#upper-west-side-btn').click(toggleUpperWestSideButton);
    $('#williamsburg-btn').click(toggleWilliamsburgButton);

    // occasions
    $('#bakery-btn').click(toggleBakeryButton);
    $('#bar-seating-btn').click(toggleBarSeatingButton);
    $('#big-group-btn').click(toggleBigGroupButton);
    $('#birthday-dinner-btn').click(toggleBirthdayDinnerButton);
    $('#brunch-btn').click(toggleBrunchButton);
    $('#cocktail-bar-btn').click(toggleCocktailBarButton);
    $('#date-night-btn').click(toggleDateNightButton);
    $('#day-drink-btn').click(toggleDayDrinkButton);
    $('#dessert-btn').click(toggleDessertButton);
    $('#fast-casual-btn').click(toggleFastCasualButton);
    $('#impress-visitors-btn').click(toggleImpressVisitorsButton);
    $('#omakase-btn').click(toggleOmakaseButton);
    $('#oysters-btn').click(toggleOystersButton);
    $('#parents-in-town-btn').click(toggleParentsInTownButton);
    $('#small-group-btn').click(toggleSmallGroupButton);
    $('#special-occasion-btn').click(toggleSpecialOccasionButton);
    $('#tasting-menu-btn').click(toggleTastingMenuButton);
    $('#walk-in-btn').click(toggleWalkInButton);
    $('#wine-bar-btn').click(toggleWineBarButton);
    $('#work-dinner-btn').click(toggleWorkDinnerButton);

    // vibes
    $('#trendy-btn').click(toggleTrendyButton);
    $('#unassuming-btn').click(toggleUnassumingButton);
    $('#divey-btn').click(toggleDiveyButton);
    $('#institution-btn').click(toggleInstitutionButton);
    $('#boujee-btn').click(toggleBoujeeButton);
    $('#pretentious-btn').click(togglePretentiousButton);
    $('#drop-dimes-btn').click(toggleDropDimesButton);
    $('#cheap-cheerful-btn').click(toggleCheapCheerfulButton);
    $('#tried-true-btn').click(toggleTriedTrueButton);
    $('#phone-eats-first-btn').click(togglePhoneEatsFirstButton);
    $('#family-style-btn').click(toggleFamilyStyleButton);
    $('#fun-different-btn').click(toggleFunDifferentButton);
    $('#ugly-delicious-btn').click(toggleUglyDelicousButton);
    $('#rainy-day-btn').click(toggleRainyDayButton);
    $('#high-energy-btn').click(toggleHighEnergyButton);
    $('#low-key-btn').click(toggleLowKeyButton);
    $('#friendly-staff-btn').click(toggleFriendlyStaffButton);
    $('#quick-table-turnover-btn').click(toggleQuickTableTurnoverButton);
    $('#close-quarters-btn').click(toggleCloseQuartersButton);
    $('#dj-cooking-btn').click(toggleDjCookingButton);
    $('#diner-btn').click(toggleDinerButton);
    $('#warm-cozy-btn').click(toggleWarmCozyButton);
    $('#open-airy-btn').click(toggleOpenAiryButton);
    $('#romance-btn').click(toggleRomanceButton);
    $('#patio-action-btn').click(togglePatioActionButton);
    $('#rooftop-sauce-btn').click(toggleRooftopSauceButton);
    $('#apres-ski-btn').click(toggleApresSkiButton);
    $('#tropical-btn').click(toggleTropicalButton);
    $('#european-btn').click(toggleEuropeanButton);
    $('#clean-modern-btn').click(toggleCleanModernButton);
    $('#people-watching-btn').click(togglePeopleWatchingButton);
    $('#pizza-btn').click(togglePizzaButton);
    
}