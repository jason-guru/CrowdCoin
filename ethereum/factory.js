import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x110D73f38964394d10cad4E3aCb85942dCb9d7f3"
)

export default instance;