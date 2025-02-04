export const scheduleData = {
    pageTitle: "Schedule | ZoomCare",
    navigation: {
        highlightedTextClass: /w--current/,
        schedule: 'Schedule'
    },
    directLinkButtons: [ "Clinic Care", "VideoCare (TM)" ],
    testCase: {
        blankSearch: {
            service: "Choose Service",
            date: "Choose Date"
        },
        defaultSearch: {
            filters: {
                location: "Portland, OR",
                service: "Illness/Injury",
                date: /Today|Tomorrow/
            },
            searchResults: {
                tableHeader: "Illness/Injury Clinic Visit",
            }        
        }
    }
    
}