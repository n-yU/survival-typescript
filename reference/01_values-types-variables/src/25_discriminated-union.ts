type UploadStatus = InProgress | Success | Failure;
type InProgress = { done: boolean; progress: number };
type Success = { done: boolean };
type Failure = { done: boolean; error: Error };

function printStatus(status: UploadStatus) {
  if (status.done) {
    if ('error' in status) {
      console.log(`アップロード失敗:${status.error.message}`);
    } else {
      console.log('アップロード成功');
    }
  } else if ('progress' in status) {
    console.log(`アップロード中:${status.progress}%`);
  }
}
const prg: InProgress = { done: false, progress: 7 };
const suc: Success = { done: true };
const fal: Failure = { done: true, error: new Error('error') };
for (const obj of [prg, suc, fal]) {
  printStatus(obj);
}

type UploadStatus_1 = InProgress_1 | Success_1 | Failure_1;
type InProgress_1 = { type: 'InProgress'; progress: number };
type Success_1 = { type: 'Success' };
type Failure_1 = { type: 'Failure'; error: Error };

function printStatus_1(status: UploadStatus_1) {
  if (status.type === 'InProgress') {
    console.log(`アップロード中:${status.progress}%`);
  } else if (status.type === 'Success') {
    console.log('アップロード成功', status);
  } else if (status.type === 'Failure') {
    console.log(`アップロード失敗:${status.error.message}`);
  } else {
    console.log('不正なステータス: ', status);
  }
}

function printStatus_2(status: UploadStatus_1) {
  switch (status.type) {
    case 'InProgress':
      console.log(`アップロード中:${status.progress}%`);
      break;
    case 'Success':
      console.log('アップロード成功', status);
      break;
    case 'Failure':
      console.log(`アップロード失敗:${status.error.message}`);
      break;
    default:
      console.log('不正なステータス: ', status);
  }
}

const prg_1: InProgress_1 = { type: 'InProgress', progress: 7 };
const suc_1: Success_1 = { type: 'Success' };
const fal_1: Failure_1 = { type: 'Failure', error: new Error('error') };
for (const obj of [prg_1, suc_1, fal_1]) {
  printStatus_1(obj);
  printStatus_2(obj);
}

type OkOrBadRequest =
  | { statusCode: 200; value: string }
  | { statusCode: 400; message: string };

function handleResponse(x: OkOrBadRequest) {
  if (x.statusCode === 200) {
    console.log(x.value);
  } else {
    console.log(x.message);
  }
}

const req200: { statusCode: 200; value: string } = {
  statusCode: 200,
  value: 'abc',
};
const req400: { statusCode: 400; message: string } = {
  statusCode: 400,
  message: 'def',
};
for (const obj of [req200, req400]) {
  handleResponse(obj);
}

type OkOrNotOk = { isOK: true; value: string } | { isOK: false; error: string };
function handleStatus(x: OkOrNotOk) {
  if (x.isOK) {
    console.log(x.value);
  } else {
    console.log(x.error);
  }
}

const ok: { isOK: true; value: string } = { isOK: true, value: 'hoge' };
const notOk: { isOK: false; error: string } = { isOK: false, error: 'fuga' };
for (const obj of [ok, notOk]) {
  handleStatus(obj);
}

type Result = { error: null; value: string } | { error: Error };
function handleResult(result: Result) {
  if (result.error === null) {
    console.log(result.value);
  } else {
    console.log(result.error);
  }
}

const res: { error: null; value: string } = { error: null, value: 'tokyo' };
const nores: { error: Error } = { error: new Error('error') };
for (const obj of [res, nores]) {
  handleResult(obj);
}

type Result_1 = { error: undefined; value: string } | { error: Error };
function handleResult_1(result: Result_1) {
  if (result.error) {
    console.log(result.error);
  } else {
    console.log(result.value);
  }
}

const res_1: { error: undefined; value: string } = {
  error: undefined,
  value: 'osaka',
};
for (const obj of [res_1, nores]) {
  handleResult_1(obj);
}

type Shape =
  | { type: 'circle'; color: string; radius: number }
  | { type: 'square'; color: string; size: number };

function toCSS(shape: Shape) {
  const { type, color } = shape;
  switch (type) {
    case 'circle':
      return {
        background: color,
        borderRadius: shape.radius,
      };
    case 'square':
      return {
        background: color,
        width: shape.size,
        height: shape.size,
      };
  }
}

const circle: { type: 'circle'; color: string; radius: number } = {
  type: 'circle',
  color: 'blue',
  radius: 42,
};
const square: { type: 'square'; color: string; size: number } = {
  type: 'square',
  color: 'red',
  size: 21,
};
for (const obj of [circle, square]) {
  console.log(toCSS(obj));
}
