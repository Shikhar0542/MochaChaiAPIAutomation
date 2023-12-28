const url = 'https://restful-booker.herokuapp.com'

const GetURIs = {
    "GetBookingIDsByParams": "https://restful-booker.herokuapp.com/booking",
}

function GetBookingDataByID(date) 
{
    return `/booking/${date}`
}

const PostURIs = {
    "PostAuth" : "/auth",
    "PostNewBooking": "https://restful-booker.herokuapp.com/booking",
}

const PutURIs = {
    "UpdateBookingsByID": "https://restful-booker.herokuapp.com/booking/:id",
}

const DeleteURIs = {
    "GetBookingIDsByParams": "https://restful-booker.herokuapp.com/booking/1",
}

export
{
    url,
    GetURIs,
    PostURIs,
    PutURIs,
    DeleteURIs,
    GetBookingDataByID
}