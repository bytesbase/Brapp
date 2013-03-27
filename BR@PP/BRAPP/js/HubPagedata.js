(function () {
    "use strict";
    
    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    // TODO: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    generateSampleData().forEach(function (item) {
        list.push(item);
    });



    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        for (var i = 0; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }


    // Returns an array of sample data that can be added to the application's
    // data list. 
    function generateSampleData() {
        var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";
        var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
        var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";
        var RecordType1 = Object.freeze({
            Header1: 1,
            Events1: 2,
            MoviesFirst1: 3,
            MoviesSecond1: 4,
            HeaderTickets1: 5,
            MoviesTickets1: 6,
            PlaysTickets1: 7,
            EventTickets1: 8,
            SportTickets1: 9,
            Mybooking1: 10,
        });

        // These three strings encode placeholder images. You will want to set the
        // backgroundImage property in your real data to be URLs to images.
        var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
        var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
        var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

        // Each of these sample groups must have a unique key to be displayed
        // separately.
<<<<<<< HEAD
        /*var sampleGroups = [
            { key: "group1", title: "Events in your city", subtitle: "", backgroundImage: darkGray, description: groupDescription },
            { key: "group2", title: "Movies in town", subtitle: "", backgroundImage: lightGray, description: groupDescription },
            { key: "group3", title: "My bookings", subtitle: "", backgroundImage: mediumGray, description: groupDescription },
            { key: "group4", title: "Book tickets", subtitle: "", backgroundImage: lightGray, description: groupDescription },
=======
        var groups = [
            { key: "group1", title: "Moods", subtitle: "", backgroundImage: darkGray, description: groupDescription },
            { key: "group2", title: "Sugestions", subtitle: "", backgroundImage: lightGray, description: groupDescription },
            { key: "group3", title: "Jokes", subtitle: "", backgroundImage: mediumGray, description: groupDescription },
            { key: "group4", title: "", subtitle: "", backgroundImage: lightGray, description: groupDescription },
>>>>>>> origin/Yoshi-dev
            { key: "group5", title: "Group Title: 5", subtitle: "", backgroundImage: mediumGray, description: groupDescription },
            { key: "group6", title: "Group Title: 6", subtitle: "", backgroundImage: darkGray, description: groupDescription }
        ];*/

        // Each of these sample items should have a reference to a particular
        // group.
        var sampleItems = [
            { group: groups[0], title: "Moods", subtitle: "", recordType: RecordType1.Header1, description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[0], title: "Title", titleSub: "sub title", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Events1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            
            { group: groups[2], title: "Sugestions", subtitle: "Item Subtitle: 1", recordType: RecordType1.HeaderTickets1, description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            { group: groups[2], title: "gfhdh", subtitle: "Item Subtitle: 2", recordType: RecordType1.MoviesTickets1, description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[2], title: "gfhdh", subtitle: "Item Subtitle: 2", recordType: RecordType1.PlaysTickets1, description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: groups[2], title: "gfhdh", subtitle: "Item Subtitle: 3", recordType: RecordType1.EventTickets1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: groups[2], title: "gfhdh", subtitle: "Item Subtitle: 3", recordType: RecordType1.SportTickets1, description: itemDescription, content: itemContent, backgroundImage: darkGray },

            { group: groups[3], title: "Jokes", subtitle: "Item Subtitle: 1", recordType: RecordType1.HeaderTickets1, description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            { group: groups[3], title: "Joke", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#df6072" },
            { group: groups[3], title: "Joke", titleSub: "2 <p><b>qsdfqsdf</b></p> <button>value</button>tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#d85366" },
            { group: groups[3], title: "Joke", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#cd4458" },
            { group: groups[3], title: "", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#c4374c" },
            { group: groups[3], title: "Movie", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#c4374c" },
            { group: groups[3], title: "Movie", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#cd4458" },
            { group: groups[3], title: "Movie", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#d85366" },
            { group: groups[3], title: "Movie", titleSub: "2 tickets (rs. 320)", textDay: "saturday 13 jan", textTime: "timing: 7-11pm", recordType: RecordType1.Mybooking1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#df6072" },
        ];

        return sampleItems;
    }
    WinJS.Namespace.define("HubPagedata", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });
})();
