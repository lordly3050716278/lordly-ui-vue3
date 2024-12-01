import './style.css'
import icons from './icons'

const __types = ['primary', 'success', 'error', 'danger', 'warning', 'info']

/**
 * @author - lordly
 * 
 * 显示一个提示消息框
 * 
 * @param { string } message - 显示的消息内容
 * @param { 'primary' | 'success' | 'error' | 'danger' | 'warning' | 'info' } [type='primary'] - 消息框的类型，决定样式的不同。支持的类型有：`primary`, `success`, `warning`, `error` 等。
 * @param { number } [duration=2000] - 消息框显示的持续时间，单位为毫秒，默认为 2000 毫秒。
 * 
 * @example
 * alertMessage('操作成功！', 'success', 3000)
 */
async function alertMessage(message, type = 'primary', duration = 2000) {

    if (!__types.includes(type)) {
        throw new Error(`[Error] alertMessage Invalid arg: type expect one of [ ${__types} ]. but got "${type}".`)
    }

    initContainer()

    const alertBox = createAlertBox(message, type)

    showBox(alertBox)

    await new Promise(resolve => setTimeout(resolve, duration))

    hideBox(alertBox)

    removeAlertBox(alertBox)
}

// 初始化容器
function initContainer() {
    const id = 'lordly-message-container'
    if (document.body.querySelector(`#${id} `)) return
    const container = document.createElement('div')
    container.id = id
    document.body.append(container)
}

// 创建消息盒子
function createAlertBox(message, type) {
    const alertBox = document.createElement('div')
    alertBox.classList.add('lordly-message-box', type)

    const icon = document.createElement('i')
    icon.classList.add('lordly-message-box__icon')
    icon.innerHTML = icons[type]

    const content = document.createElement('div')
    content.classList.add('lordly-message-box__content')
    content.textContent = message

    alertBox.append(icon, content)
    document.querySelector('#lordly-message-container').append(alertBox)

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

export const LyMessage = {
    primary: (message, duration) => alertMessage(message, 'primary', duration),
    success: (message, duration) => alertMessage(message, 'success', duration),
    error: (message, duration) => alertMessage(message, 'error', duration),
    danger: (message, duration) => alertMessage(message, 'danger', duration),
    warning: (message, duration) => alertMessage(message, 'warning', duration),
    info: (message, duration) => alertMessage(message, 'info', duration)
}

export default alertMessage