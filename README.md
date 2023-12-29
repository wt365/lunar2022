# Lunar Dates 2024

a piece of javascript code that returns the Chinese lunar calendar dates for dates in 2024 (Gregorian calendar).

## Usage

First, include `lunar2024.js`.

Then, call the function `lunar2024.go(M, D)` in your own script. It will return a string of the Chinese lunar calendar date.

## Function Syntax

> lunar2024.go(M, D)

### Parameters:
* M: a **Number**, indicating the month of the Gregorian date (1 to 12 for Jan to Dec). 
* D: a **Number**, indicating the day of the Gregorian date (1 to 29/30/31). 
* If only one parameters is given, the default day will be the 1st of that month; if no parameter is given at all, the default date will be Jan 1st.

### Return value:
* This function returns a **string** of the correspondent lunar calendar date in Chinese.
* If one or more invalid value is provided to parameter M or D, this function will return **'Invalid Date'**.

## Example

HTML

```html
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="lunar2024.js"></script>
</head>
<body>
	<!-- your own content -->
</body>
</html>
```

Javascript

```javascript
const a = lunar2024.go(3, 22);
document.write(a); // Will output '甲辰年二月十三'.
```
