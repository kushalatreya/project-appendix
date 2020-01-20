module.exports = {
  normalizeErrors: function(errors) {
    let normalizeErrors = [];

    for (let property in errors) {
      if (errors.hasOwnProperty(property)) {
        // console.log(property, errors[property]);
        normalizeErrors.push({
          title: property,
          details: errors[property].message
        });
      }
    }
    return normalizeErrors;
  }
};
