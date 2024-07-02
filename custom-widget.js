document.addEventListener("DOMContentLoaded", function () {
  const filterHouseButton = document.getElementById("filter-house");
  const filterApartmentButton = document.getElementById("filter-apartment");
  const filterAllButton = document.getElementById("filter-all");
  const widget = document.getElementById("pw-listing-widget");

  function filterListings(buildingType) {
    const listings = widget.querySelectorAll(".listing-item");
    listings.forEach((listing) => {
      if (
        buildingType === "all" ||
        listing.dataset.buildingType === buildingType
      ) {
        listing.style.display = "block";
      } else {
        listing.style.display = "none";
      }
    });
  }

  filterHouseButton.addEventListener("click", () => filterListings("house"));
  filterApartmentButton.addEventListener("click", () =>
    filterListings("apartment")
  );
  filterAllButton.addEventListener("click", () => filterListings("all"));
});
