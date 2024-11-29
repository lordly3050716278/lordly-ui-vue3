import './style.css'
import icons from './icons'

const __types = ['primary', 'success', 'error', 'danger', 'warning', 'info']

/**
 * @author - lordly
 * 
 * 显示一个提示消息框
 * 
 * 该函数用于显示一个自定义的提示消息框，支持多种样式类型（如：`primary`），并能自动隐藏提示框。消息框的显示时间是可配置的，默认为 2000 毫秒。
 * 
 * @param { string } message - 显示的消息内容
 * @param { string } [type='primary'] - 消息框的类型，决定样式的不同。支持的类型有：`primary`, `success`, `warning`, `error` 等。
 * @param { number } [duration=2000] - 消息框显示的持续时间，单位为毫秒，默认为 2000 毫秒。
 * 
 * @returns { Promise<void> } 返回一个 `Promise`，该 `Promise` 会在消息框隐藏并移除后解析。
 * 
 * @example
 * alertMessage('操作成功！', 'success', 3000)
 *   .then(() => console.log('消息已隐藏'))
 * 
 * @note
 * - 使用了 `__types` 数组来验证 `type` 参数是否有效。如果无效，默认为 `primary`。
 * - 样式和容器会在首次调用时自动初始化。
 */
async function alertMessage(message, type = 'primary', duration = 2000) {

    if (!__types.includes(type)) type = 'primary'

    initContainer()

    const alertBox = createAlertBox(message, type)

    showBox(alertBox)

    await new Promise(resolve => setTimeout(resolve, duration))

    hideBox(alertBox)

    removeAlertBox(alertBox)
}

// 初始化容器
function initContainer() {
    const id = 'lordly-alert-msg-container'
    if (document.body.querySelector(`#${id}`)) return
    const container = document.createElement('div')
    container.id = id
    document.body.append(container)
}

// 创建消息盒子
function createAlertBox(message, type) {
    const alertBox = document.createElement('div')
    alertBox.classList.add('lordly-alert-msg-box', type)

    const icon = document.createElement('i')
    icon.classList.add('lordly-alert-msg-box__icon')
    icon.innerHTML = icons[type]

    const content = document.createElement('div')
    content.classList.add('lordly-alert-msg-box__content')
    content.textContent = message

    alertBox.append(icon, content)
    document.querySelector('#lordly-alert-msg-container').append(alertBox)

    alertBox.style.setProperty('--h', alertBox.offsetHeight + 'px')

    return alertBox
}

// 显示消息盒子
function showBox(box) {
    box.classList.add('show')
}

// 隐藏消息盒子
function hideBox(box) {
    box.classList.add('hide')
}

// 移除消息盒子
function removeAlertBox(alertBox) {
    alertBox.onanimationend = alertBox.remove
}

export const AlertMessage = {
    primary: (message, duration) => alertMessage(message, 'primary', duration),
    success: (message, duration) => alertMessage(message, 'success', duration),
    error: (message, duration) => alertMessage(message, 'error', duration),
    danger: (message, duration) => alertMessage(message, 'danger', duration),
    warning: (message, duration) => alertMessage(message, 'warning', duration),
    info: (message, duration) => alertMessage(message, 'info', duration)
}

export default alertMessage