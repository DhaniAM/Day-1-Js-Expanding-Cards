const items = document.querySelectorAll(".item");

items.forEach(item => {
	item.addEventListener("click", () => {
		if (item.classList.contains("active")) {
			removeClass();
		} else {
			removeClass();
			item.classList.add("active");
		}

		function removeClass() {
			items.forEach(item => {
				item.classList.remove("active");
			});
		}
	});
});
