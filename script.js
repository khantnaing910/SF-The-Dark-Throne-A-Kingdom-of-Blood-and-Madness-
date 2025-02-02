let scoreSelfishness = 0;
let scoreGreed = 0;
let scoreMorality = 0;
let currentScenarioIndex = 0;

const gameScenarios = [
    {
        title: "The Condemned Squire",
        text: "A squire is dragged before you, blood still on his hands. He has butchered your entire family—your wife, your children, even your youngest son, whose tiny skull was found crushed beneath his boot. He stands defiant, laughing, his chains rattling. Yet he whispers of a secret—knowledge that could destroy your greatest enemy.",
        choices: [
            { impact: [2, 0, 0], result: "He is skinned alive, his family is burned at the stake, and his bones are made into a throne ornament." },
            { impact: [-2, 0, 0], result: "He is kept alive, limbs broken one by one, until his screams spill every truth from his lips." }
        ]
    },
    {
        title: "The Smuggler’s Offer",
        text: "A shadowy figure steps into your throne room, draped in heavy cloaks, hiding the glint of golden treasures beneath his robes. He speaks in a voice low and slippery, as though every word he utters could lead to your ruin—or your salvation. Great King, he says, bowing ever so slightly, 'I come not to bargain, but to offer you the world.' He presents heaps of riches, crates of foreign silks, gems that pulse with unnatural life, and weapons that could decimate your foes. Yet, he demands one thing in return: favors. Favors that may come at the most inopportune times, when you have no choice but to comply.",
        choices: [
            { impact: [0, 2, 0], result: "As the smuggler hands you the treasure, you can almost feel the power coursing through your veins. The blood of the innocents is already on your hands, but you need not compromise further. You have him killed before he even realizes the betrayal. His body is found floating in the river, his face frozen in horror. But the price of greed is steep. Your kingdom becomes a pariah, cursed by an unseen enemy, and soon, the smugglers' network retaliates." },
            { impact: [0, -2, 0], result: "The treasures flood your coffers, the kingdom thrives, and your power grows like a wildfire. You begin to rule with an iron fist, but the smuggler’s demands never stop. Your hands grow heavier with each debt. Your children are sent to foreign lands to pay off the interest, and in your dreams, his voice haunts you, demanding more, while you are too weak to ever escape him. The kingdom prospers, but at what cost?" }
        ]
    },
    {
        title: "The Broken Rebel",
        text: "A rebellion has grown beyond your control. It is not a matter of power—it is a matter of psychological warfare. The rebel leader, a former nobleman, has crushed your forces and defiled your banners, leaving bloodied corpses hanging from your castle walls as if they were nothing but sacrificial offerings. But this man... this monster... he is more than a warrior. His words rally the people like fire spreading through a dry forest. You have one chance to end this rebellion, and your choice will determine whether the people fear you… or worship him.",
        choices: [
            { impact: [0, 0, 2], result: "The choice is clear—you need to make an example of him. His skin is torn from his bones, leaving him a shivering, bloody heap. The people watch as he gasps, the final sounds of a dying soul echoing across the square. Yet as his blood soaks the ground, you feel the shift—the people no longer see him as a hero, but a martyr. Your name is now whispered with both fear and disgust. The minds of the people twist, and you realize that your reign may have reached its end." },
            { impact: [0, 0, -2], result: "You break his will, twisting his mind with unspeakable horrors. You keep him alive, forcing him to speak your words and act as your puppet. He is paraded before the people, broken and humiliated, but they no longer see him as the symbol of rebellion. However, the people are no longer sure if they are loyal to you—or to the tyrant you’ve become. The weight of manipulation takes its toll, and you soon realize that you may have destroyed his mind forever—and perhaps, something within yourself as well." }
        ]
    },
    {
        title: "The Marriage Alliance",
        text: "The noblewoman stands before you in silks that shimmer like a thousand suns. Her beauty is undeniable, but it is her power that attracts you. She is the daughter of a neighboring king, and her alliance could secure your legacy. She offers you everything—her loyalty, her riches, and her bloodline to strengthen your claim. But there is a problem: your heart belongs to another—a lowborn woman, with no title, no money—nothing but love. You must choose: will you marry for political power and wealth, or for the woman you love, even if it brings ruin?",
        choices: [
            { impact: [2, 0, 0], result: "The marriage is a grand affair, a celebration of your power, and the kingdom rejoices. Your true love is cast aside—her heart broken, her life stolen from her as she is thrown into a dungeon to rot. But you gain influence over kingdoms, and your reign grows unchallenged. Yet the ache of betrayal lingers, and you realize the love you sacrificed was the only true thing you ever had." },
            { impact: [-2, 0, 0], result: "The kingdom is enraged and the idea of rebellion brews once more. Your true love was found in the filthiest parts of your town, defiled and raped beyond recognition. Because of your negligence to your duty for your kingdom, she had to suffer a disgusting fate. Was it worth it in the end?" }
        ]
    },
    {
        title: "The Plague’s Price",
        text: "A plague has taken root in your kingdom. The streets are choked with death, and the sick are abandoned in the streets to die. A stranger—a mysterious healer—appears before you, offering a cure. However, the cure comes with a cost: for each life saved, another must be sacrificed. You know that if you do not act now, the plague will consume everything, but the choice is grim: Will you save the strongest, and sacrifice the weakest, or let fate take its course, and allow your kingdom to wither?",
        choices: [
            { impact: [0, 2, 0], result: "You order that the weak be cast aside, their bodies left to rot as the strongest are treated and healed. The streets clear, and the city grows quiet. But the echoes of the dying haunt you, and the voices of the children you abandoned fill your nightmares. Your kingdom survives, but its soul is tainted, and soon the cries of the dead will follow you to your grave." },
            { impact: [0, -2, 0], result: "The cure works, but it comes at a cost you cannot fathom. You sell your people into slavery, their bodies sent to distant lands to pay for the cure. The people you once ruled are now nothing more than chattel, their names erased from history. Your kingdom thrives, but your soul is devoured by the darkness you've unleashed." }
        ]
    },
    {
        title: "The Tortured Prisoner",
        text: "A prisoner is brought before you. He is a man who once served as your most loyal advisor, but his treachery has led to the deaths of thousands. His betrayal was so deep that it has cost the lives of many innocent children in your kingdom. The man’s eyes are bloodshot, his body barely held together by the chains that bind him. He begs for mercy. Will you take the easy road and humiliate him, allowing him to live in agony, or will you show mercy and let him die with dignity?",
        choices: [
            { impact: [2, 0, 0], result: "You give the order. The prisoner is dragged away to the deepest dungeon, where his screams echo for days. His body is torn apart piece by piece, his flesh sliced open in brutal displays of cruelty. No mercy is shown, and you watch in silence, satisfied by his suffering. Yet, as his life drains from him, the whispers of his ghost fill your mind." },
            { impact: [-2, 0, 0], result: "You order his execution in the most merciful manner. The prisoner's life is ended swiftly, his body left to rot in peace. Your kingdom breathes easier, for no more bloodshed will follow. But as you look upon his dead face, you realize that no one in your kingdom trusts you anymore." }
        ]
    },
    {
        title: "The Famine",
        text: "The horrifying famine has begun. Fields once bountiful are now barren, and the peasants grow thinner by the day. The nobles demand that you maintain the trade routes, but you know there is not enough food to feed them. Your people cry out, starving to the point of cannibalism, yet you have no choice but to choose who shall live and who will die. You have learned that a neighboring kingdom holds vast grain stores, and they are willing to trade—but only at a cruel cost. They demand your newborn child as payment.",
        choices: [
            { impact: [0, 2, 0], result: "The deal is made. Your daughter is handed over, her body mutilated by the ritualistic sacrifices of the neighboring kingdom. In exchange, the famine begins to lift. The people hail you as a savior, but your own heart dies every day, and your daughter’s spirit haunts you." },
            { impact: [0, -2, 0], result: "You refuse the neighboring kingdom’s offer, keeping the grain for yourself. The people begin to starve, and mass graves are dug. You watch from your castle window, indifferent to their cries, knowing that the grain you have hoarded will last you for years to come." }
        ]
    },
    {
        title: "The Assassination",
        text: "A rival king, who has plotted against you for years, is finally within your grasp. His forces have been shattered, and he is now captured and bound before you. You can see the fear in his eyes, and you know that your decision will decide the future of your kingdom. Will you execute him for his betrayal and send a message to any who dare oppose you, or will you show mercy, choosing to spare his life and demonstrate the strength of your kingdom through the power of justice?",
        choices: [
            { impact: [0, 0, 2], result: "You order that the rival king be executed publicly, his bones snapped, his flesh sliced and burned in front of his people. His kingdom’s heart is crushed beneath your heel, and you stand tall over his broken body." },
            { impact: [0, 0, -2], result: "You spare him and banish him to the wilderness, where he is left to die slowly without the dignity of a death." }
        ]
    },
    {
        title: "The Final War",
        text: "Your kingdom stands on the edge of destruction. A rival lord has gathered an army of over 50,000 men, and his forces march toward your city gates. You have discovered a dark power, an ancient curse that could level the rival forces in an instant, but it will corrupt your soul forever. The choice is clear: use the curse to obliterate your enemies, or hold onto the light.",
        choices: [
            { impact: [2, 0, 0], result: "You unleash the curse, and the enemy army is obliterated. Their bodies crumble to ash before you, and the lands are flooded with blood. The power is yours, but so is the corruption." },
            { impact: [-2, 0, 0], result: "You reject the curse, knowing it will forever destroy you. Your kingdom is breached, and you cower upon your throne." }
        ]
    },
    {
        title: "The Madness",
        text: "It has come to this: your kingdom is fading, your power slipping away with each passing day. You sit upon your throne, the weight of absolute power crushing you. The darkest path awaits: embrace madness and let it consume you completely, ruling as a tyrant with absolute control, or abandon your throne, leaving everything to fall into chaos.",
        choices: [
            { impact: [5, 0, 5], result: "You give in to the madness. You tear down the walls of your castle, setting it aflame and ruling with an iron fist." },
            { impact: [-5, 0, -5], result: "You abandon your kingdom, leaving it to burn in flames, its people scattered and broken." }
        ]
    }
];

function updateScenario() {
    const scenario = gameScenarios[currentScenarioIndex];
    document.getElementById("title").innerText = scenario.title;
    document.getElementById("text").innerText = scenario.text;

    const choices = scenario.choices;
    document.getElementById("choice1").innerText = "Choice 1: " + choices[0].result;
    document.getElementById("choice2").innerText = "Choice 2: " + choices[1].result;

    // Change background image based on the current scenario
    const backgroundImages = [
        'url("image1.jpg")',
        'url("image2.jpg")',
        'url("image3.jpg")',
        'url("image4.jpg")',
        'url("image5.jpg")',
        'url("image6.jpg")',
        'url("image7.jpg")',
        'url("image8.jpg")',
        'url("image9.jpg")',
        'url("image10.jpg")',

    ];

    document.getElementById("backgroundImage").style.backgroundImage = backgroundImages[currentScenarioIndex];
}

function makeChoice(choiceIndex) {
    const impact = gameScenarios[currentScenarioIndex].choices[choiceIndex].impact;
    scoreSelfishness += impact[0];
    scoreGreed += impact[1];
    scoreMorality += impact[2];

    const result = gameScenarios[currentScenarioIndex].choices[choiceIndex].result;
    document.getElementById("result").innerText = result;

    currentScenarioIndex++;
    if (currentScenarioIndex < gameScenarios.length) {
        updateScenario();
    } else {
        determineFinalOutcome();
    }
}

function determineFinalOutcome() {
    const totalScore = scoreSelfishness + scoreGreed + scoreMorality;
    let outcome = "";

    if (totalScore >= 10) {
        outcome = "The Crimson Tyrant: You have ruled with an iron fist, carving your name into history with blood and terror. The people bow before you, not out of love, but out of sheer, paralyzing fear. Those who speak against you are flayed alive, their bodies displayed as a warning to any who would dare whisper dissent. Your castle is a monument to horror, its halls lined with the skulls of your enemies, their hollow sockets forever watching.\nBut power is a hungry beast—it is never satisfied. The night comes when you awaken to the sound of silence. The halls are empty. The guards—gone. The city below is eerily still. Then, the flames erupt.\nA coup has begun.\nThey come for you—your own advisors, your generals, the very people who once trembled beneath your rule. The castle is overrun, and you are dragged through the streets, naked, battered, broken. The people who once feared you now revel in your suffering. They take their revenge slowly—fingers torn away one by one, your limbs crushed beneath stones, your tongue ripped from your mouth so you cannot even beg. In the end, they hang you upside down, slit open your stomach, and let the dogs feast as the city cheers.\nYour empire is gone. Your name is cursed. And the last thing you hear before the abyss takes you is the laughter of those you once ruled.";
    } else if (totalScore >= 5) {
        outcome = "The Kingdom of Ash: You won. The enemies who sought to destroy you are no more. Your rivals are dead, their kingdoms swallowed by your ever-growing empire. But you did not win without cost.\nYour lands have been ravaged by famine and plague. The people do not celebrate—they weep. They whisper of a king who made deals with devils, who sacrificed children and burned villages to fuel his ambition. The air is thick with the stench of rotting corpses, their bodies left unburied in the streets.\nOne day, you sit upon your throne, surveying the ruins of what was once a prosperous kingdom. The crown feels heavier than before. Your hands tremble. You hear voices in the halls—soft at first, then louder. They whisper of the past, of those you betrayed, of the screams of those who suffered for your choices.\nYou turn to call for your guards—but they are gone.\nYou are alone.\nThe shadows creep closer, and as you blink, they take shape—faces contorted in agony, the spirits of those you doomed. They do not scream. They do not attack. They only watch.\nAnd in that moment, you realize the worst truth of all: you will never be allowed to die. You will sit upon your throne forever, haunted by the echoes of your sins, in a kingdom of ash and silence.";
    } else {
        outcome = "The Hollow Throne: Your reign has ended, not with a bang, but with a slow, agonizing decay. The choices you made, the lives you spared, the mercy you showed—all led to this moment. Your kingdom is weak, your enemies are strong, and now they come for you.\nThey do not kill you. No, they know a worse fate.\nYou are dragged from your throne, stripped of your royal garb, and paraded through the streets like a common criminal. The people jeer and spit at you, the very same people you tried to protect. They call you a failure, a coward, a king unworthy of power. You are thrown into a cage like an animal, left to rot in your own filth, surviving only on scraps thrown at you by those who once bowed before you.\nYears pass.\nYour body withers, your mind unravels. The world moves on, forgetting the name of the king who once ruled. The new rulers see you as nothing more than a relic of the past. Your existence is meaningless. You die nameless, broken, a ghost of the man you once were.\nNo songs are sung for you. No history books remember you.\nYou were, and then you were not.";
    }

    document.getElementById("result").innerText = outcome;
    document.getElementById("restartButton").style.display = "block";

    // Show psychological profile
    const profile = getPsychologicalProfile(scoreSelfishness, scoreGreed, scoreMorality);
    document.getElementById("result").innerText += "\n\nPsychological Profile: " + profile; // Append profile to result
}

function getPsychologicalProfile(selfishness, greed, morality) {
    const totalScore = selfishness + greed + morality;
    let profile = "";

    if (totalScore >= 10) {
        profile = "The Crimson Tyrant: You are a ruler who thrives on power, cruelty, and absolute control. Your reign is soaked in blood, and fear is the foundation of your empire. Every decision you made prioritized dominance, destruction, and self-preservation at any cost.\n" +
                  "Psychological Profile:\n" +
                  "● Personality Type: High Machiavellianism, Narcissistic, Sadistic Tendencies\n" +
                  "● Core Motivations: Power, Control, Legacy\n" +
                  "● Fears: Losing Power, Appearing Weak\n" +
                  "● Likely Real-Life Counterparts: Ruthless dictators, warlords, and historical conquerors.\n" +
                  "\n Real-Life Parallels: You might excel in leadership roles that require cutthroat decision-making, such as corporate executives, political strategists, or military commanders. However, your lack of empathy makes personal relationships difficult, and betrayal is both your greatest weapon and your greatest weakness.";
    } else if (totalScore >= 5) {
        profile = "The Dark Opportunist: You are neither wholly evil nor merciful—you rule with strategic ruthlessness. While you made some cruel decisions, they were calculated, ensuring your survival rather than being acts of pure malice.\n" +
                  "Psychological Profile:\n" +
                  "● Personality Type: Pragmatic, Calculating, Opportunistic\n" +
                  "● Core Motivations: Power, Stability, Control\n" +
                  "● Fears: Losing Influence, Being Outmaneuvered\n" +
                  "● Likely Real-Life Counterparts: Shrewd politicians, crime lords, CEOs of monopolistic corporations.\n" +
                  "\n Real-Life Parallels: You would thrive in politics, law, or business, where strategic thinking and ethical flexibility are valuable assets. However, your pragmatic nature may make you struggle with personal relationships, as trust is something you give sparingly.";
    } else if (totalScore >= 0) {
        profile = "The Doomed Tyrant: You tried to balance power with morality, but in the end, you fell short. You made some brutal choices, but your hesitation and occasional acts of mercy left you vulnerable.\n" +
                  "Psychological Profile:\n" +
                  "● Personality Type: Idealistic yet Pragmatic, Struggles with Moral Dissonance\n" +
                  "● Core Motivations: Power, Control, Justice\n" +
                  "● Fears: Losing Identity, Being Seen as Weak\n" +
                  "● Likely Real-Life Counterparts: Failed revolutionaries, corrupt kings, misguided leaders.\n" +
                  "\n Real-Life Parallels: You would do well in leadership positions but would struggle with the weight of responsibility. You may be ambitious but unsure of how far you’re willing to go.";
    } else if (totalScore >= -5) {
        profile = "The Fallen King: You tried to rule justly, but justice alone is not enough. You showed mercy when you should have struck, hesitated when you should have acted, and in the end, your enemies took advantage of your kindness.\n" +
                  "Psychological Profile:\n" +
                  "● Personality Type: Idealistic, Compassionate, Morally Conflicted\n" +
                  "● Core Motivations: Justice, Honor, Morality\n" +
                  "● Fears: Becoming a Monster, Betraying Personal Values\n" +
                  "● Likely Real-Life Counterparts: Overthrown rulers, tragic heroes, historical figures who valued morality over survival.\n" +
                  "\n Real-Life Parallels: You might be drawn to humanitarian work, activism, or teaching, where your sense of justice and morality can flourish. However, you may struggle in competitive environments that require ruthless decision-making.";
    } else {
        profile = "The Martyr King: You ruled with compassion and sacrifice, making choices that prioritized humanity over power. You rejected cruelty, refused to give in to greed, and remained steadfast in your morality—even as your kingdom fell apart around you.\n" +
                  "Psychological Profile:\n" +
                  "● Personality Type: Self-Sacrificing, Deeply Moral, Altruistic\n" +
                  "● Core Motivations: Justice, Compassion, Honor\n" +
                  "● Fears: Becoming Corrupt, Failing to Protect Others\n" +
                  "● Likely Real-Life Counterparts: Noble leaders who fell to treachery, philosophers who challenged power, martyrs.\n" +
                  "\n Real-Life Parallels: You would thrive in charitable causes, spiritual leadership, or artistic pursuits that challenge societal norms. However, you may struggle in environments that require ruthless pragmatism, as you are unwilling to compromise on your values.";
    }

    return profile;
}

function restartGame() {
    scoreSelfishness = 0;
    scoreGreed = 0;
    scoreMorality = 0;
    currentScenarioIndex = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("restartButton").style.display = "none";
    updateScenario();
}

// Initialize the first scenario
updateScenario();
