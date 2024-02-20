sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagementt/Risks/test/integration/FirstJourney',
		'RiskManagementt/Risks/test/integration/pages/RisksList',
		'RiskManagementt/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagementt/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);