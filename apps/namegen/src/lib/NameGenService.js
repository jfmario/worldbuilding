
import CarolinaAuth from '../../../auth/src/react/lib/CarolinaAuth';

class NameGen {
  async getPublicLangs() {
    return await CarolinaAuth.authPost('/namegen/api/public-langs');
  }
  async getLanguageInfo(langId) {
    return await CarolinaAuth.authPost(`/namegen/api/language-info/${langId}`);
  }
  async getNames(nameType, langId) {
    return await CarolinaAuth.authPost(`/namegen/api/generate/${nameType}/${langId}`);
  }
  async createLanguage() {
    return await CarolinaAuth.authPost('/namegen/api/create-language');
  }
  async getLanguage(langId) {
    return await CarolinaAuth.authPost(`/namegen/api/language/${langId}`);
  }
  async getPrivateLangs() {
    return await CarolinaAuth.authPost(`/namegen/api/private-langs`);
  }
  async editLanguage(langId, update) {
    return await CarolinaAuth.authPost(`/namegen/api/edit-language/${langId}`, update);
  }
  async deleteLanguage(langId) {
    return await CarolinaAuth.authPost(`/namegen/api/delete-language/${langId}`);
  }
}

var NameGenService = new NameGen();
export default NameGenService;
