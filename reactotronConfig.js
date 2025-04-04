import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotronConfig = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'MoneyNote Debug',
  })
  .use(reactotronRedux())
  .connect();

export default reactotronConfig;

console.tron = Reactotron;
export const log = console.tron.log;
