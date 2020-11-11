import { takeEvery, put, } from 'redux-saga/effects'
import { initListAction } from './actionCreator'
import axios from 'axios'

// functin*:表示為generator函數
function* getAPI() {
    console.log('123')
    try {
        const response = yield axios.get('https://my-json-server.typicode.com/varbark/fake_json_api/cities')
        // store.dispatch(getInitList(response.data))
        // console.log(getInitList(response.data))
        console.log(response.data)
        // const action = getInitList(response.data)
        // yield put(action)
        yield put(initListAction(response.data))
    } catch (error) {
        console.log(error)
    }
}
function* mySaga() {
    // yield takeEvery(action.type ,調用的程式)
    yield takeEvery("getInitList", getAPI);
}

export default mySaga;