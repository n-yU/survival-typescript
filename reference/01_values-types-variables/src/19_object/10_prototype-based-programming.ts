const button = {
  name: 'ボタン',
};
const dangerousButton = Object.create(button);
dangerousButton.name = '絶対に押すなよ？';
console.log(button.name, dangerousButton.name);

const counter = {
  count: 0,
  countUp() {
    this.count++;
  },
};
const resettableCounter = Object.create(counter);
resettableCounter.reset = function () {
  this.count = 0;
};
resettableCounter.countUp();
console.log(resettableCounter.count);
resettableCounter.reset();
console.log(resettableCounter.count);

class Counter {
  count: number;
  constructor() {
    this.count = 0;
  }
  countUp() {
    this.count++;
  }
}
class ResettableCounter extends Counter {
  reset() {
    this.count = 0;
  }
}
const resettableCounter_ = new ResettableCounter();
resettableCounter_.countUp();
resettableCounter_.countUp();
console.log(resettableCounter_.count);
resettableCounter_.reset();
console.log(resettableCounter_.count);
