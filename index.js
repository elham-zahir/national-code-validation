export default function nationalCodeValidation(nationalCode) {
  if (nationalCode.length === 8 || nationalCode.length === 9) {
    while (nationalCode.length < 10) {
      nationalCode = "0" + nationalCode;
    }
  }
  if (nationalCode.length !== 10) {
    {
      return "کد ملی باید دقیقا 10 رقم باشد.";
    }
  } else {
    const controlChar = Number(nationalCode.slice(-1));
    let isSame = true;

    for (let i = 0; i < 9; i++) {
      if (Number(nationalCode[i]) !== controlChar) {
        isSame = false;
        break;
      }
    }

    if (isSame) {
      return "کد ملی صحت ندارد.";
    }

    nationalCode = nationalCode.slice(0, -1);
    let sum = 0;
    for (let index = 0; index < 9; index++) {
      sum += (10 - index) * Number(nationalCode[index]);
    }

    sum %= 11;

    if (
      (sum < 2 && controlChar === sum) ||
      (sum >= 2 && controlChar === 11 - sum)
    ) {
      return "";
    }

    return "کد ملی صحت ندارد.";
  }
}
