/*!
    current-year - 1.0.0
    Author: Amine Amazou
    Description: A lightweight JavaScript library that simplifies displaying the current year in HTML elements. Perfect for automating copyright dates and ensuring your content stays accurate without manual updates. Easy to use, minimal setup, and highly efficient!
    Copyright © 2024 amazou
    Licensed under the MIT license.
    https://github.com/amine-amazou/current-year/blob/main/LICENSE
*/

;let CurrentYear = (function(d){
    "use strict"

    const DIRECTIVE = 'current-year';


    function getCurrentDate() {
        if(d.now !== undefined) return new d(d.now())
        else return new d();
    }

    function currentYear() {
        return getCurrentDate().getFullYear();
    }
    
    function removeDirective(fromElement) {
        fromElement.removeAttribute(DIRECTIVE)
        return true;
    }

    function getElementTagName(element) {
        return element.tagName;
    }

    function isTag(tagName, element) {
        return getElementTagName(element) == tagName;
    }

    function isInputTag(element) {
        return isTag('INPUT', element);
    }

    function isNotInputTag(element) {
        return !(isInputTag(element));
    }

    function isOptionTag(element) {
        return isTag('OPTION', element);
    }

    function extractCurrentYearValueIn(element) {
        let currentYearValue = currentYear();
        if(isNotInputTag(element)) 
            if(element.innerText !== undefined) element.innerText = currentYearValue;
            else element.innerHTML = currentYearValue;
        if(isOptionTag(element) || isInputTag(element)) element.value = currentYearValue
        return true;
    }

    function selectAllElementsIncludesDirective() {
        return document.querySelectorAll(`[${DIRECTIVE}]`)
    }

    function AfterDomContentLoaded(fn) {
        let callbackWithCleanUp = fn;
        try {
            let callbackWithCleanUp = function() {
                window.removeEventListener('DOMContentLoaded', callbackWithCleanUp);
                fn();
            }
        } finally {
            window.addEventListener('DOMContentLoaded', callbackWithCleanUp);
        }
        return true;
    }

    class CurrentYear {

        /**
         * This function returns the current year
         *
         * @since 1.0.0
         * @returns {Number} Returns the current year.
        */

        static get(addition = 0) {
            let c = getCurrentDate().getFullYear();
            return +c + addition;
        }
        
        /**
         * This function takes a callback and executes it using the current year value as a parameter
         *
         * @since 1.0.0
         * @returns {void}
        */

        static use(callback, addition = 0) {
            let y = this.get(addition);
            return callback(y);
        }

        /**
         * This function applies the current year directive after the DOM content loaded
         *
         * @since 1.0.0
         * @returns {Boolean} Returns true if everything is done right.
        */

        static applyDirective() {
            return AfterDomContentLoaded(() => {
                selectAllElementsIncludesDirective().forEach(element => {
                    extractCurrentYearValueIn(element);
                    removeDirective(element);
                });
            });
        }
    }
    
    return CurrentYear;
})(Date);
