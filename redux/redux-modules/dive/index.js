import { types } from "./types";

const initialState = {
  data: [], //Dive list
  monthlyData: [],
  mostReportedData: [],
  rankingDivesData: [],
  creaturesData: [],
  coordinatesData: [],
  meta: {}, //meta information about Dive and pagination
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.FETCH_MONTHLY_DIVE}_PENDING`:
    case `${types.FETCH_MOST_REPORTED_SPECIES}_PENDING`:
    case `${types.FETCH_RANKING_DIVES}_PENDING`:
    case `${types.FETCH_DIVE_CREATURES}_PENDING`:
    case `${types.FETCH_DIVE_COORDS}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.FETCH_MONTHLY_DIVE}_REJECTED`:
    case `${types.FETCH_MOST_REPORTED_SPECIES}_REJECTED`:
    case `${types.FETCH_RANKING_DIVES}_REJECTED`:
    case `${types.FETCH_DIVE_CREATURES}_REJECTED`:
    case `${types.FETCH_DIVE_COORDS}_REJECTED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.FETCH_MONTHLY_DIVE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        monthlyData: action.payload.data,
      };
    case `${types.FETCH_MOST_REPORTED_SPECIES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        mostReportedData: action.payload.data,
      };
    case `${types.FETCH_RANKING_DIVES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        rankingDivesData: action.payload.data,
      };
    case `${types.FETCH_DIVE_CREATURES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        creaturesData: action.payload.data.data,
      };
    case `${types.FETCH_DIVE_COORDS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        coordinatesData: action.payload.data.data,
      };

    default:
      return state;
  }
};
