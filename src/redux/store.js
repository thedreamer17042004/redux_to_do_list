import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const  composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);
// tại không có tham số thứ hai nên ta cho composeEnhancers là tham số thứ hai thôi

// const store = createStore(rootReducer, initValue, enhancers);
// rootReducer dung để cập dữ liệu(or thực hiện) chung trong cai kho dựa trên các action hiện tại
// initValue truyền vào giá trị mặc định
// enhancers để cấu hình middleware
export default store;

