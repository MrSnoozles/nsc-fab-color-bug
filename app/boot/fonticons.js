import Vue from 'nativescript-vue'
import {TNSFontIcon} from 'nativescript-akylas-fonticon'

TNSFontIcon.debug = false
TNSFontIcon.paths = {
    "fa": './assets/fontawesome.css',
}
TNSFontIcon.loadCssSync()



function fonticon(values) {
    if (!values) {
        return undefined;
    }
    if (!Array.isArray(values)) {
        values = [values];
    }

    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (value.indexOf('-') > -1) {
            var prefix = value.split('-')[0];
            var result = TNSFontIcon.css[prefix][value];
            if (TNSFontIcon.debug) {
                console.log("found fonticon " + result + " for " + values);
            }
            if (result) {
                return result;
            }

        }
        else {
            return value;
        }
    }
    return values[0];
}

Vue.filter('fonticon', fonticon);
