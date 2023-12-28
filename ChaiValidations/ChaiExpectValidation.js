import chai from "chai"
var expect = chai.expect

function ValidateTheStatusCode(response, code)
{
    expect(response.status).to.be.equal(code)
}

function ValidateTheStatusMessage(response, message)
{
    expect(response.statusText).to.be.equal(message)
}

function ValidateThePropertyValuesAndLengthForResponseBody(response, propertyValue, length)
{
    expect(response.data).to.have.property(propertyValue).with.lengthOf(length);
}
function ValidateTheDataTypeOfResponseBodyValues(data, datatype)
{
    expect(data).to.be.a(datatype);
}
export{
    ValidateTheStatusCode,
    ValidateTheStatusMessage,
    ValidateThePropertyValuesAndLengthForResponseBody,
    ValidateTheDataTypeOfResponseBodyValues
}