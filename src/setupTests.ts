import "@testing-library/jest-dom";
import nock from "nock";

afterEach(() => {
    nock.cleanAll();
    nock.restore();
});
