import './style.css'

/**
 * @author - lordly
 * 
 * 在页面上启用点击波纹效果。
 * 
 * @example
 * // 启动点击波纹效果
 * startClickRipple()
 */
function startClickRipple() {
    document.addEventListener('click', e => {
        const ripple = document.createElement('div')
        ripple.classList.add('lordly-click-ripple')

        // 设置波纹的位置
        ripple.style.left = `${e.pageX}px`
        ripple.style.top = `${e.pageY}px`

        ripple.style.borderRadius = `${Math.random() * 100 + 30}% ${Math.random() * 100 + 30}% ${Math.random() * 100 + 30}% ${Math.random() * 100 + 30}% / ${Math.random() * 100 + 30}% ${Math.random() * 100 + 30}% ${Math.random() * 100 + 30}% ${Math.random() * 100 + 30}%`

        document.body.append(ripple)

        ripple.onanimationend = () => ripple.remove()
    })
}

export default startClickRipple