
import axios from 'axios';
import localforage from 'localforage';

class AuthLib {
  constructor() {
    var self = this;
    this.db = localforage.createInstance({
      name: 'CarolinaAuth',
      storeName: 'carolina_auth'
    });
    this.currentUser = null;
    this.db.getItem('token').then((token) => {
      self.token = token;
    }).catch((err) => {});
    this.db.getItem('username').then((username) => {
      self.currentUser = username;
    }).catch((err) => {});
    this.axios = axios.create({
      headers: { 'Content-Type': 'application/json' },
      validateStatus: function(s) {
        return s < 500;
      }
    });
  }
  async authPost(url, data, redirectPath) {

    if (!data) data = {};
    data.carolinaToken = this.token;
    var res = await this.axios.post(url, data);

    if (redirectPath && res.status == 401) {
      await this.db.setItem('next', redirectPath);
      window.location = '/auth';
    }
    else return res.data;
  }
  async login(username, password) {
    var res = await this.axios.post('/auth/api/login', {
      username: username,
      password: password
    });
    if (res.data.success == true) {
      this.db.setItem('token', res.data.token);
      this.db.setItem('username', username);
      this.token = res.data.token;
      this.currentUser = username;
    }
    return res.data;
  }
  logout() {
    this.db.removeItem('token');
    this.currentUser = null;
    this.token = null;
  }
  async register(username, email, password) {
    var res = await this.axios.post('/auth/api/register', {
      username: username,
      email: email,
      password: password
    });
    if (res.data.success == true) {
      this.db.setItem('token', res.data.token);
      this.token = res.data.token;
    }
    return res.data;
  }
  async authCheck() {
    try {
      this.token = await this.db.getItem('token');
      var res = await this.authPost('/auth/api/check', {}, null);
      return res.success;
    }
    catch (err) {
      return false;
    }
  }
  async getProfile() {
    return await this.authPost('/auth/api/get-profile', {}, null);
  }
  async updateProfile(details) {
    return await this.authPost('/auth/api/update-profile', details, null);
  }
  async updatePassword(oldPassword, newPassword) {
    return await this.authPost('/auth/api/update-password', {
      oldPassword: oldPassword,
      newPassword: newPassword
    }, null);
  }
  async forgotPassword(username) {
    var res = await this.axios.post('/auth/api/forgot', { username: username });
    return res.data;
  }
}

const CarolinaAuth = new AuthLib();
export default CarolinaAuth;
