# صحت سنجی کد ملی ایرانی

این پلاگین برای اعتبارسنجی کد ملی ایران طراحی شده است. با استفاده از این پلاگین می‌توانید صحت کد ملی‌های ایرانی را بررسی کنید.

### نحوه استفاده

#### نصب

برای نصب این پلاگین از npm استفاده کنید:

```
npm install national-code-validation
```

#### استفاده

پس از نصب، می‌توانید این پلاگین را در پروژه خود وارد کرده و از آن برای اعتبارسنجی کد ملی استفاده کنید:

```
import nationalCodeValidation from 'national-code-validation';

const result = nationalCodeValidation('1234567891');

if (result === '') {
  console.log('کد ملی صحیح است');
} else {
  console.log(result);  // در صورتی که کد ملی صحیح نباشد، پیغام خطا نمایش داده می‌شود
}
```

#### ورودی‌ها

این پلاگین یک ورودی به نام nationalCode دریافت می‌کند که باید یک رشته از اعداد (کد ملی) باشد. طول این رشته باید دقیقاً ۱۰ رقم باشد. اگر کد ملی ۸ یا ۹ رقم داشته باشد، به طور خودکار صفرهای ابتدایی اضافه می‌شود تا طول آن به ۱۰ رقم برسد. چنانچه تمام ارقام ورودی با هم برابر باشند، کد ملی صحت ندارد.

#### خروجی‌ها

این پلاگین یک رشته را باز می‌گرداند:

- اگر کد ملی معتبر باشد (طبق الگوریتم موجود)، رشته خالی ('') باز می‌گردد.
- اگر کد ملی نامعتبر باشد، پیغام خطای مربوطه باز می‌گردد، مانند: "کد ملی باید دقیقا ۱۰ رقم باشد." یا "کد ملی صحت ندارد."

### نحوه عملکرد اعتبارسنجی

طول کد ملی: کد ملی باید دقیقاً ۱۰ رقم داشته باشد. در صورتی که کد ملی ۸ یا ۹ رقم داشته باشد، صفرهای ابتدایی به آن اضافه می‌شود تا طول آن به ۱۰ برسد.

رقم کنترلی: آخرین رقم کد ملی به عنوان "رقم کنترلی" شناخته می‌شود. برای اعتبارسنجی، ابتدا رقم کنترلی کنار گذاشته می‌شود و سپس روی ۹ رقم باقی‌مانده محاسبات انجام می‌شود.

الگوریتم محاسباتی:

- هر یک از ۹ رقم باقی‌مانده به ترتیب با وزن‌هایی از ۱۰ تا ۲ ضرب می‌شود.(رقم اول از سمت چپ وزن 10 دارد.)
- حاصل ضرب‌ها با هم جمع می‌شوند.
- باقی‌مانده این مجموع بر ۱۱ گرفته می‌شود.
- اگر باقی‌مانده کمتر از ۲ باشد و با رقم کنترلی برابر باشد، کد ملی صحیح است.
- اگر باقی‌مانده بزرگتر از ۲ باشد و رقم کنترلی برابر با ۱۱ منهای باقی‌مانده باشد، کد ملی نیز صحیح است.
- ملاحظات اضافی: این الگوریتم صحت ساختار کد ملی را بررسی می‌کند، اما سه رقم سمت چپ کد ملی که نشان‌دهنده محل صدور کد ملی هستند را بررسی نمی‌کند. بنابراین ممکن است یک کد ملی از نظر محاسبات صحیح باشد، اما مربوط به شهری نباشد که در سیستم ثبت‌نام کد ملی ایران معتبر باشد.

### محدودیت‌ها

- این پلاگین فقط ساختار کد ملی را بررسی می‌کند و اعتبار شهر صادرکننده کد ملی را تایید نمی‌کند.
- برای بررسی صحت کامل کد ملی (از جمله محل صدور)، باید از سامانه‌های رسمی دیگر استفاده کنید.

#### ورودی صحیح

```
const result = nationalCodeValidation('1234567891');
console.log(result);  // خروجی: '' (کد ملی صحیح است)
```

#### ورودی نامعتبر

```
const result = nationalCodeValidation('123456');
console.log(result);  // خروجی: "کد ملی باید دقیقا ۱۰ رقم باشد."
```

#### ورودی نامعتبر (کد ملی غلط)

```
const result = nationalCodeValidation('1111111111');
console.log(result);  // خروجی: "کد ملی صحت ندارد."
```

#

### لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

#### MIT License

Copyright (c) 2024 elham zahir

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
