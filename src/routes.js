import Greeting from "./pages/greeting/Greeting";
import HyphothesisOne from "./pages/hypothesisOne/HypothesisOne";
import HyphothesisTwo from "./pages/hypothesisTwo/HypothesisTwo";
import Results from "./pages/results/Results";
import { GREETING_ROUTE, HYPHOTHESIS_ONE_ROUTE, HYPHOTHESIS_TWO_ROUTE, RESULTS_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: GREETING_ROUTE,
        Component: Greeting
    },
    {
        path: HYPHOTHESIS_ONE_ROUTE,
        Component: HyphothesisOne
    },
    {
        path: HYPHOTHESIS_TWO_ROUTE,
        Component: HyphothesisTwo
    },
    {
        path: RESULTS_ROUTE,
        Component: Results
    }
];