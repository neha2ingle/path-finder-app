import { useErrorInterceptor } from "./interceptors";

const axios = jest.requireActual("axios");

useErrorInterceptor(axios);
const errorHandler = axios.interceptors.response.handlers[0];

describe("axios interceptors", () => {
  it("error interceptor", async () => {
    expect(errorHandler.fulfilled({ data: "zoo" })).toStrictEqual({
      data: "zoo"
    });

    window.alert = jest.fn();

    const rejected: Promise = errorHandler.rejected({
      response: {
        statusText: "Not Found",
        status: 404,
        data: { message: "Page not found" }
      }
    });

    rejected.catch(reason => {
      expect(reason).toMatchObject({
        response: {
          statusText: "Not Found",
          status: 404,
          data: { message: "Page not found" }
        }
      });

      expect(window.alert).toHaveBeenCalledWith(
        "could not process last request \nNot Found"
      );
    });
  });
});
