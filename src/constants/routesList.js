import UseCase1 from "../pages/UseCase1";

export const appPrefix = "test-demo"

export const routesList = [
    {
        path: appPrefix + "/use-case-1",
        element: UseCase1,
        name: "use case 1"
    },
    {
        path: appPrefix + "/use-case-2",
        element: UseCase1,
        name: "use case 2"
    }
]