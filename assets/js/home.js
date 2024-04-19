const /**{NodeElement} */ $searchField = document.querySelector("[data-search-field]");

const /**{NodeElement} */ $searchBtn = document.querySelector("[data-search-btn]");

$searchBtn.addEventListener("click", function () {
   if ($searchField.value) window.location = `/recipes.html?q=${$searchField.value}` 
});

/**
 * search submit when press "Enter" key
*/

$searchField.addEventListener("keydown", e => {
    if (e.key === "Enter") $searchBtn.click();
});

/**
 * Tab panel navigation
 */
const /**NodeList */ $tabBtns = document.querySelectorAll("[data-tab-btn]");

const /**NodeList */ $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /**NodeElement */ [$lastActiveTabPanel] = $tabPanels;
let /**NodeElement */ [$lastActiveTabBtn] = $tabBtns;

addEventOnElements($tabBtns, "click", function () {
    $lastActiveTabPanel.setAttribute("hidden", "");
    $lastActiveTabBtn.setAttribute("aria-selected", false);
    $lastActiveTabBtn.setAttribute("tabindex", -1);

    const /**{NodeElement} */ $currentTabPannel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPannel.removeAttribute("hidden");
    this.setAttribute("aria-selected", true);
    this.setAttribute("tabindex", 0);

    $lastActiveTabPanel = $currentTabPannel;
    $lastActiveTabBtn = this;
});