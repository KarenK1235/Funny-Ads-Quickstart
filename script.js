const DATA = {
  goals: [
    { id: "calls", title: "Get more calls", desc: "Use a clear call-to-action that invites people to call or request info." },
    { id: "dms", title: "Get more DMs", desc: "Use a keyword CTA so people can message you fast." },
    { id: "appointments", title: "Book appointments", desc: "Guide people toward a booking, estimate, demo, or consultation." },
    { id: "offer", title: "Promote a special offer", desc: "Make a limited promo easier to understand and remember." },
    { id: "intro", title: "Introduce my business", desc: "Help people quickly understand what you do." },
    { id: "scroll", title: "Get people to stop scrolling", desc: "Lead with humor, contrast, or a funny visual." },
    { id: "explain", title: "Explain what I do", desc: "Make your service clearer without sounding boring." },
    { id: "reactivate", title: "Bring back old leads", desc: "Use a playful reminder to restart the conversation." },
  ],
  formulas: [
    { id: "overdramatic", title: "The Overdramatic Problem", desc: "Take a normal customer problem and make it feel like a ridiculous emergency.", template: "When [small problem] feels like [giant disaster], it might be time for [solution]." },
    { id: "wrong-right", title: "The Wrong Way vs. Right Way", desc: "Show the customer doing something the hard, messy, or silly way. Then show the easier solution.", template: "Still doing [problem] the hard way? Try [solution] instead." },
    { id: "fake-expert", title: "The Fake Expert", desc: "A clearly unqualified expert gives terrible advice. Then your business shows the better option.", template: "Bad advice: [silly advice]. Better idea: [solution]." },
    { id: "talking-object", title: "The Talking Object", desc: "Let an object speak for the customer's problem.", template: "If your [object] could talk, it would probably say: [funny line]." },
    { id: "before-after", title: "The Before/After Personality Shift", desc: "Before: stressed and dramatic. After: calm, confident, and relieved.", template: "Before [solution]: [chaos]. After [solution]: [relief]." },
    { id: "tiny-problem", title: "The Tiny Problem That Got Out of Hand", desc: "A small issue becomes a silly chain reaction.", template: "It started with [small problem]. Then suddenly [funny consequence]." },
    { id: "confession", title: "The Customer Confession", desc: "The character admits something funny, honest, and relatable.", template: "Confession: I used to think [common mistake]. Then I found [solution]." },
    { id: "meltdown", title: "The Business Owner Meltdown", desc: "Show someone trying to do everything alone and hilariously failing.", template: "When you're trying to be the owner, marketer, assistant, designer, and tech support..." },
    { id: "myth", title: "The Myth Buster", desc: "Start with a common belief, then break it in a funny way.", template: "Myth: [wrong belief]. Truth: [better belief]." },
    { id: "hero", title: "The Unexpected Hero", desc: "A silly object, pet, mascot, robot, or character becomes the solution.", template: "When [unexpected character] realizes [customer problem], they call [business name]." },
  ],
  styles: [
    { id: "playful", title: "Silly and playful", desc: "More personality, more jokes, still clear." },
    { id: "balanced", title: "Lightly funny but professional", desc: "Safe for service businesses and professional brands." },
    { id: "trailer", title: "Dramatic movie trailer", desc: "Make the problem feel like an over-the-top movie scene." },
    { id: "relatable", title: "Relatable business owner pain", desc: "Make people laugh because it feels painfully true." },
    { id: "object", title: "Talking object", desc: "Let a phone, mop, coffee cup, toolbox, or product talk." },
    { id: "pet", title: "Pet or mascot reaction", desc: "Use a pet, mascot, or character as the judge." },
    { id: "transformation", title: "Before/after transformation", desc: "Show chaos before and relief after." },
    { id: "educational", title: "Stop doing this educational style", desc: "Teach a quick lesson with a funny opening." },
  ],
  hooks: [
    "Still doing this the hard way?",
    "Your business deserves better than boring ads.",
    "When your marketing plan is just hope.",
    "This is why nobody is clicking.",
    "POV: You tried to make content again.",
    "Your customers are scrolling past you.",
    "This is your sign to stop posting boring stuff.",
    "Nobody warned you business ownership came with this.",
    "Your ad does not need you dancing in your kitchen.",
    "Small business owners, we need to talk.",
    "This is what happens when you ignore marketing.",
    "Your phone is not broken. Your ad might be.",
    "When your content strategy is maybe tomorrow.",
    "This is painfully accurate.",
    "If your ads feel invisible, watch this.",
    "Your offer is good. Your ad is just hiding it.",
    "The problem is not your business. It is the scroll.",
    "Stop making ads nobody notices.",
    "This is what boring marketing looks like.",
    "Your customers need a reason to stop scrolling.",
    "You do not need to be famous. You need to be clear.",
    "Funny gets attention. Clear gets action.",
    "This ad idea took less than 15 minutes.",
    "Marketing does not have to be this painful.",
    "Make them laugh. Then make the offer."
  ],
  scenes: [
    { id: "talking-object", title: "Talking Object Ad", desc: "Use a mop, phone, coffee cup, toolbox, product, or office plant as the character." },
    { id: "hands-only", title: "Hands-Only Demo", desc: "Show hands using the product, writing notes, packing an order, cleaning, or pointing." },
    { id: "texts", title: "Text Message Conversation", desc: "Create a fake text conversation between the customer and the problem." },
    { id: "before-after", title: "Before/After Tabletop Scene", desc: "Use props to show messy vs. solved, confused vs. clear, or boring vs. attention-grabbing." },
    { id: "silent-phone", title: "Silent Phone Scene", desc: "Show a phone with no calls, no messages, or no leads. Add funny text overlays." },
    { id: "sticky-notes", title: "Sticky Note Chaos", desc: "Show too many bad ideas, then reveal one simple ad formula." },
    { id: "pet-reaction", title: "Pet Reaction Scene", desc: "Use a pet reacting to a boring ad, bad decision, or messy problem." },
    { id: "trailer", title: "Mini Movie Trailer Scene", desc: "Turn a normal customer problem into an exaggerated movie trailer." },
    { id: "whiteboard", title: "Whiteboard Problem/Solution", desc: "Show bad ideas crossed out, then reveal the simple solution." },
    { id: "ai-character", title: "AI Character Scene", desc: "Use an AI-generated character, mascot, object, or visual scene instead of appearing on camera." },
  ],
  ctas: [
    'DM FUNNY',
    'DM AD',
    'DM IDEA',
    'DM START',
    'DM SCRIPT',
    'DM NO CAMERA',
    'Call today',
    'Book online',
    'Visit our website',
    'Claim the offer'
  ]
};

const state = {
  step: 0,
  businessName: "",
  businessType: "",
  audience: "",
  offer: "",
  problem: "",
  goal: "",
  goalOther: "",
  formula: "",
  formulaOther: "",
  style: "",
  styleOther: "",
  hook: "",
  hookOther: "",
  scene: "",
  sceneOther: "",
  cta: "",
  customCta: "",
  deadline: "",
  destination: ""
};

const steps = [
  { key: "welcome", title: "Welcome" },
  { key: "snapshot", title: "Business Snapshot" },
  { key: "goal", title: "Choose Your Ad Goal" },
  { key: "formula", title: "Choose a Funny Formula" },
  { key: "style", title: "Choose Your Ad Style" },
  { key: "hook", title: "Choose a Hook" },
  { key: "scene", title: "Choose a Scene" },
  { key: "cta", title: "Choose a CTA" },
  { key: "offerDetails", title: "Offer Details" },
  { key: "output", title: "Your Finished Script" }
];

const screen = document.getElementById("screen");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const stepLabel = document.getElementById("stepLabel");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const previewText = document.getElementById("previewText");
const copyPreviewBtn = document.getElementById("copyPreviewBtn");

function escapeHTML(str) {
  return String(str || "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

function selectedObj(list, id) {
  return list.find(item => item.id === id) || {};
}

function valueOrBlank(value, fallback = "[add detail]") {
  return value && value.trim() ? value.trim() : fallback;
}

function render() {
  const current = steps[state.step];
  const percent = Math.round(((state.step + 1) / steps.length) * 100);
  stepLabel.textContent = "Step " + (state.step + 1) + " of " + steps.length + ": " + current.title;
  progressPercent.textContent = percent + "%";
  progressFill.style.width = percent + "%";

  backBtn.disabled = state.step === 0;
  nextBtn.textContent = state.step === steps.length - 1 ? "Finished" : "Next Step";
  nextBtn.style.display = state.step === steps.length - 1 ? "none" : "inline-block";

  if (current.key === "welcome") renderWelcome();
  if (current.key === "snapshot") renderSnapshot();
  if (current.key === "goal") renderChoicesWithOther("Choose Your Ad Goal", "What do you want this ad to help with?", DATA.goals, "goal", "goalOther", "Have a different goal? Describe it here.");
  if (current.key === "formula") renderChoicesWithOther("Choose a Funny Ad Formula", "Pick the main comedy structure for your ad.", DATA.formulas, "formula", "formulaOther", "Have your own formula idea? Describe it here.");
  if (current.key === "style") renderChoicesWithOther("Choose Your Ad Style", "Pick the tone that fits your business.", DATA.styles, "style", "styleOther", "Have a different style in mind? Describe it here.");
  if (current.key === "hook") renderHookChoices();
  if (current.key === "scene") renderSceneChoices();
  if (current.key === "cta") renderCtaChoices();
  if (current.key === "offerDetails") renderOfferDetails();
  if (current.key === "output") renderOutput();

  updatePreview();
}

function renderWelcome() {
  screen.innerHTML = `
    <div class="hero-screen">
      <span class="badge">No camera required</span>
      <h1>Build Your Funny Ad Script in Minutes</h1>
      <p class="lead">Answer a few simple questions and Dexter will help you assemble a custom funny ad concept, scene plan, CTA, caption, and AI prompt.</p>
      <div class="hero-grid">
        <div class="mini-feature">10 funny formulas</div>
        <div class="mini-feature">25 headline hooks</div>
        <div class="mini-feature">No-camera scenes</div>
        <div class="mini-feature">Custom script output</div>
      </div>
      <p style="margin-top:24px;color:#c8102e;font-weight:800;font-size:16px;">Ready? Click <strong>Next Step</strong> below to get started.</p>
    </div>
  `;
}

function renderSnapshot() {
  screen.innerHTML = `
    <p class="eyebrow">Step 1</p>
    <h2>Tell Dexter about your business</h2>
    <p class="lead">These details will be used to build your custom ad script.</p>
    <div class="form-grid">
      ${field("Business name", "businessName", "Bright & Clean Maids")}
      ${field("Business type", "businessType", "Cleaning service")}
      ${field("Target audience", "audience", "Busy homeowners")}
      ${field("Offer or service", "offer", "First-time deep cleaning special")}
      ${textarea("Customer problem you solve", "problem", "They do not have time to clean and feel embarrassed when guests come over.")}
    </div>
  `;
  bindInputs();
}

function field(label, key, placeholder) {
  return '<div class="field"><label>' + label + '</label><input data-key="' + key + '" value="' + escapeHTML(state[key]) + '" placeholder="' + escapeHTML(placeholder) + '" /></div>';
}

function textarea(label, key, placeholder) {
  return '<div class="field full"><label>' + label + '</label><textarea data-key="' + key + '" placeholder="' + escapeHTML(placeholder) + '">' + escapeHTML(state[key]) + '</textarea></div>';
}

function bindInputs() {
  screen.querySelectorAll("[data-key]").forEach(function(el) {
    el.addEventListener("input", function(e) {
      state[e.target.dataset.key] = e.target.value;
      updatePreview();
    });
  });
}

function renderChoicesWithOther(title, helper, list, key, otherKey, otherPlaceholder) {
  screen.innerHTML = `
    <p class="eyebrow">${steps[state.step].title}</p>
    <h2>${title}</h2>
    <p class="lead">${helper}</p>
    <div class="card-grid">
      ${list.map(function(item) {
        return '<div class="choice-card ' + (state[key] === item.id ? "selected" : "") + '" data-choice="' + item.id + '" data-key="' + key + '"><h3>' + escapeHTML(item.title) + '</h3><p class="tagline">' + escapeHTML(item.desc || item.template || "") + '</p></div>';
      }).join("")}
    </div>
    <div class="form-grid" style="margin-top:20px;">
      <div class="field full">
        <label>Something else? Add your own idea here:</label>
        <input data-key="${otherKey}" value="${escapeHTML(state[otherKey])}" placeholder="${escapeHTML(otherPlaceholder)}" />
      </div>
    </div>
  `;
  bindChoices();
  bindInputs();
}

function renderHookChoices() {
  screen.innerHTML = `
    <p class="eyebrow">Choose a Hook</p>
    <h2>Pick a scroll-stopping opening line</h2>
    <p class="lead">This is the first line people see or hear. Click one or write your own below.</p>
    <div class="card-grid">
      ${DATA.hooks.map(function(hook) {
        return '<div class="choice-card ' + (state.hook === hook ? "selected" : "") + '" data-hook="' + escapeHTML(hook) + '"><h3>' + escapeHTML(hook) + '</h3><p class="tagline">Use this as your opening text, first line, or video overlay.</p></div>';
      }).join("")}
    </div>
    <div class="form-grid" style="margin-top:20px;">
      <div class="field full">
        <label>Something else? Write your own opening line:</label>
        <input data-key="hookOther" value="${escapeHTML(state.hookOther)}" placeholder="e.g. You will not believe what happened when we showed up..." />
      </div>
    </div>
  `;
  screen.querySelectorAll("[data-hook]").forEach(function(card) {
    card.addEventListener("click", function() {
      state.hook = card.dataset.hook;
      state.hookOther = "";
      render();
    });
  });
  bindInputs();
}

function renderSceneChoices() {
  screen.innerHTML = `
    <p class="eyebrow">Choose a Scene</p>
    <h2>Choose a No-Camera Scene</h2>
    <p class="lead">Pick the visual setup for your ad. No camera required for any of these.</p>
    <div class="card-grid">
      ${DATA.scenes.map(function(item) {
        return '<div class="choice-card ' + (state.scene === item.id ? "selected" : "") + '" data-choice="' + item.id + '" data-key="scene"><h3>' + escapeHTML(item.title) + '</h3><p class="tagline">' + escapeHTML(item.desc) + '</p></div>';
      }).join("")}
    </div>
    <div class="form-grid" style="margin-top:20px;">
      <div class="field full">
        <label>Have your own scene idea? Describe it here:</label>
        <input data-key="sceneOther" value="${escapeHTML(state.sceneOther)}" placeholder="e.g. Shot on a yacht deck, product in foreground, funny text overlay..." />
      </div>
    </div>
  `;
  bindChoices();
  bindInputs();
}

function renderCtaChoices() {
  screen.innerHTML = `
    <p class="eyebrow">Choose a CTA</p>
    <h2>What should people do next?</h2>
    <p class="lead">Pick a quick CTA or write your own below.</p>
    <div class="card-grid">
      ${DATA.ctas.map(function(cta) {
        return '<div class="choice-card ' + (state.cta === cta ? "selected" : "") + '" data-cta="' + escapeHTML(cta) + '"><h3>' + escapeHTML(cta) + '</h3><p class="tagline">Use this as the final action in your ad.</p></div>';
      }).join("")}
    </div>
    <div class="form-grid" style="margin-top:20px;">
      <div class="field full">
        <label>Write your own CTA:</label>
        <input data-key="customCta" value="${escapeHTML(state.customCta)}" placeholder='Example: DM CLEAN for a free quote' />
      </div>
    </div>
  `;
  screen.querySelectorAll("[data-cta]").forEach(function(card) {
    card.addEventListener("click", function() {
      state.cta = card.dataset.cta;
      render();
    });
  });
  bindInputs();
}

function renderOfferDetails() {
  screen.innerHTML = `
    <p class="eyebrow">Almost Done</p>
    <h2>Add the final details</h2>
    <p class="lead">This makes your script specific and ready to use.</p>
    <div class="form-grid">
      ${field("Offer details", "offer", "First-time deep cleaning special")}
      ${field("Deadline or urgency (optional)", "deadline", "This week only / Limited spots / No deadline")}
      ${field("Where should they go after seeing the ad?", "destination", "DM us / Book online / Call today / Visit our website")}
      ${textarea("Anything else Dexter should know?", "problem", "They are busy, overwhelmed, and tired of spending weekends cleaning.")}
    </div>
  `;
  bindInputs();
}

function bindChoices() {
  screen.querySelectorAll("[data-choice]").forEach(function(card) {
    card.addEventListener("click", function() {
      state[card.dataset.key] = card.dataset.choice;
      render();
    });
  });
}

function getEffectiveValue(primary, other, fallback) {
  if (other && other.trim()) return other.trim();
  if (primary && primary.trim()) return primary.trim();
  return fallback;
}

function getScriptDoc() {
  var goal = selectedObj(DATA.goals, state.goal).title || state.goalOther || "[choose ad goal]";
  var formula = selectedObj(DATA.formulas, state.formula);
  var formulaTitle = formula.title || state.formulaOther || "[choose formula]";
  var style = selectedObj(DATA.styles, state.style).title || state.styleOther || "[choose ad style]";
  var sceneObj = selectedObj(DATA.scenes, state.scene);
  var scene = sceneObj.title || state.sceneOther || "[choose scene]";
  var hook = getEffectiveValue(state.hook, state.hookOther, "[choose hook]");
  var cta = valueOrBlank(state.customCta || state.cta, "[choose CTA]");
  var business = valueOrBlank(state.businessName, "[business name]");
  var type = valueOrBlank(state.businessType, "[business type]");
  var audience = valueOrBlank(state.audience, "[audience]");
  var offer = valueOrBlank(state.offer, "[offer]");
  var problem = valueOrBlank(state.problem, "[customer problem]");
  var deadline = valueOrBlank(state.deadline, "No deadline listed");
  var destination = valueOrBlank(state.destination, cta);

  var concept = buildConcept(formula.id || state.formulaOther, business, type, audience, offer, problem, cta);
  var scenes = buildScenes(formula.id, scene, hook, business, offer, problem, cta);
  var caption = buildCaption(hook, business, offer, problem, cta);
  var prompt = buildAIPrompt(type, offer, problem, audience, formulaTitle, style, scene, cta);

  return "YOUR FUNNY AD SCRIPT\n\nBusiness: " + business + "\nBusiness Type: " + type + "\nAudience: " + audience + "\nAd Goal: " + goal + "\nFormula: " + formulaTitle + "\nStyle: " + style + "\nScene Type: " + scene + "\nOffer: " + offer + "\nDeadline/Urgency: " + deadline + "\nCTA: " + cta + "\nNext Destination: " + destination + "\n\nFINAL AD CONCEPT\n" + concept + "\n\n3-SCENE SCRIPT\n\nScene 1:\n" + scenes[0] + "\n\nScene 2:\n" + scenes[1] + "\n\nScene 3:\n" + scenes[2] + "\n\nCAPTION\n" + caption + "\n\nTEXT OVERLAY IDEAS\n1. " + hook + "\n2. " + shortProblem(problem) + "\n3. " + cta + "\n\nVISUAL NOTES\nUse the selected scene style: " + scene + ". Keep the video simple, no-camera if possible, and focused on one clear customer problem. Use props, text overlays, an object, a mascot, or an AI-generated character instead of requiring the owner to appear on camera.\n\nWHAT TO DO NEXT\nTake this script and paste the AI PROMPT below into ChatGPT, Claude, or Google Gemini to create 5 more versions instantly.\n\nFor static ads: Open Canva and use your headline hook as text overlay on a simple image.\nFor video ads: Use Google Flow, Canva Video, or DaVinci Resolve to bring your 3-scene script to life.\nFor AI-generated visuals: Paste your scene description into ChatGPT Images or Canva AI to create the visual.\n\nSuggested tools to explore (check each for current availability and pricing):\n- Writing and brainstorming: ChatGPT, Claude, Google Gemini\n- Design: Canva, Adobe Express\n- Video editing: Google Flow, Canva Video, DaVinci Resolve (free), Clipchamp (free, Windows)\n- AI images: ChatGPT Images, Canva AI, Google Gemini\n\nAI PROMPT TO CREATE MORE VERSIONS\n" + prompt + "\n\nIMPORTANT NOTE\nThis script is a creative planning draft. It does not guarantee sales, leads, reach, engagement, ad approvals, platform approval, or ad performance. Review the rules of any platform where you plan to post or advertise. Tool availability, pricing, and features may change. Always check each tool directly before using it.";
}

function shortProblem(problem) {
  var clean = valueOrBlank(problem, "The problem is real");
  return clean.length > 72 ? clean.slice(0, 69) + "..." : clean;
}

function buildConcept(formulaId, business, type, audience, offer, problem, cta) {
  var base = {
    "overdramatic": "A normal customer problem is treated like a dramatic emergency. The ad exaggerates the problem until " + business + " appears as the calm, obvious fix with " + offer + ".",
    "wrong-right": "The ad shows the wrong way to handle the problem first, then reveals the better way: " + business + " and " + offer + ".",
    "fake-expert": "A fake expert gives terrible advice about the problem, then the ad corrects it with a simple solution from " + business + ".",
    "talking-object": "An object connected to the problem complains directly to the viewer, then points people toward " + business + ".",
    "before-after": "Before " + business + ": chaos, stress, and confusion. After " + offer + ": relief, clarity, and a much calmer customer.",
    "tiny-problem": "A small version of the problem turns into a ridiculous chain reaction until " + business + " steps in.",
    "confession": "A relatable customer confession reveals the mistake people make, then " + business + " offers a better next step.",
    "meltdown": "A stressed business owner or customer tries to handle everything alone, melts down, and then discovers " + business + ".",
    "myth": "The ad starts with a common myth and flips it into a simple truth that points to " + offer + ".",
    "hero": "A mascot, pet, object, or unexpected hero notices the problem and dramatically brings in " + business + " as the solution."
  };
  return base[formulaId] || (business + " uses a funny ad concept to show " + audience + " how " + offer + " solves their problem.");
}

function buildScenes(formulaId, sceneTitle, hook, business, offer, problem, cta) {
  var opener = hook + " Show the " + sceneTitle.toLowerCase() + " setup with text on screen.";
  var middle = "Make the problem funny: the situation becomes more dramatic, awkward, or relatable than expected.";
  var close = "Reveal " + business + " and " + offer + " as the simple next step. End with: " + cta + ".";
  if (formulaId === "talking-object") {
    return [
      opener + " An object connected to the problem looks like it has had enough.",
      "The object says something like: I was not prepared for this level of chaos. Then show the customer problem visually.",
      close
    ];
  }
  if (formulaId === "wrong-right") {
    return [
      opener + " Show the wrong way to handle the problem.",
      "Cut to the right way: " + business + " makes the next step feel easier and less stressful.",
      close
    ];
  }
  if (formulaId === "trailer") {
    return [
      opener + " Add dramatic text like: In a world where this keeps happening...",
      "Show the problem escalating in a silly way.",
      close
    ];
  }
  return [opener, middle, close];
}

function buildCaption(hook, business, offer, problem, cta) {
  return hook + "\n\nIf " + shortProblem(problem).toLowerCase() + " keeps getting in the way, " + business + " can help with " + offer + ".\n\n" + cta;
}

function buildAIPrompt(type, offer, problem, audience, formula, style, scene, cta) {
  return "Act as a funny ad writer for a small business. Create 5 unique short ad scripts for a " + type + " offering " + offer + ". The audience is " + audience + ". The customer problem is: " + problem + ". Use this formula: " + formula + ". Use this tone: " + style + ". Use this scene style: " + scene + ". Keep each script simple, clear, playful, and under 24 seconds. Do not require the business owner to appear on camera. End each script with this CTA: " + cta + ". Include a headline, 3-scene script, text overlays, caption, and visual notes for each version.";
}

function renderOutput() {
  var doc = getScriptDoc();
  screen.innerHTML = `
    <p class="eyebrow">Finished Script</p>
    <h2>Your funny ad script is ready</h2>
    <p class="lead">Copy it, download it, or print it. Then use the AI prompt inside to create 5 more versions in seconds.</p>
    <div class="output-actions">
      <button class="primary-btn" id="copyOutput">Copy Script</button>
      <button class="secondary-btn" id="downloadTxt">Download TXT</button>
      <button class="ghost-btn" id="printPage">Print / Save PDF</button>
    </div>
    <div class="output-box"><pre id="outputPre"></pre></div>
    <div class="warning-box" style="margin-top:16px;">
      <strong>What to do next:</strong> Paste the AI Prompt section into ChatGPT, Claude, or Google Gemini to generate 5 more ad versions instantly. Then take your favorite into Canva, Google Flow, or DaVinci Resolve to create the final ad.
    </div>
    <div class="note-card" style="margin-top:12px;">
      <strong>Important:</strong> This AI builder is a creative planning tool. It does not guarantee sales, leads, reach, engagement, ad approvals, platform approval, or ad performance.
    </div>
  `;
  document.getElementById("outputPre").textContent = doc;
  document.getElementById("copyOutput").addEventListener("click", function() { copyText(doc); });
  document.getElementById("downloadTxt").addEventListener("click", function() { downloadText(doc); });
  document.getElementById("printPage").addEventListener("click", function() { window.print(); });
}

function updatePreview() {
  previewText.textContent = getScriptDoc();
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(function() { alert("Copied to clipboard!"); });
}

function downloadText(text) {
  var business = (state.businessName || "funny-ad-script").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = (business || "funny-ad-script") + ".txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

backBtn.addEventListener("click", function() {
  if (state.step > 0) { state.step--; render(); }
});

nextBtn.addEventListener("click", function() {
  if (state.step < steps.length - 1) { state.step++; render(); }
});

restartBtn.addEventListener("click", function() {
  if (confirm("Start over and clear this ad?")) {
    Object.keys(state).forEach(function(k) { state[k] = typeof state[k] === "number" ? 0 : ""; });
    state.step = 0;
    render();
  }
});

copyPreviewBtn.addEventListener("click", function() { copyText(getScriptDoc()); });

render();
