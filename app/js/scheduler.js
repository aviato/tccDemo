(function(){

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
            name: 'CR-Z',
            availableYears: generateYears(1990, 2016),
            configurations: [
              'EX Hybrid',
              'EX-L Hybrid',
              'LX Hybrid'
            ]
          },
          {
            name: 'CR-V',
            availableYears: generateYears(1990, 2016),
            configurations: [
              'EX 2.4L FWD',
              'EX 2.4L AWD',
              'EX-L 2.4L FWD',
              'EX-L 2.4L AWD'
            ]
          },
        ]
      },
      Toyota: {
        models: [
          {
            name: '4Runner',
            availableYears: generateYears(1990, 2016),
            configurations: [
              'Limited RWD Automatic',
              'Limited 4WD Automatic',
              'SR5 RWD Automatic',
              'SR5 4WD Automatic'
            ]
          },
          {
            name: 'Camry',
            availableYears: generateYears(1990, 2016),
            configurations: [
              'Hybrid LE 2.5L CVT',
              'Hybrid SE 2.5L CVT',
              'Hybrid XLE 2.5L CVT',
              'LE 2.5L Automatic'
            ]
          },
          {
            name: 'Corolla',
            availableYears: generateYears(1990, 2016),
            configurations: [
              'L 1.8L Automatic',
              'L 1.8L Manual',
              'LE 1.8L CVT',
              'LE Eco 1.8L CVT'
            ]
          },
        ]
      },
      Subaru: {
        models: [
          {
            name: 'Outback',
            availableYears: generateYears(1990, 2016),
            configurations: [
              '2.5i 2.5L CVT',
              '2.5i Limited 2.5L CVT',
              '2.5i Premium 2.5L CVT',
              '3.6R Limited 3.6L CVT'
            ]
          },
          {
            name: 'Impreza',
            availableYears: generateYears(1990, 2016),
            configurations: [
              'Base Manual',
              'Base CVT',
              'Limited CVT',
              'Premium CVT'
            ]
          },
          {
            name: 'Legacy',
            availableYears: generateYears(1990, 2016),
            configurations: [
              '2.5i 2.5L CVT',
              '2.5i Limited 2.5L CVT',
              '2.5i Premium 2.5L CVT',
              '2.5i Touring 2.5L CVT'
            ]
          },
        ]
      }
    }
  };

  var generatedYears = generateYears(1990, 2016);
  var manufacturers  = Object.getOwnPropertyNames(mockData.manufacturers);

  $(function() {

    var make,
        makeName,
        modelYear,
        model,
        modelConfigs,
        models,
        modelName,
        vehicleConfig;

    // set initial state of forms to hidden
    $('.model-year-container').hide();
    $('.model-container').hide();
    $('.vehicle-config-container').hide();
    $('.ms-helper').hide();

    // initialize magicsuggest forms with no data
    make = $('#make').magicSuggest({
      data: manufacturers,
      maxSelection: 1
    });

    modelYear = $('#model-year').magicSuggest({
      data: [],
      maxSelection: 1
    });

    model = $('#model').magicSuggest({
      data: [],
      maxSelection: 1
    });

    vehicleConfig = $('#vehicle-config').magicSuggest({
      data: [],
      maxSelection: 1
    });


    $(make).on('selectionchange', function(e, m){

      if (this.getSelection()[0] !== undefined){
        makeName = this.getSelection()[0].name;
      }

      if (modelYear.getSelection().length || model.getSelection().length || vehicleConfig.getSelection().length) {
        $('.model-year-container').hide();
        $('.model-container').hide();
        $('.vehicle-config-container').hide();
        modelYear.clear();
        model.clear();
        vehicleConfig.clear();
      }

      modelYear.setData(generatedYears);

      if (this.getValue().length) {
        $('.model-year-container').show();
      }

    });


    $(modelYear).on('selectionchange', function(e, m){
      models = mockData.manufacturers[makeName].models.map(function(model){ return model.name; })

      if (model.getSelection().length || vehicleConfig.getSelection().length) {
        $('.model-container').hide();
        $('.vehicle-config-container').hide();
        model.clear();
        vehicleConfig.clear();
      }

      model.setData(models);

      if (this.getValue().length) {
        $('.model-container').show();
      }

    });


    $(model).on('selectionchange', function(e, m){

      if (model.getSelection()[0] !== undefined) {
        modelName = model.getSelection()[0].name;
        modelConfigs = mockData.manufacturers[makeName].models.filter(function(model) {
          return model.name === modelName;
        })[0].configurations;
      }

      if (vehicleConfig.getSelection().length) {
        $('.vehicle-config-container').hide();
        vehicleConfig.clear();
      }

      vehicleConfig.setData(modelConfigs);

      if (this.getValue().length) {
        $('.vehicle-config-container').show();
        $('.btn').removeClass('btn-danger');
        $('.btn').removeClass('disabled');
        $('.btn').addClass('btn-success');
      } else {
        $('.btn').addClass('btn-danger');
        $('.btn').addClass('disabled');
        $('.btn').removeClass('btn-success');
      }

    });

  });

})();
