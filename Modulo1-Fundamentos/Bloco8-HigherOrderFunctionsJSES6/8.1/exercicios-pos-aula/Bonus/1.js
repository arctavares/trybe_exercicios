const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

function dragonDamage() {
  return Math.floor(Math.random() * (dragon.strength - 14)) + 15;
}

function warriorDamage() {
  return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;
}

function mageDamageAndManaUsed() {
  return {
    damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence,
    mana: mage.mana >= 15 ? mage.mana -= 15 : 'Não possui mana suficiente',
  }
}

const gameActions = {
  warriorRound: (warriorD) => {
    let damage = warriorD();
    dragon.healthPoints -= damage;
    (typeof (warrior.damage) === undefined) ? warrior.damage += damage : warrior.damage = damage;
    return [warrior, dragon];
  },
  mageRound: (mageDM) => {
    let damageAndManaObject = mageDM();
    dragon.healthPoints -= damageAndManaObject.damage;
    mage.mana -= damageAndManaObject.mana;
    (typeof (mage.damage) === undefined) ? mage.damage += damageAndManaObject.damage : mage.damage = damageAndManaObject.damage;
    return [mage, dragon];
  },
  dragonRound: (dragonDamage) => {
    let damage = dragonDamage();
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    (typeof (dragon.damage) === undefined) ? dragon.damage += damage : dragon.damage = damage;
    return [warrior, mage, dragon];
  },
  roundResult: () => {
    let WarriorResult = gameActions.warriorRound(warriorDamage);
    let MageResult = gameActions.mageRound(mageDamageAndManaUsed);
    let DragonResult = gameActions.dragonRound(dragonDamage);

    return WarriorResult, MageResult, DragonResult;
  }
};

function displayStatus(array) {
  let keys = Object.keys(array);
  let values = Object.values(array);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(`${keys[i]} = ${values[i]}`);
  }
}

function RoundResult() {
  let result = gameActions.roundResult();
  console.log('Round Result:');
  console.log('\nWarrior Status:');
  displayStatus(result[0]);
  console.log('\nMage Status:');
  displayStatus(result[1]);
  console.log('\nDragon Status:');
  displayStatus(result[2]);
  console.log('');
}

function play(NumberOfRounds) {
  for (let i = 0; i < NumberOfRounds; i += 1) {
    RoundResult();
    if (dragon.healthPoints <= 0) {
      console.log('O dragão foi derrotado! Parabéns Guerreiros!');
    }else{
    console.log('Prepare-se para o proximo round \n');
  }
  }
}

console.log(play(3));

// FALTOU IMPEDIR QUE O MAGO E GUERREIRO ATAQUEM CASO ESTIVEREM MORTOS
// VERIFICAR PORQUE O MAGO ESTÁ COM 0 DE MANA NO PRIMEIRO ROUND