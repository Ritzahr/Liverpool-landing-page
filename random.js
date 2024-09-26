// Photo collection site: 
// Database contains: users, venues and photos of venues. 
// Users contain values of: username, password.
// Venues contain values of: name, street address.
// Photos contain values of: name of venue, user who took picture(owners).

//REST system should: 
    // Allow storing of users, photos and venues.
    // Accessing venues and photos of venues. 


//Examples of server Requests:
    /* 
    POST wwww.photoCollectionSite.com/users
    body: { 
       "user": {
            username: "Test123", 
            password: "123456"
            }
        };
    POST wwww.photoCollectionSite.com/venues
    body: { 
       "venue": {
            name: "TestVenue", 
            "street_address": "Test Street, Test Ville"
            }
        };
    POST wwww.photoCollectionSite.com/venues/venue_id/photos
    body: { 
       "photos": {
            username: "Test123", 
            venue_name: "TestVenue",
            photo: "local/documents/photos"
            }
        };
    
    GET wwww.photoCollectionSite.com/venues
    accept field: application/json

    GET wwww.photoCollectionSite.com/venues/venue_id/photos
    accept field: application/json

    */
