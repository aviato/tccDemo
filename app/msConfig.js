var generateYears = function(start, end) {
  var results = [];
  for (var year = start; year <= end; year += 1) {
    results.push(year.toString());
  }
  return results;
};

var mockData = {
  manufacturers: {
    Honda: {
      models: [
        {
          name: 'Accord',
          availableYears: generateYears(1990, 2016),
          configurations: [
            'EX 2.4L Manual',
            'EX 2.4L CVT',
            'EX-L 2.4L Manual',
            'EX-L 2.4L Automatic'
          ]
        },
        {
          name: 'Civic',
          availableYears: generateYears(1990, 2016),
          configurations: [
            'EX 2.4L Manual',
            'EX 2.4L CVT',
            'EX-L 2.4L Manual',
            'EX-L 2.4L Automatic'
          ]
        },
        {
          name: 'CR-V',
          availableYears: generateYears(1990, 2016),
          configurations: [
            'EX 2.4L Manual',
            'EX 2.4L CVT',
            'EX-L 2.4L Manual',
            'EX-L 2.4L Automatic'
          ]
        },
      ]
    },
    Toyota: {},
    Subaru: {},
    GMC:    {}
  }
};

var generatedYears = generateYears(1990, 2016);
var manufacturers  = Object.getOwnPropertyNames(mockData.manufacturers);

angular.module('msConfig', ['magicSuggest'])
  .run(function(msSetupService) {

    msSetupService.pushConfig('makeConfig', {
      data: manufacturers,
      maxSelection: 1,
    });

    msSetupService.pushConfig('modelYearConfig', {
      data: generatedYears,
      maxSelection: 1,
    });

    // msSetupService.pushConfig('modelConfig', {
    //   data: mockData.manufacturers.Honda.models.map(function(model){return model.name;}),
    //   maxSelection: 1,
    // });

  });


