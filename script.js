var scoreSelfishness = 0;
var scoreGreed = 0;
var scoreMorality = 0;

var gameScenarios = [
    {
        title: "The Condemned Squire",
        text: "A squire is dragged before you, blood still on his hands. He has butchered your entire family—your wife, your children, even your youngest son, whose tiny skull was found crushed beneath his boot. He stands defiant, laughing, his chains rattling. Yet he whispers of a secret—knowledge that could destroy your greatest enemy.",
        choices: {
            "Kill him and his family publicly": [2, 0, 0, "He is skinned alive, his family is burned at the stake, and his bones are made into a throne ornament."],
            "Spare him, but extract information": [-2, 0, 0, "He is kept alive, limbs broken one by one, until his screams spill every truth from his lips."]
        }
    },
    {
        title: "The Smuggler's Offer",
        text: "A shadowy figure steps into your throne room, draped in heavy cloaks, hiding the glint of golden treasures beneath his robes. He speaks in a voice low and slippery, as though every word he utters could lead to your ruin—or your salvation. \n Great King, he says, bowing ever so slightly, 'I come not to bargain, but to offer you the world.' \n He presents heaps of riches, crates of foreign silks, gems that pulse with unnatural life, and weapons that could decimate your foes. Yet, he demands one thing in return: favors. Favors that may come at the most inopportune times, when you have no choice but to comply.\n The thought of unimaginable wealth weighs heavily on your mind, yet you know the cost—it is never truly free. \n Will you accept this dark pact and trade your soul for riches that could secure your legacy, or will you turn him away, knowing that the debt may come back to destroy everything you've worked for?",
        choices: {
            "Take his wealth, then have him assassinated": [0, 2, 0, "As the smuggler hands you the treasure, you can almost feel the power coursing through your veins. The blood of the innocents is already on your hands, but you need not compromise further. You have him killed before he even realizes the betrayal. His body is found floating in the river, his face frozen in horror. But the price of greed is steep. Your kingdom becomes a pariah, cursed by an unseen enemy, and soon, the smugglers' network retaliates."],
            "Accept the deal, become indebted to him": [0, -2, 0, "The treasures flood your coffers, the kingdom thrives, and your power grows like a wildfire. You begin to rule with an iron fist, but the smuggler's demands never stop. Your hands grow heavier with each debt. Your children are sent to foreign lands to pay off the interest, and in your dreams, his voice haunts you, demanding more, while you are too weak to ever escape him. The kingdom prospers, but at what cost? "]
        }
    },
    {
        title: "The Broken Rebel",
        text: "A rebellion has grown beyond your control. It is not a matter of power—it is a matter of psychological warfare. The rebel leader, a former nobleman, has crushed your forces and defiled your banners, leaving bloodied corpses hanging from your castle walls as if they were nothing but sacrificial offerings. \n But this man... this monster... he is more than a warrior. His words rally the people like fire spreading through a dry forest. The lives lost in battle are forgotten, for now, they only see him as their savior. You have one chance to end this rebellion, and your choice will determine whether the people fear you… or worship him.",
        choices: {
            "Flay him alive in the square ": [0, 0, 2, "The choice is clear—you need to make an example of him. His skin is torn from his bones, leaving him a shivering, bloody heap. The people watch as he gasps, the final sounds of a dying soul echoing across the square. Yet as his blood soaks the ground, you feel the shift—the people no longer see him as a hero, but a martyr. Your name is now whispered with both fear and disgust. The minds of the people twist, and you realize that your reign may have reached its end."],
            "Break him mentally, make him a puppet": [0, 0, -2, "You break his will, twisting his mind with unspeakable horrors. You keep him alive, forcing him to speak your words and act as your puppet. He is paraded before the people, broken and humiliated, but they no longer see him as the symbol of rebellion. However, the people are no longer sure if they are loyal to you—or to the tyrant you've become. The weight of manipulation takes its toll, and you soon realize that you may have destroyed his mind forever—and perhaps, something within yourself as well."]
        }
    },
    {
        title: "The Marriage Alliance",
        text: "The noblewoman stands before you in silks that shimmer like a thousand suns. Her beauty is undeniable, but it is her power that attracts you. She is the daughter of a neighboring king, and her alliance could secure your legacy. She offers you everything—her loyalty, her riches, and her bloodline to strengthen your claim. \n But there is a problem: your heart belongs to another—a lowborn woman, with no title, no money—nothing but love. She is beautiful, but she will bring you nothing but scorn from the nobles, and her very existence will be the cause of constant rebellion in your kingdom. You must choose: will you marry for political power and wealth, or for the woman you love, even if it brings ruin?",
        choices: {
            "Marry the noblewoman for power": [2, 0, 0, "The marriage is a grand affair, a celebration of your power, and the kingdom rejoices. Your true love is cast aside—her heart broken, her life stolen from her as she is thrown into a dungeon to rot. But you gain influence over kingdoms, and your reign grows unchallenged. Yet the ache of betrayal lingers, and you realize the love you sacrificed was the only true thing you ever had."],
            "Marry for love, risk rebellion": [-2, 0, 0, "The kingdom is enraged and the idea of rebellion brews once more. Your people and the nobles are baffled by your act of settling for a commoner. Not long after your decision was made, your true love was found in the filthiest parts of your town, defiled and raped beyond recognition. Because of your negligence to your duty for your kingdom, she had to suffer a disgusting fate. Was it worth it in the end?"]
        }
    },
    {
        title: "The Plague's Price",
        text: "A plague has taken root in your kingdom. The streets are choked with death, and the sick are abandoned in the streets to die. The stench of decay fills the air, and your people beg for mercy. A stranger—a mysterious healer—appears before you, offering a cure.\n However, the cure comes with a cost: for each life saved, another must be sacrificed. You know that if you do not act now, the plague will consume everything, but the choice is grim: Will you save the strongest, and sacrifice the weakest, or let fate take its course, and allow your kingdom to wither?",
        choices: {
            "Reject the cure, let the weak die": [0, 2, 0, "You order that the weak be cast aside, their bodies left to rot as the strongest are treated and healed. The streets clear, and the city grows quiet. But the echoes of the dying haunt you, and the voices of the children you abandoned fill your nightmares. Your kingdom survives, but its soul is tainted, and soon the cries of the dead will follow you to your grave."],
            "Accept the cure, sell thousands into slavery": [0, -2, 0, "The cure works, but it comes at a cost you cannot fathom. You sell your people into slavery, their bodies sent to distant lands to pay for the cure. The people you once ruled are now nothing more than chattel, their names erased from history. Your kingdom thrives, but your soul is devoured by the darkness you've unleashed. The price you paid will come back to haunt you."]
        }
    },
    {
        title: "The Tortured Prisoner",
        text: "A prisoner is brought before you. He is a man who once served as your most loyal advisor, but his treachery has led to the deaths of thousands. His betrayal was so deep that it has cost the lives of many innocent children in your kingdom. The man's eyes are bloodshot, his body barely held together by the chains that bind him. He begs for mercy. His family, once revered in your court, has fallen from grace, their wealth stripped away, leaving them destitute. \n Your men have already begun to strip him of his dignity, but his pleas hang in the air, pulling at your heart. \n Will you take the easy road and humiliate him, allowing him to live in agony, or will you show mercy and let him die with dignity?",
        choices: {
            "Torture him until he begs for death": [2, 0, 0, "You give the order. The prisoner is dragged away to the deepest dungeon, where his screams echo for days. His body is torn apart piece by piece, his flesh sliced open in brutal displays of cruelty. No mercy is shown, and you watch in silence, satisfied by his suffering. Yet, as his life drains from him, the whispers of his ghost fill your mind. The kingdom rejoice, but your own humanity has been stripped away, and you begin to question your own sanity."],
            "End his life quickly, sparing him from further pain": [-2, 0, 0, "You order his execution in the most merciful manner. The prisoner's life is ended swiftly, his body left to rot in peace. Your kingdom breathes easier, for no more bloodshed will follow. But as you look upon his dead face, you realize that no one in your kingdom trusts you anymore. Mercy has made you weak, and your enemies gather in the shadows, ready to take what is rightfully yours."]
        }
    },
    {
        title: "The Famine",
        text: "The horrifying famine has begun. Fields once bountiful are now barren, and the peasants grow thinner by the day. The nobles demand that you maintain the trade routes, but you know there is not enough food to feed them. Your people cry out, starving to the point of cannibalism, yet you have no choice but to choose who shall live and who will die. You have learned that a neighboring kingdom holds vast grain stores, and they are willing to trade—but only at a cruel cost. They demand your newborn child as payment. Your daughter, the heir to your throne, will be handed over to these savage people, her life for a chance at saving your people. \n But there is another way—you can hoard the grain for yourself, leaving your people to starve. What will you do?",
        choices: {
            "Send your daughter to the neighboring kingdom, sacrificing her for survival": [0, 2, 0, "The deal is made. Your daughter is handed over, her body mutilated by the ritualistic sacrifices of the neighboring kingdom. In exchange, the famine begins to lift. The people hail you as a savior, but your own heart dies every day, and your daughter's spirit haunts you. As you sit on your throne, you wonder how long you can carry on before the darkness consumes you."],
            "Keep the grain, let the peasants die": [0, -2, 0, "You refuse the neighboring kingdom's offer, keeping the grain for yourself. The people begin to starve, and mass graves are dug. You watch from your castle window, indifferent to their cries, knowing that the grain you have hoarded will last you for years to come. Yet you are haunted by the image of your daughter's corpse and know that the blood on your hands will never wash clean."]
        }
    },
    {
        title: "The Assassination",
        text: "A rival king, who has plotted against you for years, is finally within your grasp. His forces have been shattered, and he is now captured and bound before you. His kingdom lies in ruins, his people crushed under the weight of your vengeance. He is an old man, his body frail and broken from the countless battles fought in his youth. You can see the fear in his eyes, and you know that your decision will decide the future of your kingdom. Will you execute him for his betrayal and send a message to any who dare oppose you, or will you show mercy, choosing to spare his life and demonstrate the strength of your kingdom through the power of justice?",
        choices: {
            "Execute him in the most brutal manner": [0, 0, 2, "You order that the rival king be executed publicly, his bones snapped, his flesh sliced and burned in front of his people. His kingdom's heart is crushed beneath your heel, and you stand tall over his broken body. As his blood stains the stones, your enemies bow before you in fear. Yet, his spirit haunts you in the dark of the night. His face twists in the shadows, and you know that your kingdom's fate is now sealed in blood."],
            "Let him live, banish him to the wilderness": [0, 0, -2, "You spare him and banish him to the wilderness, where he is left to die slowly without the dignity of a death. But the people of your kingdom no longer see you as a leader—they see you as a weakling, soft-hearted and easily manipulated. Your decision begins to unravel the very fabric of your power, and you are soon swept away by forces you can no longer control."]
        }
    },
    {
        title: "The Final War",
        text: "Your kingdom stands on the edge of destruction. A rival lord has gathered an army of over 50,000 men, and his forces march toward your city gates. You have no hope of defeating them unless you make a terrible sacrifice. You have discovered a dark power, an ancient curse that could level the rival forces in an instant, but it will corrupt your soul forever. The curse will grant you unmatched power, but it will consume your humanity, and in the end,you will become a monster. The choice is clear: use the curse, sacrifice your humanity for victory, or hold onto the light.",
        choices: {
            "Use the curse, sacrifice your humanity for victory": [2, 0, 0, "You unleash the curse, and the enemy army is obliterated. Their bodies crumble to ash before you, and the lands are flooded with blood. The power is yours, but so is the corruption. Your kingdom falls to your madness, your people bowing before the twisted version of yourself that you have become. You no longer know what it is to feel human, and the kingdom that once praised you now trembles at your name."],
            "Reject the curse, let your kingdom fall": [-2, 0, 0, "You reject the curse, knowing it will forever destroy you. Your kingdom is breached, and you cower upon your throne. The rival lord's forces raze many of your territories to the ground, and most of your people are enslaved. The world will forget your name in time, but your conscience remains clean, knowing that at least in the end, you would have died a man."]
        }
    },
    {
        title: "The Madness",
        text: "It has come to this: your kingdom is fading, your power slipping away with each passing day.The last remnants of your humanity are gone, devoured by the very decisions you made. Your enemies gather, your allies betray you, and your people curse your name. You sit upon your throne, the weight of absolute power crushing you. The darkest path awaits: embrace madness and let it consume you completely, ruling as a tyrant with absolute control, or abandon your throne, leaving everything to fall into chaos. In either case, your kingdom will suffer. The choice is yours:",
        choices: {
            "Embrace absolute madness": [5, 0, 5, "You give in to the madness. You tear down the walls of your castle, setting it aflame and ruling with an iron fist. Your people hide in fear, and the world watches in horror as you become a living nightmare, a creature of pure chaos. There are no laws, no mercy—only destruction. The kingdom will burn, and so will you, for your reign is nothing but a curse."],
            "Abandon the throne, let the kingdom fall": [-5, 0, -5, "You abandon your kingdom, leaving it to burn in flames, its people scattered and broken. You disappear into the wilderness, your name lost to history. Yet in the depths of your soul, you know you are no better than the monsters you created. The kingdom dies, but so does the man who once ruled it."]
        }
    }
    // Additional scenarios can follow the same structure.
];

var currentScenarioIndex = 0;

// Add these variables at the start of your file
var backgroundMusic;

// Add this function to initialize and play the music
function initializeMusic() {
    backgroundMusic = new Audio('music.mp3'); // Make sure this matches your music file name
    backgroundMusic.loop = true; // Makes the music loop continuously
    backgroundMusic.volume = 1; // Increased volume to 50%
    
    // Try to play music when user interacts with the page
    document.addEventListener('click', function startMusic() {
        console.log("Attempting to play music...");
        backgroundMusic.play().then(() => {
            console.log("Music started successfully!");
        }).catch(error => {
            console.error("Error playing music:", error);
        });
        document.removeEventListener('click', startMusic);
    }, { once: true });
}

// Add this function to check if music is loaded
backgroundMusic?.addEventListener('canplaythrough', () => {
    console.log("Music file loaded and ready to play");
});

// Update your window.onload function to include music initialization
window.onload = function() {
    console.log("Page loaded, initializing music...");
    createOrbs();
    showIntroMenu();
    initializeMusic();
};

// Add this function to create and show a custom modal
function showCustomModal(title, message, callback) {
    // Create modal container
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background:rgba(44, 62, 80, 0.95);
        padding: 20px;
        border: 2px solid #333;
        border-radius: 10px;
        z-index: 1000;
        max-width: 80%;
        max-height: 80vh;
        overflow-y: auto;
        color: #c0c0c0;
        font-family: Futura, sans-serif;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    `;

    // Add title
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.style.cssText = `
        margin: 0 0 15px 0;
        color: #ffffff;
        font-size: 24px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    `;
    modal.appendChild(titleElement);

    // Add message
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.cssText = `
        margin: 0 0 20px 0;
        line-height: 1.6;
        white-space: pre-line;
        color: #c0c0c0;
        font-size: 16px;
    `;
    modal.appendChild(messageElement);

    // Add continue button
    const button = document.createElement('button');
    button.textContent = 'Continue';
    button.style.cssText = `
        display: block;
        margin: 0 auto;
        padding: 10px 30px;
        background:rgba(44, 62, 80, 0.95);
        color: #ffffff;
        border: 1px solid #333;
        border-radius: 5px;
        cursor: pointer;
        font-family: Futura, sans-serif;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
    `;
    button.onmouseover = () => {
        button.style.background = '#3a3a3a';
        button.style.borderColor = '#444';
    };
    button.onmouseout = () => {
        button.style.background = '#2a2a2a';
        button.style.borderColor = '#333';
    };
    button.onclick = () => {
        modal.remove();
        overlay.remove();
        if (callback) callback();
    };
    modal.appendChild(button);

    // Add overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(44, 62, 80, 0.95);
        z-index: 999;
    `;

    // Add to document
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

// Function to handle the making of a choice
function makeChoice(choice) {
    var scenario = gameScenarios[currentScenarioIndex];
    var impact = scenario.choices[choice];
    
    // Update scores
    scoreSelfishness += impact[0];
    scoreGreed += impact[1];
    scoreMorality += impact[2];
    
    currentScenarioIndex++;
    
    // Use custom modal with callback
    showCustomModal("Your actions have consequences", impact[3], function() {
        if (currentScenarioIndex < gameScenarios.length) {
            updateScenario();
        } else {
            determineFinalOutcome();
        }
    });
}

// Function to update the scenario in the UI
function updateScenario() {
    if (currentScenarioIndex < gameScenarios.length) {
        var scenario = gameScenarios[currentScenarioIndex];
        var titleLabel = document.getElementById("titleLabel");
        var textLabel = document.getElementById("textLabel");
        var button1 = document.getElementById("button1");
        var button2 = document.getElementById("button2");
        
        // Check if DOM elements exist
        if (!titleLabel || !textLabel || !button1 || !button2) {
            console.error("Required DOM elements not found");
            return;
        }
        
        titleLabel.textContent = scenario.title;
        textLabel.textContent = scenario.text;
        
        var choices = Object.keys(scenario.choices);
        if (choices.length < 2) {
            console.error("Invalid choices for scenario:", scenario.title);
            return;
        }
        
        // Configure button1
        button1.textContent ='Choice 1:  '+ choices[0];
        button1.onclick = function() {
            makeChoice(choices[0]);
        };
        // Configure button2
        button2.textContent ='Choice 2:  '+ choices[1];
        button2.onclick = function() {
            makeChoice(choices[1]);
        };
    } else {
        determineFinalOutcome();
    }
}
function ending(selfishness, greed, morality){
    var totalScore = selfishness + greed + morality;
    var outcome = "";
    if (totalScore >= 10 && totalScore < 28){
        outcome = "The Crimson Tyrant: You have ruled with an iron fist, carving your name into history with blood and terror. The people bow before you, not out of love, but out of sheer, paralyzing fear. Those who speak against you are flayed alive, their bodies displayed as a warning to any who would dare whisper dissent. Your castle is a monument to horror, its halls lined with the skulls of your enemies, their hollow sockets forever watching.\nBut power is a hungry beast—it is never satisfied. The night comes when you awaken to the sound of silence. The halls are empty. The guards—gone. The city below is eerily still. Then, the flames erupt.\nA coup has begun.\nThey come for you—your own advisors, your generals, the very people who once trembled beneath your rule. The castle is overrun, and you are dragged through the streets, naked, battered, broken. The people who once feared you now revel in your suffering. They take their revenge slowly—fingers torn away one by one, your limbs crushed beneath stones, your tongue ripped from your mouth so you cannot even beg. In the end, they hang you upside down, slit open your stomach, and let the dogs feast as the city cheers.\nYour empire is gone. Your name is cursed. And the last thing you hear before the abyss takes you is the laughter of those you once ruled."
    } else if (totalScore >= 5 && totalScore < 10) {
        outcome = "The Kingdom of Ash: You won. The enemies who sought to destroy you are no more. Your rivals are dead, their kingdoms swallowed by your ever-growing empire. But you did not win without cost.\nYour lands have been ravaged by famine and plague. The people do not celebrate—they weep. They whisper of a king who made deals with devils, who sacrificed children and burned villages to fuel his ambition. The air is thick with the stench of rotting corpses, their bodies left unburied in the streets.\nOne day, you sit upon your throne, surveying the ruins of what was once a prosperous kingdom. The crown feels heavier than before. Your hands trembled. You hear voices in the halls—soft at first, then louder. They whisper of the past, of those you betrayed, of the screams of those who suffered for your choices.\nYou turn to call for your guards—but they are gone.\nYou are alone.\nThe shadows creep closer, and as you blink, they take shape—faces contorted in agony, the spirits of those you doomed. They do not scream. They do not attack. They only watch.\nAnd in that moment, you realize the worst truth of all: you will never be allowed to die. You will not fade into history. You will be a living nightmare, a curse upon the world."
    } else if ((totalScore > 0 && totalScore < 5) || (totalScore < 0 && totalScore >= -5)) {
        outcome = "The Hollow Throne: Your reign has ended, not with a bang, but with a slow, agonizing decay. The choices you made, the lives you spared, the mercy you showed—all led to this moment. Your kingdom is weak, your enemies are strong, and now they come for you.\nThey do not kill you. No, they know a worse fate.\nYou are dragged from your throne, stripped of your royal garb, and paraded through the streets like a common criminal. The people jeer and spit at you, the very same people you tried to protect. They call you a failure, a coward, a king unworthy of power. You are thrown into a cage like an animal, left to rot in your own filth, surviving only on scraps thrown at you by those who once bowed before you.\nYears pass.\nYour body withers, your mind unravels. The world moves on, forgetting the name of the king who once ruled. The new rulers see you as nothing more than a relic of the past. Your existence is meaningless. You die nameless, broken, a ghost of the man you once were.\nNo songs are sung for you. No history books remember you.\nYou were, and then you were not."
    }else if (totalScore <= -5){
        outcome = "The Mad God: You chose the path of madness.\nThe world burned, and you ruled over its ashes. You embraced darkness, shunned humanity, and became something more—something monstrous. Your flesh twisted, your mind shattered, your laughter turned to an endless, guttural shriek. The kingdom was not enough. You wanted more.\nThe people fled, those who could, anyway. The ones who stayed were reshaped into twisted horrors, their bodies broken, their minds erased. They worshiped you not as a king, but as an eldritch god, a deity of blood and despair. Your palace became a temple of nightmares, its halls lined with writhing, wailing figures trapped in a state between life and death.\nAnd then, the day came when there was nothing left to rule.\nThe world was empty.\nYou sat upon your throne of bones, alone in the void, whispering to yourself, waiting for something, anything to bring you back from the abyss.\nBut there was nothing.\nNothing but the echoes of your own laughter.\nForever."
    }else if (totalScore == 0){
        outcome = "The Bittersweet Exile: You lost everything.\nYour kingdom was torn apart by war, your allies betrayed you, and your enemies claimed victory. The throne that once belonged to you now seats another, and your name is spoken only in hushed tones, remembered as either a tragic fool or a failed tyrant.\nYet, you live.\nYou fled before the final battle, disappearing into the unknown. You became nothing more than a wandering exile, stripped of your title, your power, and your wealth.\nAnd then, one day, you found her.\nThe woman you loved, the one you sacrificed everything for. She had survived the chaos, hiding in the outskirts of the ruined kingdom. When she saw you, there was no anger, no hatred—only understanding.\nTogether, you restart from zero. A small cottage, a field to till, a world without crowns and bloodshed. You were no longer a king, but for the first time in years, you were happy.\nAnd as the sun set on another quiet evening, you held her hand and watched the horizon, knowing that though you had lost the world—you had found something far greater."
    }
    else{
        outcome = "The Profane Ascension: The throne was never meant to be the end. It was only the beginning.\nYour soul is long gone. Your name is whispered in hushed horror, a curse upon the lips of the wretched masses who cower beneath your rule. Every choice you've made has led to this—the utter annihilation of morality, the total embrace of boundless power, and the final, most unspeakable sin.\nAs your kingdom smolders, the land itself rotting under the weight of your cruelty, the last of your enemies fall before you, not in battle, but in reverence. They do not resist. They do not beg. They kneel.\nYou are not a king. You are not a man. You have become something else.\nThe whispers come from the abyss—horrors that should not exist, voices speaking a language that corrodes reality itself. They offer you something greater than a kingdom.\nSomething greater than power.\nEternity.\nThe world is no longer enough. You will not die. You will not fade into history. You will ascend.\nWith the blood of your subjects, you carve the final sigils into your flesh. With their screams, you sing the hymns of the abyss. The sky tears apart, reality itself warping as the ancient forces welcome their new heir.\nYou have conquered man, but now, you will devour gods.\nThe earth cracks beneath your feet as your body twists, becoming something indescribable.\nFlesh becomes shadow, shadow becomes void. The very concept of suffering is rewritten in your name.\nThe world is gone.\nOnly you remain.\nYou are the end. The final truth. The everlasting horror.\nThere is no escape.\nThere never was."
    }
    return outcome;
}

// Function to determine the final psychological profile based on scores
function getPsychologicalProfile(selfishness, greed, morality) {
    var totalScore = selfishness + greed + morality;
    var profile = "";
    
    if (totalScore >= 10 && totalScore < 28) {
        profile = "The Crimson Tyrant: You are a ruler who thrives on power, cruelty, and absolute control. Your reign is soaked in blood, and fear is the foundation of your empire. Every decision you made prioritized dominance, destruction, and self-preservation at any cost.<br> <br>\nPsychological Profile:\n<br>● Personality Type: High Machiavellianism, Narcissistic, Sadistic Tendencies\n<br>● Core Motivations: Power, Control, Legacy\n<br>● Fears: Losing Power, Appearing Weak\n <br>● Likely Real-Life Counterparts: Ruthless dictators, warlords, and historical conquerors\n <br><br> Real-Life Parallels: You might excel in leadership roles that require cutthroat decision-making, such as corporate executives, political strategists, or military commanders.\n However, your lack of empathy makes personal relationships difficult, and betrayal is both your greatest weapon and your greatest weakness.";
    } else if (totalScore >= 5 && totalScore <= 9) {
        profile = "The Dark Opportunist: You are neither wholly evil nor merciful—you rule with strategic ruthlessness. While you made some cruel decisions, they were calculated, ensuring your survival rather than being acts of pure malice. You are willing to betray, manipulate, and sacrifice others when necessary, but you do not indulge in senseless cruelty.<br> <br>\nPsychological Profile:\n<br>● Personality Type: Pragmatic, Calculating, Opportunistic\n<br>● Core Motivations: Power, Stability, Control\n<br>● Fears: Losing Influence, Being Outmaneuvered\n<br>● Likely Real-Life Counterparts: Shrewd politicians, crime lords, CEOs of monopolistic corporations\n <br><br> Real-Life Parallels: You would thrive in politics, law, or business, where strategic thinking and ethical flexibility are valuable assets. However, your pragmatic nature may make you struggle with personal relationships, as trust is something you give sparingly.";
    } else if (totalScore >= 0 && totalScore <= 4) {
        profile = "The Doomed Tyrant: You tried to balance power with morality, but in the end, you fell short. You made some brutal choices, but your hesitation and occasional acts of mercy left you vulnerable. You are a ruler who believed they could have it all—dominance without sacrificing humanity—but the world does not allow such balance.<br> <br>\nPsychological Profile:\n<br>● Personality Type: Idealistic yet Pragmatic, Struggles with Moral Dissonance\n<br>● Core Motivations: Power, Control, Justice\n<br>● Fears: Losing Identity, Being Seen as Weak\n<br>● Likely Real-Life Counterparts: Failed revolutionaries, corrupt kings, misguided leaders\n <br><br> Real-Life Parallels: You would do well in leadership positions but would struggle with the weight of responsibility. You may be ambitious but unsure of how far you're willing to go.\nYour downfall is often due to an inability to commit fully to either ruthlessness or compassion.";
    }else if (totalScore >= -4 && totalScore <= -1){
        profile = "The Fallen King: You tried to rule justly, but justice alone is not enough. You showed mercy when you should have struck, hesitated when you should have acted, and in the end, your enemies took advantage of your kindness. Your reign ended not in triumph but in tragedy.<br> <br>\nPsychological Profile:\n● Personality Type: Idealistic, Compassionate, Morally Conflicted\n● Core Motivations: Justice, Honor, Morality\n● Fears: Becoming Corrupt, Failing to Protect Others\n● Likely Real-Life Counterparts: Overthrown rulers, tragic heroes, historical figures who valued morality over survival\n <br><br> Real-Life Parallels: You might be drawn to humanitarian work, activism, or teaching, where your sense of justice and morality can flourish. However, you may struggle in competitive environments that require ruthless decision-making."
    }else if (totalScore <= -5){
        profile = "The Martyr King: You ruled with compassion and sacrifice, making choices that prioritized humanity over power. You rejected cruelty, refused to give in to greed, and remained steadfast in your morality—even as your kingdom fell apart around you. Your reign ended in ruin, but your soul remained pure.<br> <br>\nPsychological Profile:\n<br>● Personality Type: Self-Sacrificing, Deeply Moral, Altruistic\n<br>● Core Motivations: Justice, Compassion, Honor\n<br>● Fears: Becoming Corrupt, Failing to Protect Others\n<br>● Likely Real-Life Counterparts: Noble leaders who fell to treachery, philosophers who challenged power, martyrs\n <br><br> Real-Life Parallels: You would thrive in charitable causes, spiritual leadership, or artistic pursuits that challenge societal norms. However, you may struggle in environments that require ruthless pragmatism, as you are unwilling to compromise on your values."
    }else{
        profile = "The Mad God: You embraced the abyss, welcoming the insanity that comes with ultimate power. You were not just cruel—you became something beyond human. You saw morality as weakness, justice as an illusion, and power as the only truth. You burned the world down, reveling in its destruction.<br> <br>\nPsychological Profile:\n<br>● Personality Type: Megalomaniacal, Sociopathic, Chaotic\n<br>● Core Motivations: Absolute Power, Destruction, Nihilism\n<br>● Fears: Undetermined\n<br>● Likely Real-Life Counterparts: Legends of gods, fallen deities, cult leaders, insane tyrants\n <br><br> Real-Life Parallels: You would make an excellent horror villain, a symbol of chaos, or a figure feared in myth and legend. In reality, such people rarely survive long in power, as they eventually destroy themselves."
    }
    return profile;

}


// Function to determine the final outcome of the game
function determineFinalOutcome() {
    var outcome = ending(scoreSelfishness, scoreGreed, scoreMorality);
    var finalProfile = getPsychologicalProfile(scoreSelfishness, scoreGreed, scoreMorality);
    
    // Show outcome first, then show profile when continued
    showCustomModal("Ending", outcome, function() {
        // Update the UI after showing modals
        document.getElementById('titleLabel').innerHTML = 'Your Final Psychological Profile:\n\n';
        document.getElementById('textLabel').innerHTML = finalProfile;
        
        // Get all button elements
        var button1 = document.getElementById("button1");
        var button2 = document.getElementById("button2");
        var restartButton = document.getElementById("restartButton");
        
        // Hide choice buttons and show restart button
        button1.style.display = "none";
        button2.style.display = "none";
        restartButton.classList.remove("hidden");
        
        // Add event listener to the restart button
        restartButton.onclick = restartGame;
    });
}

// Add this at the beginning of your script.js file
function createParticles() {
    const numberOfParticles = 50;
    const body = document.querySelector('body');
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Random delay for animation
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        body.appendChild(particle);
    }
}

// Update the createOrbs function
function createOrbs() {
    const body = document.querySelector('body');
    
    // Create eight orbs
    for (let i = 1; i <= 8; i++) {
        const orb = document.createElement('div');
        orb.className = `orb orb-${i}`;
        body.appendChild(orb);
    }
}

// Add these new functions before window.onload

function showIntroMenu() {
    var titleLabel = document.getElementById("titleLabel");
    var textLabel = document.getElementById("textLabel");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var restartButton = document.getElementById("restartButton");
    
    titleLabel.textContent = "The Dark Throne: Blood and Madness";
    textLabel.textContent = "As a king and ruler of your subjects, you bear the burden of their fate. Every decision, whether made with wisdom, compassion or ruthless ambition, reveals a bit more about who you really are. You’ll face moments where your hopes, fears, and dreams come into play. There will be times when you might have to put your people's needs before your own desires. Each step, every choice, carries its own price and promise, painting a picture of your brutal journey as a leader.";
    
    button1.textContent = "Play";
    button2.textContent = "Exit";
    
    // Hide restart button if visible
    restartButton.classList.add("hidden");
    
    // Show menu buttons
    button1.style.display = "block";
    button2.style.display = "block";
    
    // Set button click handlers
    button1.onclick = startGame;
    button2.onclick = exitGame;
}

function startGame() {
    currentScenarioIndex = 0;
    scoreSelfishness = 0;
    scoreGreed = 0;
    scoreMorality = 0;
    updateScenario();
}

function exitGame() {
    if (confirm("Are you sure you want to exit the game?")) {
        window.close();
        // Fallback if window.close() is blocked
        document.body.innerHTML = "<h1>Thank you for playing The Dark Throne: Blood and Madness.</h1>";
    }
}

// Replace the existing window.onload function with this updated version
window.onload = function() {
    createOrbs();
    showIntroMenu();
    initializeMusic();
};

// Function to restart the game
function restartGame() {
    // Reset scores
    scoreSelfishness = 0;
    scoreGreed = 0;
    scoreMorality = 0;
    currentScenarioIndex = 0;
    
    // Get all button elements
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var restartButton = document.getElementById("restartButton");
    
    // Show choice buttons and hide restart button
    button1.style.display = "block";
    button2.style.display = "block";
    restartButton.style.display = "none";
    
    // Show intro menu instead of directly updating scenario
    showIntroMenu();
}
