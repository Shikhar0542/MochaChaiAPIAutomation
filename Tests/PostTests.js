import * as URLData from "../EndpointsClass/APIEndpoints.js"
import * as requesters from "../RequestHeaders/PostHeaders.js"
import * as AuthBody from "../DataBody/AuthenticationBody.js"
import * as ChaiExpectRunners from "../ChaiValidations/ChaiExpectValidation.js"


describe("Basic Authentication", async() => {
    it("Post Request for accessing token", async() => {
        const authEndpoint = (URLData.url).concat(URLData.PostURIs.PostAuth);
        const res =  await requesters.PostRequestWithBody(authEndpoint, AuthBody.headerBody);
        console.log("Token Fetched: "+res.data.token);
        ChaiExpectRunners.ValidateTheStatusCode(res, 200)
        ChaiExpectRunners.ValidateTheStatusMessage(res, 'OK')
        ChaiExpectRunners.ValidateThePropertyValuesAndLengthForResponseBody(res, 'token', 15)
        ChaiExpectRunners.ValidateTheDataTypeOfResponseBodyValues(res.data.token, 'string')
    })
})