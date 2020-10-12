import API from '../helpers/api';

export const getInsuranceDataRequest = (body) => {
    return new Promise((resolve, reject) => {
        API.postRequest('filter_insurance_data', body).then((response) => {
          resolve(response);
        }).catch((error) => {
            console.log('error', error);
          reject(error);
        });
      });
}

export const getDashboard = () => {
    return new Promise((resolve, reject) => {
        API.getRequest('dashboard').then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
}
