// 引入样式
import './styles/main.css'

// button
import LyButton from './components/button'
// checkbox
import LyCheckbox from './components/checkbox'
// icon
import LyIcon from './components/icon'
// input
import LyInput from './components/input'
// backdrop
import LyBackdrop from './components/backdrop'
// dialog
import LyDialog from './components/dialog'
// drawer
import LyDrawer from './components/drawer'
// form
import LyForm from './components/form'
// form-item
import LyFormItem from './components/form-item'
// select
import LySelect from './components/select'

// loading 指令
import VLoading from './directives/loading'

// 提示信息
import alertMessage from './utils/alert-message'
import { AlertMessage } from './utils/alert-message'
// 点击反馈
import startClickRipple from './utils/click-ripple'

export {
    // 组件...
    LyButton,
    LyCheckbox,
    LyIcon,
    LyInput,
    LyBackdrop,
    LyDialog,
    LyDrawer,
    LyForm,
    LyFormItem,
    LySelect,

    // 指令...
    VLoading,

    // 工具...
    alertMessage,
    AlertMessage,
    startClickRipple
}

export default {
    install(app) {
        // 注册全局组件
        app.component('LyButton', LyButton)
        app.component('LyCheckbox', LyCheckbox)
        app.component('LyIcon', LyIcon)
        app.component('LyInput', LyInput)
        app.component('LyBackdrop', LyBackdrop)
        app.component('LyDialog', LyDialog)
        app.component('LyDrawer', LyDrawer)
        app.component('LyForm', LyForm)
        app.component('LyFormItem', LyFormItem)
        app.component('LySelect', LySelect)

        // 注册 loading 指令
        app.directive('loading', VLoading)

        // 开启点击反馈
        startClickRipple()
    }
}