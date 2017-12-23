
import CarolinaAuth from '../../../auth/src/react/lib/CarolinaAuth';

class NameGen {
  async getPublicLangs() {
    return await CarolinaAuth.authPost('/namegen/api/public-langs');
  }
}

var NameGenService = new NameGen();
export default NameGenService;
