// Select all elements to animate
const elements = document.querySelectorAll(".fade-from-bottom");

// Intersection Observer options: trigger when 10% of element is visible
const options = {
	root: null, // Use viewport as root
	rootMargin: "0px", // No extra margin
	threshold: 0.7, // 10% visible triggers callback (adjust 0-1)
};

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("in-view"); // Add class to trigger CSS
			observer.unobserve(entry.target); // Stop observing once animated (performance)
		}
	});
};

const observer = new IntersectionObserver(callback, options);

// Observe each element
elements.forEach((el) => observer.observe(el));
