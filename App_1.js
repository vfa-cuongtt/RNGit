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
    <BaiTapRedux />
  </Provider>
);
export default App;
