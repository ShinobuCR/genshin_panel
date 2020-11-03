"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
const artifact_type_1 = require("../artifact_type");
const adventurer_1 = require("./adventurer");
const archaic_petra_1 = require("./archaic_petra");
const berserker_1 = require("./berserker");
const bloodstained_chivalry_1 = require("./bloodstained_chivalry");
const brave_heart_1 = require("./brave_heart");
const crimson_witch_1 = require("./crimson_witch");
const defender_will_1 = require("./defender_will");
const exile_1 = require("./exile");
const gambler_1 = require("./gambler");
const gladiator_finale_1 = require("./gladiator_finale");
const instructor_1 = require("./instructor");
const lava_walker_1 = require("./lava_walker");
const lucky_dog_1 = require("./lucky_dog");
const maiden_beloved_1 = require("./maiden_beloved");
const martial_artist_1 = require("./martial_artist");
const noblesse_oblige_1 = require("./noblesse_oblige");
const prayers_for_destiny_1 = require("./prayers_for_destiny");
const prayers_for_illumination_1 = require("./prayers_for_illumination");
const prayers_for_wisdom_1 = require("./prayers_for_wisdom");
const prayers_to_springtime_1 = require("./prayers_to_springtime");
const resolution_of_sojourner_1 = require("./resolution_of_sojourner");
const retracing_bolide_1 = require("./retracing_bolide");
const scholar_1 = require("./scholar");
const thunder_smoother_1 = require("./thunder_smoother");
const thundering_fury_1 = require("./thundering_fury");
const tiny_miracle_1 = require("./tiny_miracle");
const traveling_doctor_1 = require("./traveling_doctor");
const viridescent_venerer_1 = require("./viridescent_venerer");
const wanderer_troupe_1 = require("./wanderer_troupe");
let applyFunctions = (Array(artifact_type_1.SET_COUNT)).fill(null);
applyFunctions["adventurer"] = adventurer_1.default;
applyFunctions["archaicPetra"] = archaic_petra_1.default;
applyFunctions["berserker"] = berserker_1.default;
applyFunctions["bloodstainedChivalry"] = bloodstained_chivalry_1.default;
applyFunctions["braveHeart"] = brave_heart_1.default;
applyFunctions["crimsonWitch"] = crimson_witch_1.default;
applyFunctions["defenderWill"] = defender_will_1.default;
applyFunctions["exile"] = exile_1.default;
applyFunctions["gambler"] = gambler_1.default;
applyFunctions["gladiatorFinale"] = gladiator_finale_1.default;
applyFunctions["instructor"] = instructor_1.default;
applyFunctions["lavaWalker"] = lava_walker_1.default;
applyFunctions["luckyDog"] = lucky_dog_1.default;
applyFunctions["maidenBeloved"] = maiden_beloved_1.default;
applyFunctions["martialArtist"] = martial_artist_1.default;
applyFunctions["noblesseOblige"] = noblesse_oblige_1.default;
applyFunctions["prayersForDestiny"] = prayers_for_destiny_1.default;
applyFunctions["prayersForIllumination"] = prayers_for_illumination_1.default;
applyFunctions["prayersForWisdom"] = prayers_for_wisdom_1.default;
applyFunctions["prayersToSpringtime"] = prayers_to_springtime_1.default;
applyFunctions["resolutionOfSojourner"] = resolution_of_sojourner_1.default;
applyFunctions["retracingBolide"] = retracing_bolide_1.default;
applyFunctions["scholar"] = scholar_1.default;
applyFunctions["thunderSmoother"] = thunder_smoother_1.default;
applyFunctions["thunderingFury"] = thundering_fury_1.default;
applyFunctions["tinyMiracle"] = tiny_miracle_1.default;
applyFunctions["travelingDoctor"] = traveling_doctor_1.default;
applyFunctions["viridescentVenerer"] = viridescent_venerer_1.default;
applyFunctions["wandererTroupe"] = wanderer_troupe_1.default;
function apply(attribute, params, artifacts) {
    let temp = {};
    for (let i = 0; i < artifacts.length; i++) {
        let art = artifacts[i];
        let setName = art.setName;
        if (temp[setName]) {
            temp[setName]++;
        }
        else {
            temp[setName] = 1;
        }
    }
    for (let key in temp) {
        let count = temp[key];
        // console.log(count);
        while (count > 0) {
            if (applyFunctions[key][count - 1] !== null) {
                applyFunctions[key][count - 1](attribute, params);
            }
            count--;
        }
        // if (count > 0 && count <= 5 && applyFunctions[key][count - 1] !== null) {
        //     applyFunctions[key][count - 1](attribute, params);
        // }
    }
}
exports.apply = apply;