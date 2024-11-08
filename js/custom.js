// 1. 定义包含 9 张图片 URL 的数组
const imageUrls = [
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/bear.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/cat.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/chaiquan.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/keji.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/lion.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/panda.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/pig.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/rabbit.webp",
    "https://gitee.com/duo-ge/duo-ge/raw/imgs/imgs/sheep.webp"
];
// 定义一个绑定事件的函数
function bindTodayCardClick() {
    // 获取 todayCard 和 cover 元素
    const todayCard = document.querySelector('.todayCard');
    if (!todayCard) {
        return;
    }
    const imageElement = todayCard.querySelector('.todayCard-cover');
    if (!imageElement) {
        return;
    }
    // TODO 判断 todayCard 或者 imageElement为空时，不修改监听，防止报错
    // 拦截点击事件，阻止默认跳转行为
    todayCard.addEventListener('click', function(event) {
    event.stopPropagation(); // 阻止事件冒泡
    event.preventDefault();  // 阻止跳转 href
    // 随机生成一个索引来选择图片
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const newImageUrl = imageUrls[randomIndex];
    // 更新图片 src，切换到新的图片
    // console.log("切换到新图片：", newImageUrl);
    imageElement.src = newImageUrl;
    }, true); // 设置为 true 使用事件捕获阶段来确保事件处理

    const bannerButtonText = document.querySelector('.banner-button-text');
    if(!bannerButtonText){
        return;
    }
    bannerButtonText.textContent = '换一换';
}

// 初始页面加载时绑定事件
document.addEventListener('DOMContentLoaded', function() {
    // console.log("DOMContentLoaded改变监听");
    bindTodayCardClick();
});

// 当 PJAX 完成局部刷新时，重新绑定事件
document.addEventListener('pjax:complete', function() {
    // console.log("pjax:complete改变监听");
    bindTodayCardClick();
});