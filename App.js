import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './Components/Header/HeaderComponent';
import BodyComponent from './Components/Body/BodyComponent';
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search item
 * - Food Item card component
 * Footer
 * - Copyrights
 * - Desclimer
 *
 */
const AppComponent = () => {
    const restoData = [
        {
            "info": {
                "id": "195336",
                "name": "Hayath Restaurant",
                "cloudinaryImageId": "sv41lscaczyrkpsfmyov",
                "locality": "Medak Road",
                "areaName": "Naseer Nagar",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Kebabs",
                    "Hyderabadi",
                    "Chinese"
                ],
                "avgRating": 4.3,
                "parentId": "94663",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "OnlyOnSwiggy",
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/hayath-restaurant-medak-road-naseer-nagar-siddipet-195336",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "362166",
                "name": "Ruchis Biryani Centre",
                "cloudinaryImageId": "vdrgbh1eqcxjjlsgbzqt",
                "locality": "Hanuman Nager",
                "areaName": "Shivaji Nagar",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "172991",
                "avgRatingString": "4.1",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 22:45:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ruchis-biryani-centre-hanuman-nager-shivaji-nagar-siddipet-362166",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "199002",
                "name": "Akshaya Family Restaurantd",
                "cloudinaryImageId": "z9bmqibo1znce3zer57r",
                "locality": "Bus Stop Road",
                "areaName": "Shivaji Nagar",
                "costForTwo": "₹125 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian",
                    "Tandoor",
                    "Mughlai"
                ],
                "avgRating": 4.3,
                "parentId": "453358",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "OnlyOnSwiggy",
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/akshaya-family-restaurantd-bus-stop-road-shivaji-nagar-siddipet-199002",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "195342",
                "name": "SLN Fast Food Centre",
                "cloudinaryImageId": "vsepvp3g06dba82d0ng9",
                "locality": "Medak Road",
                "areaName": "Mustabad X Road",
                "costForTwo": "₹199 for two",
                "cuisines": [
                    "Chinese",
                    "Biryani",
                    "Beverages"
                ],
                "avgRating": 4,
                "parentId": "189480",
                "avgRatingString": "4.0",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 0.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 22:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/sln-fast-food-centre-medak-road-mustabad-x-road-siddipet-195342",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "738390",
                "name": "MY3 Grill & Restaurant",
                "cloudinaryImageId": "51a9bdbd13ef9b4a8431d5c785c00a84",
                "locality": "Siddipet town",
                "areaName": "Hanuman Nager",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "438422",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "OnlyOnSwiggy",
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/my3-grill-and-restaurant-town-hanuman-nager-siddipet-738390",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "715958",
                "name": "RS Cloud Kitchen",
                "cloudinaryImageId": "c99965eeb99faed4e5950ae5646ae7c1",
                "locality": "Gajwel",
                "areaName": "Hanuman Nager",
                "costForTwo": "₹199 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian",
                    "Pizzas",
                    "Burgers",
                    "Beverages"
                ],
                "avgRating": 3.7,
                "parentId": "398151",
                "avgRatingString": "3.7",
                "totalRatingsString": "20+",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/rs-cloud-kitchen-gajwel-hanuman-nager-siddipet-715958",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "219069",
                "name": "Athithi Delight Multi Cuisine Restaurant",
                "cloudinaryImageId": "vdngkbeftf4fndlp8slx",
                "locality": "Hyderabad Road",
                "areaName": "Hanuman Nager",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Indian"
                ],
                "avgRating": 4.3,
                "parentId": "37511",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 22:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/athithi-delight-multi-cuisine-restaurant-hyderabad-road-hanuman-nager-siddipet-219069",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "393834",
                "name": "AFC Restaurant",
                "cloudinaryImageId": "qpberkhz26biwfb9pquz",
                "locality": "Govt Hospital Road",
                "areaName": "Opp Mini Stadim",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian",
                    "Tandoor",
                    "Beverages"
                ],
                "avgRating": 4,
                "parentId": "27404",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 0.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 22:50:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/afc-restaurant-govt-hospital-road-opp-mini-stadim-siddipet-393834",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "744747",
                "name": "Madina Hotel",
                "cloudinaryImageId": "f780ed3e2723fa5e0c72b0552962fca7",
                "locality": "Kadarpura",
                "areaName": "Hanuman Nager",
                "costForTwo": "₹199 for two",
                "cuisines": [
                    "Indian",
                    "North Indian",
                    "Biryani",
                    "Chinese",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "128748",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-03 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "OnlyOnSwiggy",
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-043e727b-0e0d-47f3-9747-e04758e9273d"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/madina-hotel-kadarpura-hanuman-nager-siddipet-744747",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ];
    return (
        <div>
            <HeaderComponent />
            <BodyComponent data={restoData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);