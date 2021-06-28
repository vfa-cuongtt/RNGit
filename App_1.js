import React from 'react';
import Buoi3 from './src/component/Buoi3/index';
import Touched from './src/component/Buoi5/Touched';
import RenderWithState from './src/component/Buoi5/RenderWithState';
import RenderIcon from './src/component/Buoi5/RenderIcon';
import ScrollViewItem from './src/component/Bai6/ScrollViewItem';
import FlatListItem from './src/component/Bai6/FlatListItem';
import SectionListItem from './src/component/Bai6/SectionListItem';
import BaiTapOanTuXi from './src/component/Buoi8/index';
import DemoRedux from './src/component/Buoi9Redux/index';
import {Provider} from 'react-redux';
import store from './src/component/Buoi9Redux/redux/store';
import BaiTapRedux from './src/component/Buoi9Redux/BaiTapRedux/BaiTapRedux';
import Lifecycle from './src/component/Lifecycle';
import BaiTapLifecycle from './src/component/Lifecycle/BaiTap/BaiTapLifecycle';
import Validation from './src/component/Validation/index';
import ValidationFormik from './src/component/Validation/ValidationFormik';
import RootNavigator from './src/component/Navigation';
import LearnHook from './src/component/Hook';
import Parent from './src/component/BaiTapHook/Parent';
import BaiTapColor from './src/component/BaiTapHook/BaiTapColor';
const App = () => (
  // <Buoi3 />;
  // <Touched />;
  // <RenderIcon />;
  // <ScrollViewItem />;
  // <FlatListItem />;
  // <SectionListItem />
  // <BaiTapOanTuXi />
  <Provider store={store}>
    {/* <DemoRedux /> */}
    {/* <BaiTapRedux /> */}
    {/* <Lifecycle /> */}
    {/* <BaiTapLifecycle /> */}
    {/* <Validation /> */}
    {/* <ValidationFormik /> */}
    {/* <RootNavigator />
     */}
    <LearnHook />
    {/* <Parent /> */}
    {/* <BaiTapColor /> */}
  </Provider>
);
export default App;
