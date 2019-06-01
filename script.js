function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function daysInYear(year) {
    const commonYearDays = 365;
    const leapYearDays = 366;
    const isPositiveInt = (Number.isInteger(year) && year > 0);
    const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    if (isPositiveInt) {
        if (isLeapYear) {
            return leapYearDays;
        } else {
            return commonYearDays;
        }
    } else {
        throw new UserException('incorrect input data');
    }
}

try {
    console.log(daysInYear("23"));
} catch (e) {
    console.log('\x1b[41m\x1b[37m%s\x1b[0m', e.name);
    console.log(e.message);
}
