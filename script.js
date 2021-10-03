/* <--- Typewriter Effect ---> */

// loop through each item (string) in the array
// for each index in the loop, split, append to the DOM one item at a time over set interval

// const terminalOutputs = [
// 	{ idx: 0, text: "welcome" },
// 	{ idx: 0, text: "my name is teri london" },
// 	{ idx: 0, text: "i am a software engineer," },
// 	{ idx: 0, text: "ux|ui design dev," },
// 	{ idx: 0, text: "educator && consultant." },
// 	{ idx: 0, text: "click to find out more..." },
// ];

const $terminal = $("#terminal-list");

const intro = () => {
	const txt = $("#txt");
	// const txt1 = $("#txt1");
	// const txt2 = $("#txt2");
	// const txt3 = $("#txt3");
	// const txt4 = $("#txt4");
	// const txt5 = $("#txt5");
	// const txt6 = $("#txt6");

	introTxt(500).then(() => {
		txt.append("<p class='typewriter-text'>welcome</p>");

		introTxt(4000).then(() => {
			txt.append("<p class='typewriter-text'>my name is teri london</p>");

			introTxt(4000).then(() => {
				txt.append("<p class='typewriter-text'>i am a software engineer,</p>");

				introTxt(4000).then(() => {
					txt.append("<p class='typewriter-text'>ux|ui design dev,</p>");

					introTxt(4000).then(() => {
						txt.append(
							"<p class='typewriter-text'>educator && consultant.</p>"
						);

						introTxt(4000).then(() => {
							txt.append(
								"<p class='typewriter-text'>click to find out more...</p>"
							);
						});
					});
				});
			});
		});
	});
};

const introTxt = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

intro();
introTxt();

// typing animation
const terminalTyping = () => {
	for (const output of terminalOutputs) {
		let outputLine = output.text.slice(0, output.idx + 1);
		const $terminaLi = $(`<li class='typing-style'>${outputLine}</li>`);

		$terminal.append($terminaLi);

		const print = setInterval(() => {
			if (output.idx > output.text.length) {
				clearInterval(print);
			}
			output.idx++;
			$terminaLi.text(output.text.slice(0, output.idx + 1));
		}, 150);

		terminalTyping();

		// .text(output.text.slice(0, output.idx));

		// setTimeout(() => {
		// 	if (typing) {
		// 		if (output.idx > output.length) {
		// 			typing = false;

		// 			setTimeout(() => {
		// 				terminalTyping();
		// 			}, 20000 * output.idx);

		// 			return;
		// 		} else {
		// 			output.idx++;
		// 		}
		// 	} else {
		// 		if (output.idx === 0) {
		// 			typing = true;
		// 		}
		// 	}
		// 	terminalTyping();
		// }, 500);
	}
};

// Link Listeners

const $aboutLink = $(".about-link");
const $resumeLink = $(".resume-link");
const $portfolioLink = $(".portfolio-link");

const $aboutSection = $("#about");
const $resumeSection = $("#resume");
const $portfolioSection = $("#portfolio");
const $terminalSection = $("#terminal");
const $navLinks = $(".nav-links");

const $backNav = $(".back-nav");

// const terminalLinks = (e) => {};

/*
const toggleTerminal = (e) => {
	$terminalSection.toggleClass("terminal-close");
	$navLinks.toggleClass("nav-close");
};
*/

// Navigation Links

$aboutLink.on("click", (e) => {
	e.preventDefault();
	$aboutSection.show().toggleClass("about-open");
	$terminalSection.toggleClass("terminal-close");
	$navLinks.toggleClass("nav-close");
});

$resumeLink.on("click", (e) => {
	e.preventDefault();
	$resumeSection.show().toggleClass("resume-open");
	$terminalSection.toggleClass("terminal-close");
	$navLinks.toggleClass("nav-close");
});

$portfolioLink.on("click", (e) => {
	e.preventDefault();
	$portfolioSection.show().toggleClass("portfolio-open");
	$terminalSection.toggleClass("terminal-close");
	$navLinks.toggleClass("nav-close");
});

$backNav.on("click", (e) => {
	e.preventDefault();

	$terminalSection.toggleClass("terminal-close");
	$navLinks.toggleClass("nav-close");

	if ($aboutSection.hasClass("about-open")) {
		$aboutSection.toggleClass("about-open");
	}
	if ($resumeSection.hasClass("resume-open")) {
		$resumeSection.toggleClass("resume-open");
	}

	if ($portfolioSection.hasClass("portfolio-open")) {
		$portfolioSection.toggleClass("portfolio-open");
	}
});
