import fs from "fs";
import path from "path";

const sets = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "/sets.json")).toString());
const cards = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "/cards.json")).toString());
let records = {};
const initMax = { hp: 0 };
const initAvg = { hp: 0, count: 0 };
const init = process.argv[2] === "-a" ? initAvg : initMax;

sets.forEach(set => {
  records[set] = {
    "Baby": { ...init },
    "Basic": { ...init },
    "Stage 1": { ...init },
    "Stage 2": { ...init },
    "Stage 3": { ...init },
    "Rulebox Basic": { ...init },
    "Rulebox Stage 1": { ...init },
    "Rulebox Stage 2": { ...init }
  }
});

cards.forEach(card => {
  if (process.argv[2] === "-a") {
    if (records.hasOwnProperty(card.set)) {
      if (
        card.name.endsWith(" ex") ||
        card.name.endsWith("LEGEND") ||
        card.name.endsWith("-EX") ||
        card.name.endsWith("-GX") ||
        (card.name.endsWith("V") && card.name !== "Unown V") ||
        card.name.endsWith("VMAX") ||
        card.name.endsWith("VSTAR") ||
        (card.name === "Unown V" && parseInt(card.hp) > 120)
      ) {
        records[card.set][`Rulebox ${card.stage}`].hp += parseInt(card.hp);
        records[card.set][`Rulebox ${card.stage}`].count++;
      } else {
        records[card.set][card.stage].hp += parseInt(card.hp);
        records[card.set][card.stage].count++;
      }
    }
  } else {
    if (!card.name.includes("Unown") && records.hasOwnProperty(card.set)) {
      if (
        card.name.endsWith(" ex") ||
        card.name.endsWith("LEGEND") ||
        card.name.endsWith("-EX") ||
        card.name.endsWith("-GX") ||
        card.name.endsWith("V") ||
        card.name.endsWith("VMAX") ||
        card.name.endsWith("VSTAR")
      ) {
        if (parseInt(card.hp) > parseInt(records[card.set][`Rulebox ${card.stage}`].hp)) {
          records[card.set][`Rulebox ${card.stage}`] = {
            name: card.name,
            hp: card.hp
          };
        }
      } else if (parseInt(card.hp) > parseInt(records[card.set][card.stage].hp)) {
        records[card.set][card.stage] = {
          name: card.name,
          hp: card.hp
        };
      }
    }
  }
});

Object.keys(records).forEach(set => {
  Object.keys(records[set]).forEach(stage => {
    if (records[set][stage].hp === 0) {
      delete records[set][stage];
    } else {
      records[set][stage].hp = parseInt(records[set][stage].hp);

      if (process.argv[2] === "-a") {
        const count = records[set][stage].count;

        if (count) {
          delete records[set][stage].count;

          records[set][stage].hp = (records[set][stage].hp / count).toFixed(2);
        }
      }
    }
  });
});

console.log(records);
