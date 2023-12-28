import * as URLData from "../EndpointsClass/APIEndpoints.js"
import * as requesters from "../RequestHeaders/GetHeaders.js"
import * as ChaiExpectRunners from "../ChaiValidations/ChaiExpectValidation.js"


describe("Get Enpoints call", async() => {
    it("Get Request to get fetch data by ID", async() => {
        const id = 1;
        const BookingDataEndpoint = (URLData.url).concat(URLData.GetBookingDataByID(id));
        const res =  await requesters.GetRequestByEndpoint(BookingDataEndpoint);
        console.log(res.data);
        console.log(res.status);
        // ChaiExpectRunners.ValidateTheStatusCode(res, 200)
        // ChaiExpectRunners.ValidateTheStatusMessage(res, 'OK')
        // ChaiExpectRunners.ValidateTheDataTypeOfResponseBodyValues(res.data.firstname, 'string')
        // ChaiExpectRunners.ValidateTheDataTypeOfResponseBodyValues(res.data.lastname, 'string')
    })
})