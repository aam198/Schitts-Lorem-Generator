const root = document.querySelector("html");
const body = document.querySelector("body");
const form = document.querySelector(".lorem-form");
const numofPara = document.getElementById("numofPara");
const result = document.querySelector(".lorem-text");
const themeDisplay = document.getElementById("theme-display");
const themeContainer = document.querySelector(".theme-container");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-select");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "dark") {
    document.getElementById("theme-style").href = "styles/main.css";
    document.getElementById("logo-schitt").src =
      "assets/Schitt's_Creek_logo_dk.png";
      if (themeContainer.classList.contains("visible")) {
        hideThemeContainer();
      } 
  }

  if (mode == "light") {
    
    document.getElementById("theme-style").href = "styles/light.css";
    document.getElementById("logo-schitt").src =
      "assets/Schitt's_Creek_logo_lt.png";
      if (themeContainer.classList.contains("visible")) {
        hideThemeContainer();
      } 
  }

  if (mode == "neon") {
    document.getElementById("theme-style").href = "styles/neon.css";
    if (themeContainer.classList.contains("visible")) {
      hideThemeContainer();
    } 
  }
  
  localStorage.setItem("theme", mode);
}



function syncParaNumbers(e) {
  const value = e.target.value;
  numofPara.value = value;
}

const setActiveSelector = (className) => {
  var selectedTheme = document.getElementById(`${className}-mode`);
  [...themeSelectors].forEach((item) => {
    item.classList.remove("active");
  });
  selectedTheme.classList.add("active");
  hideThemeContainer();
};

const showThemeContainer = () => {
  themeContainer.classList.add("visible");
};

const hideThemeContainer = () => {
  themeContainer.classList.remove("visible");
  [...themeSelectors].forEach((item) => {
    item.tabIndex = -1;
  });
};

themeDisplay.addEventListener("click", () => {
  if (themeContainer.classList.contains("visible")) {
    hideThemeContainer();
  } else {
    showThemeContainer();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heading = document.querySelector(".heading");
  heading.classList.remove("hidden");
  const value = parseInt(numofPara.value, 10);
  result.classList.add("fadeIn");
  result.classList.remove("hidden");
  let tempText = text.slice(0, value);
  tempText = tempText.map((item) => `<p class="result">${item}</p>`).join("");
  result.innerHTML = tempText;
});

numofPara.addEventListener("input", syncParaNumbers);

// Array of paragraphs

const text = [
  `I just want you to know that no matter what anyone says, you will always be our first dad. Hide your diamonds, hide your exes, I’m a little bit Alexis! Oh, I’d kill for a good coma right now. Like Beyoncé, I excel as a solo artist. If you’re looking for an ass to kiss, it’s mine. This place is almost charming. Very rustic cottage… I was half expecting early Unabomber.`,
  `OK, yeah, no, I did not write this… OK, like, I didn’t even choose this font! It’s horrible. What kind of barnyard were you raised in? I don’t want to brag, but Us Weekly once described me as ‘up for anything.' The idea of me life coaching another human being should scare you… a lot. I totally get that. We just need a body. Then go to the morgue.`,
  `Well, this town is very screamnastic. Very uninterested in that opinion. I was casually seeing Prince Harry, so there was the whole, like, ‘Is she gonna be a princess’ thing… um, but it’s also because we were going through this very dark phase where we were just, like, partying too hard. Never let the bastards get you down! You’d think there’d be more of a market for oversized paintings of other people’s families.`,
  `Just remember: no sudden movements, do not reach for the glove box, and no matter what happens, do not tell them your real name. Who put a picture of a ghost on my desk?That’s the sonogram of our baby! Is there, like, a Texas Chainsaw movie being filmed out there that I’m not aware of? Why am I getting booed? I wasn’t in rehab; I was at rehab, visiting Stavros. Stop doing that with your face.`,
  `If those bunnies feel exploited even a little bit, I am pulling the plug. I haven’t bedazzled anything since I was 22. I’m incapable of faking sincerity. There’s nothing here but hot singles in my area. But people love extreme vanity… and they love puppies!`,
  `You smell very flammable right now. Do I wear my fringed vest? Or, more importantly, do I wear anything under it? We’re drinking to me not becoming an alcoholic.My name is Alexis, and yes, I did not finish high school. Um, it’s this long, boring story involving a yacht, and a famous soccer player, and like a ton of mushrooms. The internet is a breeding ground for freaks.`,
  `I didn’t go missing, David. The FBI knew where I was the entire time! I got these at a showroom in Paris. I got these on a clearance rack at Target.OK, yeah, I still actually had a few more verses. And in the last verse, I really get to showcase my range.`,
  `As if I didn’t see this coming. He’s broken up with me five times already. Like there was that time that he never met me in Rio. And remember that time when he gave me his ex-wife’s engagement ring? And then there was that time last summer when he left his molly in my glove compartment and then I got arrested.`,
  `Stop doing that with your face. He loves everyone. Men, women, women who become men, men who become women. I’m his father, and I always wanted his life to be easy. But, you know, just pick one gender, and maybe, maybe everything would’ve been less confusing.`,
  `I would be pleased to RSVP as pending. You might want to rethink the nightgown first. There’s a whole Ebenezer Scrooge thing happening. My best to Bob Cratchet. Allow me to offer you some advice. Take a thousand naked pictures of yourself now. You may currently think, ‘Oh, I’m too spooky,’ or ‘Nobody wants to see these tiny boobies,’ but believe me: One day you will look at those photos with much kinder eyes and say, ‘Dear God, I was a beautiful thing!`,
];
// https://www.scarymommy.com/schitts-creek-quotes/
