// function showMonth(month: string | number) {
//   console.log(month.padStart(2, '0'));
// }

function showMonth(month: string | number) {
  if (typeof month === 'string') {
    console.log(month.padStart(2, '0'));
  } else {
    console.log('error:', typeof month);
  }
}
showMonth('2');
showMonth(4);

// function showMonth(month: string | number) {
//   if (typeof month === 'string') {
//     console.log(month.padStart(2, '0'));
//   }
//   console.log(month.toFixed());
// }

function showMonth_1(month: string | number) {
  if (typeof month === 'string') {
    console.log(month.padStart(2, '0'));
    return;
  }
  console.log(month.toFixed());
}
showMonth_1('2');
showMonth_1(4);

// function getMonth(date: string | Date | null) {
//   if (typeof date === 'object') {
//     console.log(date.getMonth() + 1);
//   }
// }

function getMonth(date: string | Date | null) {
  if (typeof date === 'object' && date != null) {
    console.log(date.getMonth() + 1);
  } else {
    console.log(date);
  }
}
getMonth('3');
getMonth(null);
getMonth(new Date('2023-07-02'));

function getMonth_1(date: string | Date | null) {
  if (date instanceof Date) {
    console.log(date.getMonth() + 1);
  } else {
    console.log(date);
  }
}
getMonth_1('4');
getMonth_1(null);
getMonth_1(new Date('2023-09-23'));

interface Wizard {
  castMagic(): void;
}
interface SwordMan {
  slashSword(): void;
}
function attack(player: Wizard | SwordMan) {
  if ('castMagic' in player) {
    player.castMagic();
  } else {
    player.slashSword();
  }
}
attack({
  castMagic: () => {
    console.log('cast magic');
  },
});
attack({
  slashSword: () => {
    console.log('slash sword');
  },
});

function isWizard(player: Wizard | SwordMan): player is Wizard {
  return 'castMagic' in player;
}
function attack_1(player: Wizard | SwordMan) {
  if (isWizard(player)) {
    player.castMagic();
  } else {
    player.slashSword();
  }
}
attack_1({
  castMagic: () => {
    console.log('cast magic');
  },
});
attack_1({
  slashSword: () => {
    console.log('slash sword');
  },
});

function getMonth_2(date: string | Date | null) {
  const isDate = date instanceof Date;
  if (isDate) {
    console.log(date.getMonth() + 1);
  } else {
    console.log(date);
  }
}
getMonth_2('5');
getMonth_2(null);
getMonth_2(new Date('2023-12-31'));
