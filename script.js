/* <--- Typewriter Effect ---> */

// loop through each item (string) in the array
// for each index in the loop, split, append to the DOM one item at a time over set interval

const terminalOutputs = [
	{ idx: 0, text: "welcome" },
	{ idx: 0, text: "my name is teri london" },
	{ idx: 0, text: "i am a software engineer," },
	{ idx: 0, text: "ux|ui design dev," },
	{ idx: 0, text: "educator && consultant." },
	{ idx: 0, text: "click to find out more..." },
];

const $terminal = $("ul li");

// terminalTyping();

let typing = true;

// typing animation
const terminalTyping = () => {
	$terminal.each(function (arrIdx) {
		let output = terminalOutputs[arrIdx];
		$(this).text(output.text.slice(0, output.idx));

		setTimeout(() => {
			if (typing) {
				if (output.idx > output.length) {
					typing = false;

					setTimeout(() => {
						terminalTyping();
					}, 20000 * output.idx);
					return;
				} else {
					output.idx++;
				}
			} else {
				if (output.idx === 0) {
					typing = true;
				}
			}
			terminalTyping();
		}, 500);
	});
};

terminalTyping();

// Link Listeners

const $aboutLink = $(".about-link");
const $aboutSection = $("#about");

const terminalLinks = (e) => {
	console.log("testy!");
	// $aboutSection.addClass(".about-open");
};

// $aboutLink.click(terminalLinks);
