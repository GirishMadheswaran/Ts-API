import { APIGatewayProxyHandler } from "aws-lambda";
// import "source-map-support/register";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const city = event.pathParameters?.city;

  if (!city || !cityData[city]) {
    return apiResponses._400({
      message: "missing city or no data for the city",
    });
  }

  return apiResponses._200(cityData[city]);
};

const apiResponses = {
  _200: (body: { [key: string]: any }) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body, null, 2),
    };
  },
  _400: (body: { [key: string]: any }) => {
    return {
      statusCode: 400,
      body: JSON.stringify(body, null, 2),
    };
  },
};

interface CityData {
  name: string;
  state: string;
  description: string;
  mayor: string;
  population: string;
  zipCodes?: string;
}

const cityData: { [key: string]: CityData } = {
  Salem: {
    name: "salem",
    state: "TN",
    description: "hiiiiii",
    mayor: "Giri",
    population: "100",
    zipCodes: "637303",
  },
  chennai: {
    name: "salem",
    state: "TN",
    description: "hiiiiii",
    mayor: "Giri",
    population: "100",
    zipCodes: "637303",
  },
  chengalpatu: {
    name: "salem",
    state: "TN",
    description: "hiiiiii",
    mayor: "Giri",
    population: "100",
    zipCodes: "637303",
  },
};
