
/**
 * hasProps function returns true if
 * propertie exists in the object
 * @param {object} object 
 * @param {string} prop 
 */

const hasProp = (object = {}, prop = '') => Object.prototype.hasOwnProperty.call(object, prop);

/**
 * Returns true if lpTag is loaded and newPage is loaded
 */

const lpTagLoaded = () => hasProp(window, 'lpTag') && hasProp(window.lpTag, 'newPage');

/**
 * Calls newpage function which will render
 * the correct engagement for the parameters 
 * specified.
 * 
 * @param {array} section 
 * @param {string} url 
 */

const lpTagNewPage = (section = [], url = document.URL) => {
    const { lpTag } = window;
    lpTag.newPage(url, {
        section: section
    });
}

export {
    lpTagLoaded,
    lpTagNewPage
};