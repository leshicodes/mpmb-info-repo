/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://www.flapkan.com/download#charactersheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Personal Compendium for Rivet
    Effect:		This script adds custom spells, items, and features for the character Rivet (Artificer 7/Rogue 11)
    Sheet:		v13.1.12 and newer

    Code by:	James Ambrose / Leshicodes / https://leshicodes.github.io
    Date:       2025-04-10
*/
var iFileName = "rivet-compendium.js";
RequiredSheetVersion("13.1.12");

//Create the source
SourceList["RvtC"] = {
	name: "Rivet's Compendium",
	abbreviation: "RvtC",
	group: "leshicodes.github.io",
	date: "2025/04/05"
};

// Define spell identifiers
var rivetSpells = {
    volticConflagration: "rivet's voltic conflagration",
    fracturedStep: "rivet's fractured step"
};


/*
// Add custom spells
SpellsList["rivet's voltic conflagration"] = {
    name: "Rivet's Voltic Conflagration",
    source: ["RvtC", 1],
    level: 3,
    school: "Evoc",
    time: "1 a",
    range: "120 ft",
    components: "V,S,M (a copper coil wrapped around a quartz crystal)",
    duration: "Instantaneous",
    save: "Dex",
    description: "15-ft radius; 6d6 lightning damage, no reactions until next turn; half damage on success",
    descriptionFull: "You fire a charged lightning burst from your Lightning Launcher, which arcs toward a target before detonating in a 15-foot radius electromagnetic surge. Instead of an explosive shockwave, this releases a high-voltage discharge that briefly overloads nervous systems and mechanical constructs.\n   • Each creature in the area must make a Dexterity saving throw.\n   • On a failure: They take 6d6 lightning damage and are unable to take reactions until the start of their next turn.\n   • On a success: They take half damage and suffer no secondary effect.\n   • Creatures wearing metal armor or made of metal have disadvantage on the save.\n   • Constructs & magically-powered machines that fail the save are also stunned for 1 round due to the electromagnetic interference.",
    descriptionHigherLevel: "When cast at 4th level or higher, the damage increases by 1d6 per level and the radius increases by 5 feet per two levels above 3rd.",
    classes: ["artificer"]
};
*/

// Add custom spells
SpellsList[rivetSpells.volticConflagration] = {
    name: "Rivet's Voltic Conflagration",
    source: ["RvtC", 1],
    level: 3,
    school: "Evoc",
    time: "1 a",
    range: "120 ft",
    components: "V,S,M (a copper coil wrapped around a quartz crystal)",
    duration: "Instantaneous",
    save: "Dex",
    description: "15-ft radius; 6d6 lightning damage, no reactions until next turn; half damage on success",
    descriptionFull: "You fire a charged lightning burst from your Lightning Launcher, which arcs toward a target before detonating in a 15-foot radius electromagnetic surge. Instead of an explosive shockwave, this releases a high-voltage discharge that briefly overloads nervous systems and mechanical constructs.\n   • Each creature in the area must make a Dexterity saving throw.\n   • On a failure: They take 6d6 lightning damage and are unable to take reactions until the start of their next turn.\n   • On a success: They take half damage and suffer no secondary effect.\n   • Creatures wearing metal armor or made of metal have disadvantage on the save.\n   • Constructs & magically-powered machines that fail the save are also stunned for 1 round due to the electromagnetic interference.",
    descriptionHigherLevel: "When cast at 4th level or higher, the damage increases by 1d6 per level and the radius increases by 5 feet per two levels above 3rd.",
    classes: ["artificer"]
};

SpellsList[rivetSpells.fracturedStep] = {
    name: "Rivet's Fractured Step",
    source: ["RvtC", 2],
    level: 4,
    school: "Illus", // Primary school (the sheet only allows one)
    time: "1 a",
    range: "Self",
    components: "V,S,M\u0192 (a sliver of planar glass worth 50 gp, which is consumed)",
    duration: "Conc, 1 min",
    description: "Choose 1 effect: disadv. on atks vs me; invis after Dash/Disengage/Hide; teleport 15 ft as reaction; create decoy",
    descriptionFull: "Your body phases in and out of localized dimensional rifts, causing you to momentarily exist in multiple places at once. This makes you appear as a glitching afterimage, flickering unpredictably between realities. Upon casting, choose one of the following effects:\n\n   • Distorted Presence: Attack rolls against you have disadvantage unless the attacker can see into the Ethereal Plane.\n   • Dimensional Slip: When you take the Dash, Disengage, or Hide action, you briefly flicker into an adjacent dimension, turning fully invisible until the start of your next turn.\n   • Planar Jitter: When an enemy misses an attack against you, you can use your reaction to teleport up to 15 feet in any direction as you flicker between locations.\n   • Afterimage Misdirection: When you make a Stealth check, you create a phantom duplicate for 1 round. If an enemy targets your location before their next turn, roll a 1d4: 1-2: They hit the duplicate, wasting their attack. 3-4: They see through it and attack normally.",
    classes: ["artificer"]
};

// Add the spells to the artificer spell list
if (ClassList.artificer && ClassList.artificer.spellcastingList) {
    if (!ClassList.artificer.spellcastingList.extraspells) ClassList.artificer.spellcastingList.extraspells = [];
    ClassList.artificer.spellcastingList.extraspells.push(rivetSpells.volticConflagration);
    ClassList.artificer.spellcastingList.extraspells.push(rivetSpells.fracturedStep);
}

/* ---- Future additions can go below here ----

// Custom magic items for Rivet

// Custom features for Rivet

// Custom companion options for Rivet

*/