const nome = "spiderMan";
let xp = 1001;

if (xp <= 1000) {
  console.log(`O herói ${nome} é nivel Ferro.`);
} else if (xp >= 1001 && xp <= 2000) {
  console.log(`O herói ${nome} é nível Bronze.`);
} else if (xp > 2001 && xp <= 5000) {
  console.log(`O herói ${nome} é nível Prata.`);
} else if (xp > 5001 && xp <= 7000) {
  console.log(`O herói ${nome} é nível Ouro.`);
} else if (xp > 7001 && xp <= 8000) {
  console.log(`O herói ${nome} é nível Platina.`);
} else if (xp > 9001 && xp <= 10000) {
  console.log(`O herói ${nome} é nível Imortal.`);
} else {
  console.log(`O herói ${nome} é nível Radiante.`);
}
