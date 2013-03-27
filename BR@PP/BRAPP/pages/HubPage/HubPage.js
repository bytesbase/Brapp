(function () {
    "use strict";


    var appView = Windows.UI.ViewManagement.ApplicationView;
    var appViewState = Windows.UI.ViewManagement.ApplicationViewState;
    var nav = WinJS.Navigation;
    var ui = WinJS.UI;
    var utils = WinJS.Utilities;
    var itemRenderer;

    var RecordType = Object.freeze({
        Header: 1,
        Events: 2,
        MoviesFirst: 3,
        MoviesSecond: 4,
        HeaderTickets: 5,
        MoviesTickets: 6,
        PlaysTickets: 7,
        EventTickets: 8,
        SportTickets: 9,
        Mybooking: 10
    });

    ui.Pages.define("/pages/HubPage/HubPage.html", {
        // Navigates to the groupHeaderPage. Called from the groupHeaders,
        // keyboard shortcut and iteminvoked.
        navigateToGroup: function (key) {
            if (key == "group1") {
                nav.navigate("/pages/EventsPage/EventsPage.html", { groupKey: key });
            }
            if (key == "group2") {
                nav.navigate("/pages/MoviesPage/MoviesPage.html", { groupKey: key });
            }
            if (key == "group3") {
                nav.navigate("/pages/BookingsPage/BookingsPage.html", { groupKey: key });
            }
            if (key == "group4") {
                nav.navigate("/pages/BookingsPage/BookingsPage.html", { groupKey: key });
            }
        },


        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var listView = element.querySelector(".groupeditemslist").winControl;
            listView.groupHeaderTemplate = element.querySelector(".headertemplate");
            listView.itemTemplate = element.querySelector(".itemtemplate");
            listView.oniteminvoked = this._itemInvoked.bind(this);

            // Set up a keyboard shortcut (ctrl + alt + g) to navigate to the
            // current group when not in snapped mode.
            listView.addEventListener("keydown", function (e) {
                if (appView.value !== appViewState.snapped && e.ctrlKey && e.keyCode === WinJS.Utilities.Key.g && e.altKey) {
                    var data = listView.itemDataSource.list.getAt(listView.currentItem.index);
                    this.navigateToGroup(HubPagedata.group.key);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }.bind(this), true);

            this._initializeLayout(listView, appView.value);
            //listView.element.focus();
            sendTileLocalImageNotification();
        },
        groupInfo: function () {
            return {
                enableCellSpanning: true,

                cellWidth: 1 + 9.2,
                cellHeight: 1 + 10

            };
        },
        computeItemSize: function (index) {
            var size = {
                width: 295,
                height: 95
            };

            if (index != null) {
                index = index + 1;
                if (typeof (index) === "number") {
                    if (HubPagedata.items._groupedItems[index] != undefined) {
                        if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.Header) {
                            size.width = 600;
                            size.height = 95
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.Events) {
                            size.width = 295;
                            size.height = 123;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.MoviesFirst) {
                            size.width = 400;
                            size.height = 500;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.MoviesSecond) {
                            size.width = 400;
                            size.height = 500;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.HeaderTickets) {
                            size.width = 600;
                            size.height = 95;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.PlaysTickets) {
                            size.width = 600;
                            size.height = 95;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.MoviesTickets) {
                            size.width = 600;
                            size.height = 95;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.EventTickets) {
                            size.width = 600;
                            size.height = 95;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.SportTickets) {
                            size.width = 600;
                            size.height = 95;
                        }
                        else if (HubPagedata.items._groupedItems[index].data.recordType === RecordType.Mybooking) {
                            size.width = 295;
                            size.height = 95;
                        }
                    }
                }
            }
            return size;
        },
        renderItem: function (item, recycledElement) {
            var renderer = document.querySelector(".itemtemplate");
            if (item._value.data.recordType === RecordType.Header) {
                renderer = document.querySelector(".HeaderBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.Events) {
                renderer = document.querySelector(".EventsBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.MoviesFirst) {
                renderer = document.querySelector(".MoviesFirstBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.MoviesSecond) {
                renderer = document.querySelector(".MoviesSecondBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.HeaderTickets) {
                renderer = document.querySelector(".HeaderTicketsBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.MoviesTickets) {
                renderer = document.querySelector(".MoviesTicketsBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.PlaysTickets) {
                renderer = document.querySelector(".PlaysTicketsBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.EventTickets) {
                renderer = document.querySelector(".EventTicketsBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.SportTickets) {
                renderer = document.querySelector(".SportTicketsBoxTemplate");
            }
            else if (item._value.data.recordType === RecordType.Mybooking) {
                renderer = document.querySelector(".MybookingBoxTemplate");
            }
            if (renderer.renderItem != null)
                return renderer.renderItem.call(this, item, recycledElement);
                 else
                return renderer;
        },

        // This function updates the page layout in response to viewState changes.
        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            var listView = element.querySelector(".groupeditemslist").winControl;
            if (lastViewState !== viewState) {
                if (lastViewState === appViewState.snapped || viewState === appViewState.snapped) {
                    var handler = function (e) {
                        listView.removeEventListener("contentanimating", handler, false);
                        e.preventDefault();
                    }
                    listView.addEventListener("contentanimating", handler, false);
                    this._initializeLayout(listView, viewState);
                }
            }
        },

        // This function updates the ListView with new layouts
        _initializeLayout: function (listView, viewState) {
            /// <param name="listView" value="WinJS.UI.ListView.prototype" />

            if (viewState === appViewState.snapped) {
                listView.itemDataSource = HubPagedata.groups.dataSource;
                listView.groupDataSource = null;
                listView.layout = new ui.ListLayout();
            } else {
                listView.itemDataSource = HubPagedata.items.dataSource;
                listView.groupDataSource = HubPagedata.groups.dataSource;
                listView.itemTemplate = this.renderItem;
                listView.layout = new ui.GridLayout({
                    groupHeaderPosition: "top",
                    groupInfo: this.groupInfo,
                    itemInfo: this.computeItemSize
                });
            }
        },

        _itemInvoked: function (args) {
            if (appView.value === appViewState.snapped) {
                // If the page is snapped, the user invoked a group.
                var group = HubPagedata.groups.getAt(args.detail.itemIndex);
                this.navigateToGroup(group.key);
            } else {
                // If the page is not snapped, the user invoked an item.
                var item = HubPagedata.items.getAt(args.detail.itemIndex);
                // nav.navigate("/pages/itemDetail/itemDetail.html", { item: Data.getItemReference(item) });

                if (item.title == "events in your city") {
                    nav.navigate("/pages/EventsPage/EventsPage.html", { item: Data.getItemReference(item) });
                }
                if (item.moviesName == "Movie") {
                    nav.navigate("/pages/MoviesPage/MoviesPage.html", { item: Data.getItemReference(item) });
                }
                if (item.moviesName == "Movie") {
                    nav.navigate("/pages/MoviesPage/MoviesPage.html", { item: Data.getItemReference(item) });
                }
                if (item.title == "book tickets") {
                    nav.navigate("/pages/BookingsPage/BookingsPage.html", { item: Data.getItemReference(item) });
                }
                if (item.title == "my bookings") {
                    nav.navigate("/pages/BookingsPage/BookingsPage.html", { item: Data.getItemReference(item) });
                }
            }
        }
    });

    function sendTileLocalImageNotification() {
        // Note: This sample contains an additional project, NotificationsExtensions.
        // NotificationsExtensions exposes an object model for creating notifications, but you can also modify the xml
        // of the notification directly. See the additional function sendTileLocalImageNotificationWithXml to see how
        // to do it by modifying Xml directly, or sendLocalImageNotificationWithStringManipulation to see how to do it
        // by modifying strings directly

        //Clear Existing Notification
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().clear();

        var imgSource = "ms-appx:///images/BigLiveTile1.jpg";
        var imgSmallSource = "ms-appx:///images/SmallLiveTile1.jpg";

        var tileContent = Windows.UI.Notifications.TileTemplateType.tileWideImageAndText01;
        var tileXml = Windows.UI.Notifications.TileUpdateManager.getTemplateContent(tileContent);
        var tileImageAttributes = tileXml.getElementsByTagName("image");
        var tileTextAttributes = tileXml.getElementsByTagName("text");

        tileImageAttributes[0].setAttribute("src", imgSource);
        tileImageAttributes[0].setAttribute("alt", "A Wide Live Tile.");
        tileTextAttributes[0].innerText = "Lifestyle Light Theme";

        var binding = tileXml.getElementsByTagName("binding");

        // create the square template and attach it to the wide template
        var template = Windows.UI.Notifications.TileTemplateType.tileSquareImage;
        var squareTileXml = Windows.UI.Notifications.TileUpdateManager.getTemplateContent(template);
        var squareTileImageElements = squareTileXml.getElementsByTagName("image");
        squareTileImageElements[0].setAttribute("src", imgSmallSource);
        squareTileImageElements[0].setAttribute("alt", "A Square Live Tile.");

        var binding = squareTileXml.getElementsByTagName("binding").item(0);
        var node = tileXml.importNode(binding, true);
        tileXml.getElementsByTagName("visual").item(0).appendChild(node);

        var tileNotification = new Windows.UI.Notifications.TileNotification(tileXml);
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);

        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
    }

})();
