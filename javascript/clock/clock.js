export function at(hour = 0, minute = 0) {
    return {
        toString: function () {
            hour += Math.floor(minute / 60)
            minute %= 60;
            hour %= 24
            if (hour >= 0 && minute >= 0) {
                return `${hour < 10 ? '' + 0 + hour : hour}${`:`}${minute < 10 ? '' + 0 + minute : minute}`
            } else {
                if (hour < 0) {
                    hour = 24 + (hour % 24)
                }
                if (minute < 0) {
                    minute = 60 + (minute % 60)
                }
                return `${hour < 10 ? '' + 0 + hour : hour}${`:`}${minute < 10 ? '' + 0 + minute : minute}`
            }
        }
        , plus: function (min) {
            return at(hour, minute + min);
        }
        , minus: function (min) {
            return at(hour, minute - min);
        }
        , equals: function (secondClock) {
            return at(hour, minute) == secondClock.toString()
        }
    }
}